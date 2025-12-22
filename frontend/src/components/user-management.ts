import { html, LitElement, css } from 'lit';
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

  static styles = css`
    .user-management {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.25rem;
    }

    .hero {
      position: relative;
      background: linear-gradient(135deg, #0f172a, #1d4ed8 60%, #9333ea);
      border-radius: 16px;
      padding: 1.25rem 1.25rem;
      margin-bottom: 1.25rem;
      box-shadow: 0 20px 40px rgba(0,0,0,0.25);
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }
    .brand { display: flex; gap: 0.9rem; align-items: center; }
    .logo {
      background: rgba(255,255,255,0.2);
      border: 1px solid rgba(255,255,255,0.25);
      width: 44px; height: 44px; border-radius: 10px;
      display:flex; align-items:center; justify-content:center;
      font-weight: 800; letter-spacing: 1px;
    }
    h1 { margin: 0; font-size: 1.35rem; line-height: 1.2; }
    .subtitle { margin: 0.15rem 0 0; opacity: 0.85; font-size: 0.9rem; }

    .actions { display: flex; gap: 0.6rem; }
    .create-btn {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      border: none;
      padding: 0.6rem 1.1rem;
      border-radius: 10px;
      font-size: 0.95rem;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 10px 20px rgba(16,185,129,.35);
      transition: transform .05s ease, box-shadow .2s ease, filter .2s ease;
    }
    .create-btn:hover { filter: brightness(1.05); box-shadow: 0 14px 28px rgba(16,185,129,.45); }

    .logout-btn {
      background: transparent;
      color: #e5e7eb;
      border: 1px solid rgba(255,255,255,0.35);
      padding: 0.55rem 0.9rem;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      transition: background .2s ease, border-color .2s ease, color .2s ease;
    }
    .logout-btn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.6); color: #fff; }

    .card {
      background: rgba(255,255,255,0.75);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(0,0,0,0.06);
      border-radius: 14px;
      padding: 1rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    }
  `;
}