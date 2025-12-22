import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { apiService, UserDto } from '../services/api';

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
                <span>Role</span>
                <span>Country</span>
                <span>Phone</span>
                <span>Actions</span>
              </div>
              ${this.users.map(user => html`
                <div class="user-row">
                  <span>${user.id}</span>
                  <span>
                    ${
                      // Prefer combined name if available; otherwise join firstName + lastName from backend
                      (user as any).name && (user as any).name.trim()
                        ? (user as any).name
                        : `${((user as any).firstName ?? '')} ${((user as any).lastName ?? '')}`.trim()
                    }
                  </span>
                  <span>${user.email}</span>
                  <span><span class="badge">${(user as any).role ?? 'CLIENT'}</span></span>
                  <span>${(user as any).country || '-'}</span>
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

}