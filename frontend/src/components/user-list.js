var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { apiService } from '../services/api.js';
let UserList = class UserList extends LitElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "loading", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    async connectedCallback() {
        super.connectedCallback();
        await this.loadUsers();
    }
    async loadUsers() {
        try {
            this.loading = true;
            this.error = null;
            this.users = await apiService.getAllUsers();
        }
        catch (error) {
            this.error = error instanceof Error ? error.message : 'Failed to load users';
            console.error('Error loading users:', error);
        }
        finally {
            this.loading = false;
        }
    }
    async deleteUser(id) {
        if (!confirm('Are you sure you want to delete this user?')) {
            return;
        }
        try {
            await apiService.deleteUser(id);
            await this.loadUsers(); // Reload the list
        }
        catch (error) {
            this.error = error instanceof Error ? error.message : 'Failed to delete user';
            console.error('Error deleting user:', error);
        }
    }
    render() {
        return html `
      <div class="user-list">
        <h2>Users</h2>

        <button @click=${this.loadUsers} class="refresh-btn">
          Refresh
        </button>

        ${this.loading ? html `<p>Loading users...</p>` : ''}

        ${this.error ? html `<p class="error">${this.error}</p>` : ''}

        ${!this.loading && !this.error ? html `
          <div class="user-grid">
            ${this.users.length === 0 ? html `<p>No users found.</p>` : html `
              <div class="user-header">
                <span>ID</span>
                <span>Name</span>
                <span>Email</span>
                <span>Phone</span>
                <span>Actions</span>
              </div>
              ${this.users.map(user => html `
                <div class="user-row">
                  <span>${user.id}</span>
                  <span>${user.firstName} ${user.lastName}</span>
                  <span>${user.email}</span>
                  <span>${user.phone || '-'}</span>
                  <div class="actions">
                    <button @click=${() => this.dispatchEvent(new CustomEvent('edit-user', { detail: user }))} class="edit-btn">
                      Edit
                    </button>
                    <button @click=${() => this.deleteUser(user.id)} class="delete-btn">
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
};
Object.defineProperty(UserList, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: `
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
  `
});
__decorate([
    state(),
    __metadata("design:type", Array)
], UserList.prototype, "users", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], UserList.prototype, "loading", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], UserList.prototype, "error", void 0);
UserList = __decorate([
    customElement('user-list')
], UserList);
export { UserList };
