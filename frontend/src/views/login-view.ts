import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('login-view')
export class LoginView extends LitElement {
  @state() private username = '';
  @state() private password = '';
  @state() private error: string | null = null;

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

  private async getCsrfToken(): Promise<string> {
    try {
      const response = await fetch('/api/csrf', {
        method: 'GET',
        credentials: 'include' // Important for cookies
      });
      
      if (!response.ok) {
        console.warn('Failed to get CSRF token, proceeding without it');
        return '';
      }
      
      const data = await response.json();
      return data.token || '';
    } catch (err) {
      console.warn('Error getting CSRF token, proceeding without it:', err);
      return '';
    }
  }

  private async onSubmit(e: Event) {
    e.preventDefault();
    this.error = null;

    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Username and password are required';
      return;
    }

    // Get CSRF token first
    const csrfToken = await this.getCsrfToken();
    
    // Create the Basic Auth token
    const token = btoa(`${this.username}:${this.password}`);
    
    try {
      // Prepare headers with CSRF token if available
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${token}`
      };
      
      if (csrfToken) {
        headers['X-CSRF-TOKEN'] = csrfToken;
      }

      // First try to authenticate with Basic Auth
      const testResponse = await fetch('/api/users/me', { headers });

      if (testResponse.ok) {
        // If Basic Auth works, store the token and proceed
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', this.username);
        localStorage.setItem('authHeader', `Basic ${token}`);
        window.location.href = '/users';
        return;
      }

      // If Basic Auth fails, try the login endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers,
        credentials: 'include', // Important for cookies
        body: JSON.stringify({
          email: this.username,
          password: this.password
        })
      });

      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || 'Login failed');
      }
      
      // Redirect to dashboard
      window.history.pushState({}, '', '/dashboard');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (err) {
      this.error = 'Invalid email or password';
      console.error('Login error:', err);
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
              <button class="btn-ghost" type="button" @click=${() => { window.history.pushState({}, '', '/register'); window.dispatchEvent(new PopStateEvent('popstate')); }}>
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
