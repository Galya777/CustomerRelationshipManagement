import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { UserDto } from '../services/api.js';
import './user-list.js';
import './user-form.js';

@customElement('user-management')
export class UserManagement extends LitElement {
  @state()
  private showForm = false;

  @state()
  private editingUser: UserDto | null = null;

  private handleCreateUser() {
    this.editingUser = null;
    this.showForm = true;
  }

  private handleEditUser(e: CustomEvent<UserDto>) {
    this.editingUser = e.detail;
    this.showForm = true;
  }

  private handleCancelForm() {
    this.showForm = false;
    this.editingUser = null;
  }

  private handleUserSaved() {
    this.showForm = false;
    this.editingUser = null;
    // The user-list component will automatically refresh when user-saved event is fired
  }

  render() {
    return html`
      <div class="user-management">
        <div class="header">
          <h1>Customer Relationship Management</h1>
          <button @click=${this.handleCreateUser} class="create-btn">
            Add New User
          </button>
        </div>

        ${this.showForm ? html`
          <user-form
            .user=${this.editingUser}
            @cancel=${this.handleCancelForm}
            @user-saved=${this.handleUserSaved}
          ></user-form>
        ` : html`
          <user-list @edit-user=${this.handleEditUser}></user-list>
        `}
      </div>
    `;
  }

  static styles = `
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
  `;
}