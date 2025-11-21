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
import './user-list.js';
import './user-form.js';
let UserManagement = class UserManagement extends LitElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "showForm", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "editingUser", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    handleCreateUser() {
        this.editingUser = null;
        this.showForm = true;
    }
    handleEditUser(e) {
        this.editingUser = e.detail;
        this.showForm = true;
    }
    handleCancelForm() {
        this.showForm = false;
        this.editingUser = null;
    }
    handleUserSaved() {
        this.showForm = false;
        this.editingUser = null;
        // The user-list component will automatically refresh when user-saved event is fired
    }
    render() {
        return html `
      <div class="user-management">
        <div class="header">
          <h1>Customer Relationship Management</h1>
          <button @click=${this.handleCreateUser} class="create-btn">
            Add New User
          </button>
        </div>

        ${this.showForm ? html `
          <user-form
            .user=${this.editingUser}
            @cancel=${this.handleCancelForm}
            @user-saved=${this.handleUserSaved}
          ></user-form>
        ` : html `
          <user-list @edit-user=${this.handleEditUser}></user-list>
        `}
      </div>
    `;
    }
};
Object.defineProperty(UserManagement, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: `
    .user-management {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--border-color);
    }

    .header h1 {
      color: var(--primary-color);
      margin: 0;
    }

    .create-btn {
      background-color: var(--success-color);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .create-btn:hover {
      background-color: #218838;
    }
  `
});
__decorate([
    state(),
    __metadata("design:type", Object)
], UserManagement.prototype, "showForm", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], UserManagement.prototype, "editingUser", void 0);
UserManagement = __decorate([
    customElement('user-management')
], UserManagement);
export { UserManagement };
