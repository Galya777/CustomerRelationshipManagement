import { html, LitElement, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { apiService, UserDto } from '../services/api.js';

@customElement('user-list')
export class UserList extends LitElement {
  @state()
  private users: UserDto[] = [];

  @state()
  private loading = true;

  @state()
  private error: string | null = null;

  async connectedCallback() {
    super.connectedCallback();
    await this.loadUsers();
  }

  private async loadUsers() {
    try {
      this.loading = true;
      this.error = null;
      this.users = await apiService.getAllUsers();
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Failed to load users';
      console.error('Error loading users:', error);
    } finally {
      this.loading = false;
    }
  }

  private async deleteUser(id: number) {
    if (!confirm('Are you sure you want to delete this user?')) {
      return;
    }

    try {
      await apiService.deleteUser(id);
      await this.loadUsers(); // Reload the list
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Failed to delete user';
      console.error('Error deleting user:', error);
    }
  }

  render() {
    return html`
      <div class="user-list">
        <h2>Users</h2>

        <button @click=${this.loadUsers} class="refresh-btn">
          Refresh
        </button>

        ${this.loading ? html`<p>Loading users...</p>` : ''}

        ${this.error ? html`<p class="error">${this.error}</p>` : ''}

        ${!this.loading && !this.error ? html`
          <div class="user-grid">
            ${this.users.length === 0 ? html`<p>No users found.</p>` : html`
              <div class="user-header">
                <span>ID</span>
                <span>Name</span>
                <span>Email</span>
                <span>Phone</span>
                <span>Actions</span>
              </div>
              ${this.users.map(user => html`
                <div class="user-row">
                  <span>${user.id}</span>
                  <span>${user.name}</span>
                  <span>${user.email}</span>
                  <span>${user.phone || '-'}</span>
                  <div class="actions">
                    <button @click=${() => this.dispatchEvent(new CustomEvent('edit-user', { detail: user }))} class="edit-btn">
                      Edit
                    </button>
                    <button @click=${() => this.deleteUser(user.id!)} class="delete-btn">
                      Delete
                    </button>
                  </div>
                </div>
              `)}
            `}
          </div>
        ` : ''}
      </div>
    `;
  }

  static styles = css`
    .user-list {
      padding: 1rem;
    }

    .user-list h2 {
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    .refresh-btn {
      background-color: var(--primary-color);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 1rem;
    }

    .refresh-btn:hover {
      background-color: var(--primary-dark);
    }

    .error {
      color: var(--error-color);
      background-color: #fee;
      padding: 0.5rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .user-grid {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .user-header, .user-row {
      display: grid;
      grid-template-columns: 60px 1fr 1fr 1fr 120px;
      gap: 1rem;
      padding: 0.75rem;
      background: white;
      border-radius: 4px;
      box-shadow: var(--shadow-sm);
    }

    .user-header {
      font-weight: bold;
      background: var(--light-gray);
    }

    .actions {
      display: flex;
      gap: 0.5rem;
    }

    .edit-btn {
      background-color: #28a745;
      color: white;
      border: none;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
    }

    .delete-btn {
      background-color: var(--error-color);
      color: white;
      border: none;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
    }

    .edit-btn:hover {
      background-color: #218838;
    }

    .delete-btn:hover {
      background-color: #c82333;
    }
  `;
}