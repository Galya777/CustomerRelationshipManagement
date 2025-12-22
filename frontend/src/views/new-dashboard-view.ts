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
import type { UserDto } from '../services/api.d';

declare global {
  interface HTMLElementTagNameMap {
    'new-dashboard-view': NewDashboardView;
  }
}

// Type definitions - using UserDto from api.d.ts

@customElement('new-dashboard-view')
export class NewDashboardView extends LitElement {
  @state()
  private user: UserDto | null = null;
  @state() private customers!: UserDto[] | any[];
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
  private get filteredCustomers(): UserDto[] | any[] {
    if (!this.searchQuery) return this.customers;
    const query = this.searchQuery.toLowerCase();
    return this.customers.filter(customer =>
      customer.name?.toLowerCase().includes(query) ||
      customer.email?.toLowerCase().includes(query) ||
      customer.phone?.includes(query)
    );
  }

  // Lifecycle methods
  override async firstUpdated(): Promise<void> {
    console.log('Dashboard first updated');
    await this._checkAuth();
    
    // Only try to load customers if we're authenticated
    if (this.user) {
      await this._loadCustomers();
    }
  }

  private async _checkAuth(): Promise<void> {
    try {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const username = localStorage.getItem('username');
      const userData = localStorage.getItem('user');
      
      console.log('Checking auth state:', { isAuthenticated, username });
      
      if (isAuthenticated !== 'true' || !username) {
        console.log('Not authenticated or missing username, redirecting to login');
        Router.go('/login');
        return;
      }
      
      try {
        // Try to get fresh user data from the API
        const user = await apiService.getCurrentUser();
        this.user = user;
      } catch (error) {
        console.warn('Failed to fetch fresh user data, using stored data', error);
        // Fallback to stored user data if API call fails
        if (userData) {
          this.user = JSON.parse(userData);
        } else {
          // Create a minimal user object if no stored data is available
          this.user = { 
            id: 0,
            email: username,
            firstName: username,
            role: localStorage.getItem('role') || 'CLIENT',
            isLeader: false
          };
        }
      }
      
      console.log('User authenticated:', this.user);
      
    } catch (error) {
      console.error('Authentication error:', error);
      // Ensure we redirect to login on any error
      Router.go('/login');
    }
  }

  private async _loadCustomers(): Promise<void> {
    // Don't try to load if we're not authenticated
    if (!this.user) {
      console.log('User not authenticated, skipping customer load');
      return;
    }

    this.isLoading = true;
    this.requestUpdate(); // Ensure UI updates to show loading state

    try {
      console.log('Loading customers...');
      const users = await apiService.getAllUsers();
      
      // Ensure we have an array and handle potential API response formats
      this.customers = Array.isArray(users) ? users : [];
      console.log(`Loaded ${this.customers.length} customers`);
      
    } catch (error) {
      console.error('Failed to load users:', error);
      // Show error to user
      this.dispatchEvent(new CustomEvent('error', {
        detail: { 
          message: 'Failed to load users. Please try again later.',
          error: error instanceof Error ? error.message : String(error)
        },
        bubbles: true,
        composed: true
      }));
      
      // Initialize empty array to prevent template errors
      this.customers = [];
    } finally {
      this.isLoading = false;
      this.requestUpdate(); // Ensure UI updates when loading is complete
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
                   ${columnBodyRenderer<UserDto>(
                     (customer) => html`${`${customer.firstName || ''} ${customer.lastName || ''}`.trim()}`,
                     []
                   )}
                 ></vaadin-grid-column>
                 <vaadin-grid-column path="email" header="Email" auto-width></vaadin-grid-column>
                 <vaadin-grid-column path="phone" header="Phone" auto-width></vaadin-grid-column>
                 <vaadin-grid-column
                   header="Role"
                   ${columnBodyRenderer<UserDto>(
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
