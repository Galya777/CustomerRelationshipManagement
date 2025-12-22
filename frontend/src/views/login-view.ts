import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('login-view')
export class LoginView extends LitElement {
  @state() private username!: string;
  @state() private password!: string;
  @state() private error!: string | null;

  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.error = null;
  }

  static styles = css`
    .container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0b3b9e 100%);
      padding: 2rem;
    }
    .card {
      background: rgba(255, 255, 255, 0.07);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      width: 100%;
      max-width: 440px;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08);
      padding: 1.5rem 1.5rem 1.25rem;
      border: 1px solid rgba(255,255,255,0.12);
    }
    h1 {
      margin: 0 0 1.25rem 0;
      text-align: center;
      color: #ffffff;
      font-size: 1.75rem;
      letter-spacing: 0.3px;
    }
    .subtle { color: rgba(255,255,255,0.75); text-align: center; margin-bottom: 1.25rem; }
    .form-group { margin-bottom: 0.75rem; }
    label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: rgba(255,255,255,0.9); }
    input {
      width: 100%;
      max-width: 400px; /* Match the full width like the buttons */
      margin: 0;       /* Align with button edges inside the card */
      display: block;
      padding: 0.5rem 0.7rem;
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 8px;
      font-size: 0.9rem;
      background: rgba(255,255,255,0.12);
      color: #fff;
      outline: none;
    }
    input::placeholder { color: rgba(255,255,255,0.65); }
    input:focus {
      border-color: #60a5fa;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
      background: rgba(255,255,255,0.16);
    }
    .actions { margin-top: 0.75rem; display: grid; gap: 0.6rem; }
    .btn-primary {
      width: 100%;
      padding: 0.7rem 0.9rem;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #fff;
      border: 0;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      letter-spacing: 0.3px;
      box-shadow: 0 10px 20px rgba(37,99,235,0.35);
      transition: transform .05s ease, box-shadow .2s ease, filter .2s ease;
    }
    .btn-primary:hover { filter: brightness(1.05); box-shadow: 0 14px 28px rgba(37,99,235,0.45); }
    .btn-primary:active { transform: translateY(1px); }
    .btn-ghost {
      width: 100%;
      padding: 0.65rem 0.9rem;
      background: transparent;
      color: #e5e7eb;
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: background .2s ease, border-color .2s ease;
    }
    .btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.35); }
    .error {
      background: rgba(220, 38, 38, 0.15);
      color: #fecaca;
      padding: 0.6rem 0.8rem;
      border-radius: 10px;
      margin-bottom: 0.9rem;
      font-size: 0.95rem;
      border: 1px solid rgba(220, 38, 38, 0.35);
    }
  `;

  private onInput(e: Event) {
    const t = e.target as HTMLInputElement;
    (this as any)[t.name] = t.value;
  }
  private async onSubmit(e: Event) {
    e.preventDefault();
    this.error = null;

    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Username and password are required';
      return;
    }

    try {
      // Use Basic Auth verification via API service
      const { apiService } = await import('../services/api');
      await apiService.login({ username: this.username, password: this.password });
      // On success, go to users page using global router when available
      this.navigateTo('/users');
    } catch (err) {
      this.error = 'Invalid username or password';
      console.error('Login error:', err);
    }
  }

  private navigateTo(path: string) {
    console.debug('[login-view] navigateTo ->', path, 'current=', window.location.pathname);
    try {
      // Prefer the global router instance created in main.ts
      const r = (window as any).vaadin && (window as any).vaadin.router;
      if (r && typeof r.go === 'function') {
        console.debug('[login-view] using global router.go');
        r.go(path);
        return;
      }

      // Fallback to history API
      history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (err) {
      // As last resort, full navigation
      console.warn('[login-view] navigateTo final fallback to window.location.href', err);
      window.location.href = path;
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="card">
          <h1>Log in</h1>
          <div class="subtle">Welcome back. Please enter your credentials to continue.</div>
          ${this.error ? html`<div class="error">${this.error}</div>` : ''}
          <form @submit=${this.onSubmit}>
            <div class="form-group">
              <label for="username">Username</label>
              <input id="username" name="username" type="text" .value=${this.username} @input=${this.onInput} />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input id="password" name="password" type="password" .value=${this.password} @input=${this.onInput} />
            </div>
            <div class="actions">
              <button class="btn-primary" type="submit">Log in</button>
              <button class="btn-ghost" type="button" @click=${() => { this.navigateTo('/register'); }}>
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'login-view': LoginView;
  }
}
