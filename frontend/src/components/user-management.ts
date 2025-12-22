import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { UserDto } from '../services/api';
import './user-list';
import './user-form';

@customElement('user-management')
export class UserManagement extends LitElement {
  @state()
  private showForm!: boolean; // initialized in constructor to avoid class-field shadowing

  @state()
  private editingUser!: UserDto | null; // initialized in constructor to avoid class-field shadowing

  constructor() {
    super();
    // Initialize reactive state in constructor to avoid class field initializers overwriting accessors
    this.showForm = false;
    this.editingUser = null;
  }

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

  private handleLogout() {
    try {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('authHeader');
    } catch (e) {
      // ignore
    }
    // Use Vaadin Router for client-side navigation
    import('@vaadin/router').then(({ Router }) => Router.go('/login'));
  }

  render() {
    return html`
      <div class="user-management">
        <div class="hero">
          <div class="brand">
            <div class="logo">CRM</div>
            <div class="titles">
              <h1>Customer Relationship Management</h1>
              <p class="subtitle">Manage clients with elegance and precision</p>
            </div>
          </div>
          <div class="actions">
            <button @click=${this.handleCreateUser} class="create-btn">Add New User</button>
            <button @click=${this.handleLogout} class="logout-btn" title="Log out">Log out</button>
          </div>
        </div>

        ${this.showForm ? html`
          <user-form
            .user=${this.editingUser}
            @cancel=${this.handleCancelForm}
            @user-saved=${this.handleUserSaved}
          ></user-form>
        ` : html`
          <div class="card">
            <user-list @edit-user=${this.handleEditUser}></user-list>
          </div>
        `}
      </div>
    `;
  }

}