import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/button';

@customElement('landing-view')
export class LandingView extends LitElement {
  static styles = css`
    .landing-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0b3b9e 100%);
      padding: 2rem;
      color: white;
      text-align: center;
    }
    
    .card {
      background: rgba(255, 255, 255, 0.07);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      width: 100%;
      max-width: 800px;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08);
      padding: 2.5rem;
      border: 1px solid rgba(255,255,255,0.12);
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: #ffffff;
    }
    
    .subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 2.5rem 0;
      text-align: left;
    }
    
    .feature {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .feature h3 {
      margin-top: 0;
      color: #60a5fa;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    
    .premium-glow {
      text-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
      letter-spacing: 0.5px;
    }
    
    .premium {
      color: #ffd700;
      font-weight: 600;
      position: relative;
      display: inline-block;
    }
    
    .premium:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -4px;
      left: 0;
      background: linear-gradient(90deg, transparent, #ffd700, transparent);
    }
    
    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }
    
    vaadin-button {
      padding: 0.75rem 2rem;
      font-weight: 500;
      border-radius: 8px;
      transition: all 0.2s;
    }
    
    vaadin-button[theme~="primary"] {
      background: #3b82f6;
      color: white;
      border: none;
    }
    
    vaadin-button[theme~="primary"]:hover {
      background: #2563eb;
      transform: translateY(-2px);
    }
    
    vaadin-button[theme~="secondary"] {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    vaadin-button[theme~="secondary"]:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
    }
  `;

  render() {
    return html`
      <div class="landing-container">
        <div class="card">
          <h1>Welcome to <span class="premium">Aurelian</span></h1>
          <p class="subtitle">
            The CRM of distinction for those who lead. 
            Where exceptional businesses cultivate lasting relationships.
          </p>
          
          <div class="features">
            <div class="feature">
              <h3>Easy to Use</h3>
              <p>Intuitive interface designed for both beginners and professionals.</p>
            </div>
            <div class="feature">
              <h3>Powerful Features</h3>
              <p>All the tools you need to manage your customer relationships effectively.</p>
            </div>
            <div class="feature">
              <h3>Secure & Reliable</h3>
              <p>Your data is protected with the latest security measures.</p>
            </div>
          </div>
          
          <div class="buttons">
            <vaadin-button theme="primary" @click="${() => this.navigateTo('/register')}">
              Create Account
            </vaadin-button>
            <vaadin-button theme="secondary" @click="${() => this.navigateTo('/login')}">
              Log In
            </vaadin-button>
          </div>
        </div>
      </div>
    `;
  }

  private navigateTo(path: string) {
    window.location.href = path;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'landing-view': LandingView;
  }
}
