import { html, LitElement } from 'lit';
import '@vaadin/text-field';
import '@vaadin/password-field';
import '@vaadin/button';
import '@vaadin/notification';
import '@vaadin/icon';
import '@vaadin/icons';

interface User {
    username: string;
    name: string;
    role: string;
}

declare global {
    interface HTMLElementTagNameMap {
        'login-view': LoginView;
    }
}

export class LoginView extends LitElement {
    // declare reactive properties using the legacy 'properties' approach
    static properties = {
        username: { type: String },
        password: { type: String },
        error: { type: String },
        loading: { type: Boolean }
    };

    username: string = '';
    password: string = '';
    error: string = '';
    loading: boolean = false;

    render() {
        return html`
            <style>
                .login-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    padding: 1rem;
                    background-color: #f3f4f6;
                }
                .login-card {
                    width: 100%;
                    max-width: 28rem;
                    background: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    padding: 2rem;
                }
                .login-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    text-align: center;
                    margin-bottom: 1.5rem;
                    color: #1f2937;
                }
                .error-message {
                    margin-bottom: 1rem;
                    padding: 0.75rem;
                    background-color: #fee2e2;
                    color: #b91c1c;
                    border-radius: 0.375rem;
                    font-size: 0.875rem;
                }
                .form-field {
                    margin-bottom: 1rem;
                    width: 100%;
                }
                .login-button {
                    width: 100%;
                    margin-bottom: 1rem;
                }
                .register-link {
                    text-align: center;
                    font-size: 0.875rem;
                    color: #4b5563;
                }
                .register-link a {
                    color: #2563eb;
                    text-decoration: none;
                }
                .register-link a:hover {
                    text-decoration: underline;
                }
            </style>

            <div class="login-container">
                <div class="login-card">
                    <h1 class="login-title">Login</h1>

                    ${this.error ? html`
                        <div class="error-message">
                            ${this.error}
                        </div>
                    ` : ''}

                    <div class="form-field">
                        <vaadin-text-field
                                label="Username"
                                .value="${this.username}"
                                @input="${(e: Event) => { this.username = (e.target as HTMLInputElement).value; }}"
                                ?disabled="${this.loading}"
                        ></vaadin-text-field>
                    </div>

                    <div class="form-field">
                        <vaadin-password-field
                                label="Password"
                                .value="${this.password}"
                                @input="${(e: Event) => { this.password = (e.target as HTMLInputElement).value; }}"
                                ?disabled="${this.loading}"
                        ></vaadin-password-field>
                    </div>

                    <vaadin-button
                            theme="primary"
                            class="login-button"
                            @click="${() => this._onLogin()}"
                            ?disabled="${this.loading || !this.username || !this.password}"
                    >
                        ${this.loading ? 'Logging in...' : 'Login'}
                    </vaadin-button>

                    <div class="register-link">
                        Don't have an account?
                        <a href="/register">Register here</a>
                    </div>
                </div>
            </div>
        `;
    }

    private async _onLogin(): Promise<void> {
        this.loading = true;
        this.error = '';
        this.requestUpdate(); // ensure render after state changes (usually not required, but safe)

        try {
            // Test account credentials
            const TEST_USERNAME = 'test1';
            const TEST_PASSWORD = '12345678';

            // Simulate API call with a small delay
            await new Promise(resolve => setTimeout(resolve, 500));

            // Validate credentials
            if (!this.username || !this.password) {
                this.error = 'Please enter both username and password';
                this.loading = false;
                this.requestUpdate();
                return;
            }

            if (this.username === TEST_USERNAME && this.password === TEST_PASSWORD) {
                // Create user object
                const user: User = {
                    username: this.username,
                    name: 'Test User',
                    role: 'admin'
                };

                // Store user in localStorage
                localStorage.setItem('user', JSON.stringify(user));

                // Navigate to dashboard
                window.location.href = '/';
            } else {
                this.error = 'Invalid username or password';
                this.loading = false;
                this.requestUpdate();
            }
        } catch (err) {
            console.error('Login error:', err);
            this.error = 'An unexpected error occurred. Please try again.';
            this.loading = false;
            this.requestUpdate();
        }
    }
}

// Register element (replaces @customElement)
customElements.define('login-view', LoginView);
