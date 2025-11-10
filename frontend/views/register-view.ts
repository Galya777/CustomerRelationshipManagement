import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@vaadin/text-field';
import '@vaadin/password-field';
import '@vaadin/button';
import '@vaadin/notification';

@customElement('register-view')
export class RegisterView extends LitElement {
  @state() private username = '';
  @state() private email = '';
  @state() private password = '';
  @state() private confirmPassword = '';
  @state() private error = '';
  @state() private success = false;
  @state() private loading = false;

  render() {
    if (this.success) {
      return html`
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center">
            <h1 class="text-2xl font-bold text-center mb-4">Registration Successful!</h1>
            <p class="mb-6">Your account has been created successfully.</p>
            <vaadin-button 
              theme="primary" 
              @click="${() => { window.location.href = '/login'; }}"
            >
              Go to Login
            </vaadin-button>
          </div>
        </div>
      `;
    }

    return html`
      <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h1 class="text-2xl font-bold text-center mb-6">Create an Account</h1>
          
          ${this.error ? html`
            <div class="mb-4 p-3 bg-red-100 text-red-700 rounded">
              ${this.error}
            </div>
          ` : ''}
          
          <vaadin-text-field
            label="Username"
            .value="${this.username}"
            @input="${(e: Event) => this.username = (e.target as HTMLInputElement).value}"
            class="w-full mb-4"
            ?disabled="${this.loading}"
            required
          ></vaadin-text-field>
          
          <vaadin-text-field
            label="Email"
            type="email"
            .value="${this.email}"
            @input="${(e: Event) => this.email = (e.target as HTMLInputElement).value}"
            class="w-full mb-4"
            ?disabled="${this.loading}"
            required
          ></vaadin-text-field>
          
          <vaadin-password-field
            label="Password"
            .value="${this.password}"
            @input="${(e: Event) => this.password = (e.target as HTMLInputElement).value}"
            class="w-full mb-4"
            ?disabled="${this.loading}"
            required
          ></vaadin-password-field>
          
          <vaadin-password-field
            label="Confirm Password"
            .value="${this.confirmPassword}"
            @input="${(e: Event) => this.confirmPassword = (e.target as HTMLInputElement).value}"
            class="w-full mb-6"
            ?disabled="${this.loading}"
            required
            @keyup="${(e: KeyboardEvent) => e.key === 'Enter' && this._onRegister()}"
          ></vaadin-password-field>
          
          <vaadin-button
            theme="primary"
            class="w-full mb-4"
            @click="${this._onRegister}"
            ?disabled="${this.loading || !this._isFormValid()}"
          >
            ${this.loading ? 'Creating Account...' : 'Register'}
          </vaadin-button>
          
          <div class="text-center text-sm">
            Already have an account? 
            <a href="/login" class="text-blue-600 hover:underline">Login here</a>
          </div>
        </div>
      </div>
    `;
  }

  private _isFormValid() {
    return (
      this.username &&
      this.email &&
      this.password &&
      this.confirmPassword &&
      this.password === this.confirmPassword
    );
  }

  private async _onRegister() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    this.loading = true;
    this.error = '';
    
    try {
      // Replace this with your actual registration logic
      // For demo purposes, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send the registration data to your backend
      // and handle the response accordingly
      this.success = true;
    } catch (err) {
      this.error = 'Registration failed. Please try again.';
      console.error('Registration error:', err);
    } finally {
      this.loading = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'register-view': RegisterView;
  }
}
