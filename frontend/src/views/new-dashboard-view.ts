import { html, LitElement, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
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
import { columnBodyRenderer } from "@vaadin/grid/lit";
import { Router } from "@vaadin/router";
import { apiService } from '../services/api';
import { authService } from '../services/auth';
import type { UserDto } from '../services/api.d';
import '../components/group-management.js';
import '../components/research-management.js';
import '../components/product-monitoring.js';

// Type definitions - using UserDto from api.d.ts

@customElement('new-dashboard-view')
export class NewDashboardView extends LitElement {
  @state()
  private user: UserDto | null = null;
  @state() private customers: UserDto[] | any[] = [];
  @state() private searchQuery: string = '';
  @state()
  private isLoading: boolean = false;
  @state() private activeTab = 'customers';

  private unsubscribeAuth: (() => void) | null = null;

  static styles = css`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }
    
    .dashboard-container {
      height: 100%;
      display: flex;
      flex-direction: row;
      gap: 0;
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    }

    /* Sidebar Styles */
    .sidebar {
      width: 250px;
      background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
      color: white;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      box-shadow: 2px 0 8px rgba(0,0,0,0.2);
      border-right: 1px solid rgba(255,255,255,0.08);
    }

    .logo h1 {
      margin: 0 0 2rem 0;
      font-size: 1.8rem;
      background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }

    .nav-menu {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 1rem;
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-item:hover {
      background: rgba(255,255,255,0.1);
      color: white;
      padding-left: 1.25rem;
    }

    .nav-item.active {
      background: rgba(59, 130, 246, 0.15);
      color: #60a5fa;
      border-left: 3px solid #3b82f6;
      padding-left: calc(1rem - 3px);
    }

    .nav-item vaadin-icon {
      width: 20px;
      height: 20px;
    }

    .user-section {
      display: flex;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .user-avatar {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #3b82f6, #60a5fa);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1rem;
      color: white;
      flex-shrink: 0;
    }

    .user-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .user-name {
      font-weight: 500;
      font-size: 0.9rem;
      color: white;
    }

    .logout-link {
      color: #60a5fa;
      text-decoration: none;
      font-size: 0.85rem;
      margin-top: 0.25rem;
      transition: all 0.2s;
    }

    .logout-link:hover {
      color: #93c5fd;
      text-decoration: underline;
    }

    /* Main Content Area */
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .top-bar {
      background: white;
      padding: 1.5rem;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .top-bar h1 {
      margin: 0;
      font-size: 1.5rem;
      color: #0f172a;
      font-weight: 600;
    }

    .search-bar {
      min-width: 250px;
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      padding: 1.5rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.03);
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      transform: translateY(-2px);
    }

    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #3498db, #2ecc71);
    }

    .stat-card:nth-child(1)::before {
      background: linear-gradient(90deg, #3498db, #2ecc71);
    }

    .stat-card:nth-child(2)::before {
      background: linear-gradient(90deg, #e74c3c, #f39c12);
    }

    .stat-card:nth-child(3)::before {
      background: linear-gradient(90deg, #9b59b6, #3498db);
    }

    .stat-icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-size: 2.5rem;
      color: rgba(59, 130, 246, 0.1);
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: #64748b;
      font-size: 0.9rem;
      font-weight: 500;
    }

    /* Tabs */
    vaadin-tabs {
      background: white;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      --vaadin-tab-selected-text-color: #3b82f6;
      --vaadin-tab-underline-color: #3b82f6;
    }

    .card {
      background: white;
      margin: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      border: 1px solid rgba(0,0,0,0.03);
    }

    .card-header {
      padding: 1.5rem;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-header h2 {
      margin: 0;
      font-size: 1.2rem;
      color: #0f172a;
      font-weight: 600;
    }

    .customer-grid {
      flex: 1;
      min-height: 300px;
    }

    .status-badge {
      display: inline-block;
      padding: 0.35rem 0.85rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .status-client {
      background: #dbeafe;
      color: #0c4a6e;
    }

    .status-leader {
      background: #dcfce7;
      color: #166534;
    }

    .status-admin {
      background: #fee2e2;
      color: #7c2d12;
    }

    vaadin-text-field {
      width: 100%;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .sidebar {
        width: 200px;
        padding: 1rem;
      }

      .logo h1 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .top-bar {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      .top-bar h1 {
        font-size: 1.3rem;
      }

      .search-bar {
        min-width: 100%;
      }

      .stats-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        padding: 1rem;
      }

      .stat-card {
        padding: 1rem;
      }

      .stat-value {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      .dashboard-container {
        flex-direction: column;
      }

      .sidebar {
        width: 100%;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        height: auto;
        border-right: none;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }

      .logo {
        flex: 1;
      }

      .logo h1 {
        margin: 0;
        font-size: 1.3rem;
      }

      .nav-menu {
        display: none;
      }

      .user-section {
        border: none;
        padding: 0;
      }

      .user-avatar {
        width: 40px;
        height: 40px;
        font-size: 0.9rem;
      }

      .user-info {
        display: none;
      }

      .top-bar {
        padding: 1rem;
        border-bottom: 1px solid rgba(0,0,0,0.05);
      }

      .top-bar h1 {
        font-size: 1.2rem;
      }

      .search-bar {
        min-width: 100%;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        padding: 1rem;
        gap: 0.75rem;
      }

      .stat-card {
        padding: 1rem;
      }

      .stat-value {
        font-size: 1.5rem;
      }

      .stat-icon {
        right: 0.75rem;
        top: 0.75rem;
        font-size: 2rem;
      }

      .card {
        margin: 1rem;
        border-radius: 8px;
      }

      .card-header {
        padding: 1rem;
        flex-direction: column;
        align-items: flex-start;
      }

      .card-header h2 {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .sidebar {
        flex-direction: column;
        align-items: flex-start;
      }

      .logo h1 {
        font-size: 1.1rem;
      }

      .user-section {
        width: 100%;
      }

      .top-bar {
        flex-direction: column;
        gap: 0.75rem;
      }

      .top-bar h1 {
        font-size: 1.1rem;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .stat-value {
        font-size: 1.3rem;
      }

      vaadin-tabs {
        --vaadin-tab-font-size: 0.85rem;
      }
    }
  `;


  constructor() {
    super();
    const authState = authService.getState();
    this.user = authState.user;
    this.customers = [];
    this.searchQuery = '';
    this.isLoading = false;
  }

  connectedCallback() {
    super.connectedCallback();
    // Subscribe to auth changes
    this.unsubscribeAuth = authService.subscribe(() => {
      const authState = authService.getState();
      this.user = authState.user;
      this.requestUpdate();
    });
    // Load data once component is connected
    this._initializeDashboard();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Unsubscribe from auth changes to prevent memory leaks
    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
      this.unsubscribeAuth = null;
    }
  }

  override firstUpdated(): void {
    console.log('[Dashboard] firstUpdated called');
  }

  private async _initializeDashboard(): Promise<void> {
    console.log('[Dashboard] Initializing dashboard...');
    await this._checkAuth();
    console.log('[Dashboard] Auth check complete, user:', this.user);
    if (this.user) {
      await this._loadCustomers();
    }
  }


  private get filteredCustomers(): UserDto[] {
    if (!this.searchQuery) return this.customers;
    const query = this.searchQuery.toLowerCase();
    return this.customers.filter(customer =>
      (customer.firstName?.toLowerCase().includes(query) ||
       customer.lastName?.toLowerCase().includes(query) ||
       customer.email?.toLowerCase().includes(query) ||
       customer.phone?.includes(query))
    );
  }

  private async _checkAuth(): Promise<void> {
    try {
      const authState = authService.getState();

      console.log('[Dashboard] Checking auth state:', {
        isAuthenticated: authState.isAuthenticated,
        username: authState.username
      });

      if (!authState.isAuthenticated || !authState.username) {
        console.log('[Dashboard] Not authenticated or missing username, redirecting to login');
        Router.go('/login');
        return;
      }
      
      try {
        // Try to get fresh user data from the API
        console.log('[Dashboard] Fetching user from API...');
        const user = await apiService.getCurrentUser();
        console.log('[Dashboard] Got user from API:', user);
        this.user = user;
        authService.setUser(user);
      } catch (error) {
        console.warn('[Dashboard] Failed to fetch fresh user data, using existing user', error);
        // Use user from auth service state
        this.user = authState.user;
        if (!this.user) {
          // Create a minimal user object if no stored data is available
          this.user = { 
            id: 0,
            email: authState.username,
            firstName: authState.username.split('@')[0],
            role: 'CLIENT',
            isLeader: false
          };
          console.log('[Dashboard] Created minimal user object:', this.user);
          authService.setUser(this.user);
        }
      }

    } catch (error) {
      console.error('[Dashboard] Authentication error:', error);
      // Ensure we redirect to login on any error
      Router.go('/login');
    }
  }

  private async _loadCustomers(): Promise<void> {
    // Don't try to load if we're not authenticated
    if (!this.user) {
      console.log('[Dashboard] User not authenticated, skipping customer load');
      return;
    }

    this.isLoading = true;
    console.log('[Dashboard] Loading customers, isLoading set to true');
    this.requestUpdate(); // Ensure UI updates to show loading state

    try {
      console.log('[Dashboard] Calling getAllUsers...');
      const users = await apiService.getAllUsers();
      console.log('[Dashboard] getAllUsers returned:', users);

      // Ensure we have an array and handle potential API response formats
      this.customers = Array.isArray(users) ? users : [];
      console.log(`[Dashboard] Loaded ${this.customers.length} customers`);

    } catch (error) {
      console.error('[Dashboard] Failed to load users:', error);
      // Don't show error dialog - just use empty array and show UI
      this.customers = [];
      console.log('[Dashboard] Using empty customers array');
    } finally {
      this.isLoading = false;
      console.log('[Dashboard] Loading complete, isLoading set to false');
      this.requestUpdate(); // Ensure UI updates when loading is complete
    }
  }

  render() {
    console.log('[Dashboard] render() called, isLoading:', this.isLoading, 'user:', this.user);

    if (!this.user) {
      return html`
        <div style="padding: 2rem; text-align: center;">
          <p>Please log in to view the dashboard</p>
          <vaadin-button theme="primary" @click="${() => Router.go('/login')}">Go to Login</vaadin-button>
        </div>
      `;
    }

    const filteredCustomers = this.filteredCustomers;
    console.log('[Dashboard] Rendering with', filteredCustomers.length, 'customers');

    return html`
      <div class="dashboard-container">
        <!-- Sidebar -->
        <div class="sidebar">
          <div class="logo">
            <h1>CRM</h1>
          </div>
          <nav class="nav-menu">
            <a href="javascript:void(0)" class="nav-item active">
              <vaadin-icon icon="vaadin:dashboard"></vaadin-icon>
              <span>Dashboard</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" @click="${() => this.activeTab = 'customers'}">
              <vaadin-icon icon="vaadin:users"></vaadin-icon>
              <span>Customers</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" @click="${() => this.activeTab = 'research'}">
              <vaadin-icon icon="vaadin:clipboard-check"></vaadin-icon>
              <span>Research</span>
            </a>
            <a href="javascript:void(0)" class="nav-item" @click="${() => this.activeTab = 'groups'}">
              <vaadin-icon icon="vaadin:chart"></vaadin-icon>
              <span>Groups</span>
            </a>
          </nav>
          <div class="user-section">
            <div class="user-avatar">
              ${this.getUserInitials()}
            </div>
            <div class="user-info">
              <div class="user-name">${this.getCurrentUser()}</div>
              <a href="javascript:void(0)" @click="${(e: Event) => { e.preventDefault(); this._onLogout(); }}" class="logout-link">Sign out</a>
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
          
          ${this.isLoading ? html`<div style="padding: 1rem; text-align: center; color: #666;">Loading data...</div>` : ''}

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

  // @ts-ignore
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
    return this.user?.firstName || authService.getUsername()?.split('@')[0] || 'User';
  }

  private getUserInitials() {
    const name = this.getCurrentUser();
    return name.split(' ').map((n: string) => n[0]).join('').toUpperCase();
  }

  private _onLogout() {
    // Use auth service to clear all user data
    authService.logout();
    // Navigate to login
    Router.go('/login');
  }
}
