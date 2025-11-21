import { html, LitElement, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { apiService, UserDto } from '../services/api.js';

@customElement('user-form')
export class UserForm extends LitElement {
  @property({ type: Object })
  user: UserDto | null = null;

  @state()
  private formData: Omit<UserDto, 'id'> = {
    name: '',
    email: '',
    phone: '',
  };

  @state()
  private loading = false;

  @state()
  private error: string | null = null;

  @state()
  private success: string | null = null;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('user') && this.user) {
      this.formData = { ...this.user };
    }
  }

  private handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    this.formData = { ...this.formData, [name]: value };
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();

    if (!this.formData.name.trim() || !this.formData.email.trim()) {
      this.error = 'Name and email are required';
      return;
    }

    try {
      this.loading = true;
      this.error = null;
      this.success = null;

      if (this.user?.id) {
        // Update existing user
        await apiService.updateUser(this.user.id, this.formData);
        this.success = 'User updated successfully!';
      } else {
        // Create new user
        await apiService.createUser(this.formData);
        this.success = 'User created successfully!';
        // Reset form for new user
        this.formData = { name: '', email: '', phone: '' };
      }

      // Dispatch event to notify parent component
      this.dispatchEvent(new CustomEvent('user-saved'));

    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Failed to save user';
      console.error('Error saving user:', error);
    } finally {
      this.loading = false;
    }
  }

  private handleCancel() {
    this.dispatchEvent(new CustomEvent('cancel'));
  }

  render() {
    return html`
      <div class="user-form">
        <h2>${this.user ? 'Edit User' : 'Create New User'}</h2>

        <form @submit=${this.handleSubmit}>
          <div class="form-group">
            <label for="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              .value=${this.formData.name}
              @input=${this.handleInputChange}
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              .value=${this.formData.email}
              @input=${this.handleInputChange}
              required
            />
          </div>

          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              .value=${this.formData.phone || ''}
              @input=${this.handleInputChange}
            />
          </div>

          ${this.error ? html`<p class="error">${this.error}</p>` : ''}
          ${this.success ? html`<p class="success">${this.success}</p>` : ''}

          <div class="form-actions">
            <button type="submit" ?disabled=${this.loading} class="submit-btn">
              ${this.loading ? 'Saving...' : this.user ? 'Update User' : 'Create User'}
            </button>
            <button type="button" @click=${this.handleCancel} class="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    `;
  }

  static styles = css`
    .user-form {
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: var(--shadow);
    }

    .user-form h2 {
      margin-bottom: 1.5rem;
      color: var(--primary-color);
      text-align: center;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-size: 1rem;
    }

    input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    .error {
      color: var(--error-color);
      background-color: #fee;
      padding: 0.5rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .success {
      color: var(--success-color);
      background-color: #efe;
      padding: 0.5rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .submit-btn, .cancel-btn {
      flex: 1;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .submit-btn {
      background-color: var(--primary-color);
      color: white;
    }

    .submit-btn:hover:not(:disabled) {
      background-color: var(--primary-dark);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .cancel-btn {
      background-color: var(--light-gray);
      color: #374151;
    }

    .cancel-btn:hover {
      background-color: #d1d5db;
    }
  `;
}