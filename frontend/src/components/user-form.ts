import { html, LitElement, css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { apiService, UserDto } from '../services/api';
import theme from '../styles/theme.css?inline';

@customElement('user-form')
export class UserForm extends LitElement {
  @property({ type: Object })
  user: UserDto | null = null;

  @state()
  private formData: Omit<UserDto, 'id'> = {
    name: '',
    email: '',
    phone: '',
    country: '',
    birthDate: '',
    role: 'CLIENT',
    isLeader: false,
    password: ''
  };

  @state()
  private loading = false;

  @state()
  private error: string | null = null;

  @state()
  private success: string | null = null;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('user') && this.user) {
      const { firstName, lastName, email, phone, country, birthDate, role, isLeader } = this.user;
      this.formData = {
        name: `${firstName ?? ''} ${lastName ?? ''}`.trim(),
        email: email ?? '',
        phone: phone ?? '',
        country: country ?? '',
        birthDate: birthDate ?? '',
        role: (role as any) ?? 'CLIENT',
        isLeader: Boolean(isLeader),
        password: '' // never prefill password on edit
      };
    }
  }

  private handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    this.formData = { ...this.formData, [name]: value };
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();

    if (!(this.formData.name ?? '').trim() || !(this.formData.email ?? '').trim()) {
      this.error = 'Name and email are required';
      return;
    }
    // For create, require password
    if (!this.user?.id && !(this.formData.password ?? '').trim()) {
      this.error = 'Password is required for new users';
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
        this.formData = { name: '', email: '', phone: '', country: '', birthDate: '', role: 'CLIENT', isLeader: false, password: '' };
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

          <div class="grid-2">
            <div class="form-group">
              <label for="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                .value=${this.formData.country ?? ''}
                @input=${this.handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="birthDate">Birth date</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                .value=${this.formData.birthDate ?? ''}
                @input=${this.handleInputChange}
              />
            </div>
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

          <div class="grid-2">
            <div class="form-group">
              <label for="role">Role</label>
              <select id="role" name="role" @change=${this.handleInputChange as any} .value=${this.formData.role ?? 'CLIENT'}>
                <option value="ANONYMOUS">ANONYMOUS</option>
                <option value="CLIENT">CLIENT</option>
                <option value="LEADER">LEADER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div class="form-group checkbox">
              <label class="checkbox-label">
                <input type="checkbox" name="isLeader" .checked=${this.formData.isLeader ?? false} @change=${(e: Event) => {
                  const t = e.target as HTMLInputElement; this.formData = { ...this.formData, isLeader: t.checked };
                }} />
                Team Leader
              </label>
            </div>
          </div>

          ${!this.user?.id ? html`
            <div class="form-group">
              <label for="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                .value=${this.formData.password ?? ''}
                @input=${this.handleInputChange}
                required
              />
            </div>
          ` : ''}

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

  static styles = [
    unsafeCSS(theme),
    css`
      .user-form {
        max-width: 560px;
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

      input, 
      select {
        width: 100%;
        max-width: 360px;
        margin: 0 auto;
        display: block;
        padding: 0.5rem 0.7rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        font-size: 0.95rem;
      }

      input:focus, 
      select:focus {
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

      .grid-2 { 
        display: grid; 
        grid-template-columns: repeat(2, 1fr); 
        gap: 0.75rem; 
      }

      .checkbox-label { 
        display: flex; 
        align-items: center; 
        gap: 0.5rem; 
        font-weight: 500; 
      }

      .submit-btn, 
      .cancel-btn {
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
    `
  ];
}