import { html, LitElement } from 'lit';
import { customElement, state} from 'lit/decorators.js';
import '@vaadin/button';
import '@vaadin/grid';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/text-field';
import '@vaadin/dialog';
import '@vaadin/select';
import '@vaadin/list-box';
import '@vaadin/item';
import '@vaadin/tabs';
import '@vaadin/tabsheet';
import {columnBodyRenderer} from "@vaadin/grid/lit";
import {Router} from "@vaadin/router";
import { apiService } from '../services/api.js';
import './research-management';
import './group-management';
import './product-monitoring';

declare global {
  interface HTMLElementTagNameMap {
    'new-dashboard-view': NewDashboardView;
  }
}

// Type definitions
interface User {
  username: string;
  name: string;
  role: string;
}

interface Customer {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  country?: string;
  birthDate?: string;
  role?: 'ANONYMOUS' | 'CLIENT' | 'LEADER' | 'ADMIN';
  isLeader?: boolean;
}

@customElement('new-dashboard-view')
export class NewDashboardView extends LitElement {
  @state()
  // @ts-ignore - Will be used later
  private user!: User | null;
  @state() private customers!: Customer[];
  @state() private searchQuery!: string;
  @state()
  // @ts-ignore - Will be used later
  private isLoading!: boolean;
  @state() private activeTab = 'customers';

  constructor() {
    super();
    this.user = null;
    this.customers = [];
    this.searchQuery = '';
    this.isLoading = true;
  }

  // Filtered customers based on search query
  private get filteredCustomers(): Customer[] {
    if (!this.searchQuery) return this.customers;
    const query = this.searchQuery.toLowerCase();
    return this.customers.filter(customer =>
      customer.name?.toLowerCase().includes(query) ||
      customer.email?.toLowerCase().includes(query) ||
      customer.phone?.includes(query)
    );
  }

  // Lifecycle methods
  override firstUpdated(): void {
    this._checkAuth();
    this._loadCustomers();
  }

  private _checkAuth(): void {
    try {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated !== 'true') {
        Router.go('/login');
        return;
      }
      // For now, set a dummy user
      this.user = { username: localStorage.getItem('username') || 'User', name: 'User', role: 'CLIENT' };
    } catch (error) {
      console.error('Authentication error:', error);
      Router.go('/login');
    }
  }

  private async _loadCustomers(): Promise<void> {
    this.isLoading = true;

    try {
      this.customers = await apiService.getAllUsers();
      this.isLoading = false;
    } catch (error) {
      console.error('Failed to load users:', error);
      this.isLoading = false;
      // Show error to user
      this.dispatchEvent(new CustomEvent('error', {
        detail: { message: 'Failed to load users. Please try again later.' },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    const filteredCustomers = this.filteredCustomers;

    return html`
      <div class="dashboard-container">
        <!-- Sidebar -->
        <div class="sidebar">
          <div class="logo">
            <h1>CRM</h1>
          </div>
          <nav class="nav-menu">
            <a href="#" class="nav-item active">
              <vaadin-icon icon="vaadin:dashboard"></vaadin-icon>
              <span>Dashboard</span>
            </a>
            <a href="#customers" class="nav-item">
              <vaadin-icon icon="vaadin:users"></vaadin-icon>
              <span>Customers</span>
            </a>
            <a href="#research" class="nav-item">
              <vaadin-icon icon="vaadin:clipboard-check"></vaadin-icon>
              <span>Research</span>
            </a>
            <a href="#reports" class="nav-item">
              <vaadin-icon icon="vaadin:chart"></vaadin-icon>
              <span>Reports</span>
            </a>
          </nav>
          <div class="user-section">
            <div class="user-avatar">
              ${this.getUserInitials()}
            </div>
            <div class="user-info">
              <div class="user-name">${this.getCurrentUser()}</div>
              <a href="#" @click=${this._onLogout} class="logout-link">Sign out</a>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <header class="top-bar">
            <h1>Customer Dashboard</h1>
            <div class="search-bar">
              <vaadin-text-field
                placeholder="Search customers..."
                clear-button-visible
                .value=${this.searchQuery}
                @value-changed=${(e: CustomEvent) => this.searchQuery = e.detail.value}
              >
                <vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon>
              </vaadin-text-field>
            </div>
          </header>

          <!-- Stats Cards -->
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">${this.customers.length}</div>
              <div class="stat-label">Total Users</div>
              <vaadin-icon icon="vaadin:users" class="stat-icon"></vaadin-icon>
            </div>
            <div class="stat-card">
              <div class="stat-value">${this.getClientsCount()}</div>
              <div class="stat-label">Clients</div>
              <vaadin-icon icon="vaadin:check" class="stat-icon"></vaadin-icon>
            </div>
            <div class="stat-card">
              <div class="stat-value">${this.getLeadersCount()}</div>
              <div class="stat-label">Leaders</div>
              <vaadin-icon icon="vaadin:lightbulb" class="stat-icon"></vaadin-icon>
            </div>
          </div>

          <!-- Tabs -->
          <vaadin-tabs .selected=${['customers', 'research', 'groups', 'products'].indexOf(this.activeTab)} @selected-changed=${(e: CustomEvent) => this.activeTab = ['customers', 'research', 'groups', 'products'][e.detail.value]}>
            <vaadin-tab>Customers</vaadin-tab>
            <vaadin-tab>Research</vaadin-tab>
            <vaadin-tab>Groups</vaadin-tab>
            <vaadin-tab>Products</vaadin-tab>
          </vaadin-tabs>

          <!-- Tab Content -->
          ${this.activeTab === 'customers' ? html`
            <!-- Customers Table -->
            <div class="card">
              <div class="card-header">
                <h2>Recent Customers</h2>
                <vaadin-button theme="tertiary">
                  View All
                  <vaadin-icon icon="vaadin:angle-right" slot="suffix"></vaadin-icon>
                </vaadin-button>
              </div>
              <vaadin-grid .items="${filteredCustomers}" class="customer-grid">
                 <vaadin-grid-column
                   header="Name"
                   ${columnBodyRenderer<Customer>(
                     (customer) => html`${`${customer.firstName || ''} ${customer.lastName || ''}`.trim()}`,
                     []
                   )}
                 ></vaadin-grid-column>
                 <vaadin-grid-column path="email" header="Email" auto-width></vaadin-grid-column>
                 <vaadin-grid-column path="phone" header="Phone" auto-width></vaadin-grid-column>
                 <vaadin-grid-column
                   header="Role"
                   ${columnBodyRenderer<Customer>(
                     (customer) => html`
                       <span class="status-badge status-${this.getRoleClass(customer.role)}">
                         ${customer.role}
                       </span>
                     `,
                     []
                   )}
                 ></vaadin-grid-column>
                 <vaadin-grid-column path="birthDate" header="Birth Date" auto-width></vaadin-grid-column>
               </vaadin-grid>
            </div>
          ` : this.activeTab === 'research' ? html`
            <!-- Research Management -->
            <research-management></research-management>
          ` : this.activeTab === 'groups' ? html`
            <!-- Group Management -->
            <group-management></group-management>
          ` : html`
            <!-- Product Monitoring -->
            <product-monitoring></product-monitoring>
          `}
        </div>
      </div>


    `;
  }

  // @ts-ignore - Function kept for potential future use
  private getStatusClass(status: string) {
    return status.toLowerCase();
  }

  private getRoleClass(role?: string) {
    return role?.toLowerCase() || 'client';
  }

  private getClientsCount() {
    return this.customers.filter(c => c.role === 'CLIENT').length;
  }

  private getLeadersCount() {
    return this.customers.filter(c => c.role === 'LEADER').length;
  }

  private getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.username || 'User';
  }

  private getUserInitials() {
    const name = this.getCurrentUser();
    return name.split(' ').map((n: string) => n[0]).join('').toUpperCase();
  }


  private _onLogout() {
    // Clear user data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('authHeader');
    localStorage.removeItem('username');

    // Navigate to login
    import('@vaadin/router') .then(({ Router }) => {
      Router.go('/login');
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'new-dashboard-view': NewDashboardView;
  }
}
