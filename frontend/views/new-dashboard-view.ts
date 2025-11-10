import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import type { GridColumnBodyLitRenderer, GridColumn, GridDataProviderCallback, GridDataProviderParams } from '@vaadin/grid';
import '@vaadin/button';
import '@vaadin/grid';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/text-field';
import '@vaadin/email-field';
import '@vaadin/dialog';
import '@vaadin/select';
import '@vaadin/list-box';
import '@vaadin/item';

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
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'lead';
  lastContact: string;
}

@customElement('new-dashboard-view')
export class NewDashboardView extends LitElement {
  @state() private user: User | null = null;
  @state() private customers: Customer[] = [];
  @state() private selectedCustomer: Customer | null = null;
  @state() private showCustomerDialog = false;
  @state() private searchQuery = '';
  @state() private isLoading = true;
  
  // Grid columns
  private columns = [
    { path: 'name', header: 'Name' },
    { path: 'email', header: 'Email' },
    { path: 'phone', header: 'Phone' },
    { 
      path: 'status', 
      header: 'Status',
      renderer: (customer: Customer) => {
        const statusClass = {
          'active': 'bg-green-100 text-green-800',
          'inactive': 'bg-gray-100 text-gray-800',
          'lead': 'bg-blue-100 text-blue-800'
        }[customer.status];
        
        return html`
          <span class="px-2 py-1 rounded-full text-xs font-medium ${statusClass}">
            ${customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
          </span>
        `;
      }
    },
    { path: 'lastContact', header: 'Last Contact' }
  ];
  
  // Filtered customers based on search query
  private get filteredCustomers(): Customer[] {
    if (!this.searchQuery) return this.customers;
    const query = this.searchQuery.toLowerCase();
    return this.customers.filter(customer => 
      customer.name.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.phone.includes(query)
    );
  }

  // Lifecycle methods
  override firstUpdated(): void {
    this._checkAuth();
    this._loadCustomers();
  }

  private _checkAuth(): void {
    try {
      const userData = localStorage.getItem('user');
      if (!userData) {
        Router.go('/login');
        return;
      }
      this.user = JSON.parse(userData) as User;
    } catch (error) {
      console.error('Authentication error:', error);
      Router.go('/login');
    }
  }

  private _loadCustomers(): void {
    this.isLoading = true;
    
    // Simulate API call with error handling
    try {
      // In a real app, this would be an API call
      setTimeout(() => {
        this.customers = [
          { 
            id: 1, 
            name: 'John Doe', 
            email: 'john@example.com', 
            phone: '+1234567890', 
            status: 'active' as const, 
            lastContact: '2023-11-01' 
          },
          { 
            id: 2, 
            name: 'Jane Smith', 
            email: 'jane@example.com', 
            phone: '+1987654321', 
            status: 'lead' as const, 
            lastContact: '2023-10-28' 
          },
          { 
            id: 3, 
            name: 'Acme Corp', 
            email: 'contact@acme.com', 
            phone: '+1122334455', 
            status: 'active' as const, 
            lastContact: '2023-11-05' 
          },
        ];
        this.isLoading = false;
      }, 500);
    } catch (error) {
      console.error('Failed to load customers:', error);
      this.isLoading = false;
      // Show error to user
      this.dispatchEvent(new CustomEvent('error', {
        detail: { message: 'Failed to load customers. Please try again later.' },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    const filteredCustomers = this.customers.filter(customer => 
      customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

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
              <a href="#" @click="${this._onLogout}" class="logout-link">Sign out</a>
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
                .value="${this.searchQuery}"
                @value-changed="${(e: CustomEvent) => this.searchQuery = e.detail.value}"
              >
                <vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon>
              </vaadin-text-field>
            </div>
            <vaadin-button theme="primary" @click="${this._addNewCustomer}">
              <vaadin-icon icon="vaadin:plus" slot="prefix"></vaadin-icon>
              Add Customer
            </vaadin-button>
          </header>

          <!-- Stats Cards -->
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">${this.customers.length}</div>
              <div class="stat-label">Total Customers</div>
              <vaadin-icon icon="vaadin:users" class="stat-icon"></vaadin-icon>
            </div>
            <div class="stat-card">
              <div class="stat-value">${this.getActiveCustomersCount()}</div>
              <div class="stat-label">Active</div>
              <vaadin-icon icon="vaadin:check" class="stat-icon"></vaadin-icon>
            </div>
            <div class="stat-card">
              <div class="stat-value">${this.getLeadsCount()}</div>
              <div class="stat-label">Leads</div>
              <vaadin-icon icon="vaadin:lightbulb" class="stat-icon"></vaadin-icon>
            </div>
          </div>

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
              <vaadin-grid-column path="name" header="Name" auto-width></vaadin-grid-column>
              <vaadin-grid-column path="email" header="Email" auto-width></vaadin-grid-column>
              <vaadin-grid-column path="phone" header="Phone" auto-width></vaadin-grid-column>
              <vaadin-grid-column
                header="Status"
                ${columnBodyRenderer<Customer>(
                  (customer) => html`
                    <span class="status-badge status-${this.getStatusClass(customer.status)}">
                      ${customer.status}
                    </span>
                  `,
                  []
                )}
              ></vaadin-grid-column>
              <vaadin-grid-column path="lastContact" header="Last Contact" auto-width></vaadin-grid-column>
              <vaadin-grid-column
                frozen-to-end
                ${columnBodyRenderer<Customer>(
                  (customer) => html`
                    <vaadin-button 
                      theme="tertiary" 
                      @click="${() => this._editCustomer(customer)}"
                    >
                      <vaadin-icon icon="vaadin:edit"></vaadin-icon>
                    </vaadin-button>
                  `,
                  []
                )}
              ></vaadin-grid-column>
            </vaadin-grid>
          </div>
        </div>
      </div>

      <!-- Customer Dialog -->
      <vaadin-dialog
        .opened="${this.showCustomerDialog}"
        @opened-changed="${(e: CustomEvent) => this.showCustomerDialog = e.detail.value}"
        .renderer="${this.customerFormRenderer}"
      ></vaadin-dialog>

      <style>
        /* Add your styles here */
        :host {
          display: block;
          height: 100vh;
          overflow: hidden;
        }

        .dashboard-container {
          display: flex;
          height: 100%;
        }

        .sidebar {
          width: 250px;
          background: #1e293b;
          color: white;
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1rem;
        }

        .logo h1 {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 0 2rem 0.5rem;
        }

        .nav-menu {
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          color: #94a3b8;
          text-decoration: none;
          border-radius: 0.375rem;
          margin-bottom: 0.25rem;
          transition: all 0.2s;
        }

        .nav-item:hover {
          background: #334155;
          color: white;
        }

        .nav-item.active {
          background: #3b82f6;
          color: white;
        }

        .nav-item vaadin-icon {
          margin-right: 0.75rem;
          width: 1.25rem;
          height: 1.25rem;
        }

        .user-section {
          display: flex;
          align-items: center;
          padding: 1rem 0.5rem;
          margin-top: auto;
          border-top: 1px solid #334155;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-right: 0.75rem;
        }

        .user-name {
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .logout-link {
          color: #94a3b8;
          font-size: 0.875rem;
          text-decoration: none;
        }

        .logout-link:hover {
          color: white;
          text-decoration: underline;
        }

        .main-content {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
          background: #f1f5f9;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .search-bar {
          flex: 1;
          max-width: 400px;
          margin: 0 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #64748b;
          font-size: 0.875rem;
        }

        .stat-icon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: #e2e8f0;
          width: 3rem;
          height: 3rem;
        }

        .card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        h1, h2 {
          margin: 0;
          color: #1e293b;
        }

        h1 {
          font-size: 1.5rem;
          font-weight: 600;
        }

        h2 {
          font-size: 1.25rem;
          font-weight: 500;
        }

        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .status-active {
          background: #dcfce7;
          color: #166534;
        }

        .status-lead {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-inactive {
          background: #f3f4f6;
          color: #4b5563;
        }

        vaadin-grid {
          --vaadin-grid-cell-padding-vertical: 1rem;
        }
      </style>
    `;
  }

  private getStatusClass(status: string) {
    return status.toLowerCase();
  }

  private getActiveCustomersCount() {
    return this.customers.filter(c => c.status === 'active').length;
  }

  private getLeadsCount() {
    return this.customers.filter(c => c.status === 'lead').length;
  }

  private getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.username || 'User';
  }

  private getUserInitials() {
    const name = this.getCurrentUser();
    return name.split(' ').map((n: string) => n[0]).join('').toUpperCase();
  }

  private _addNewCustomer() {
    this.selectedCustomer = null;
    this.showCustomerDialog = true;
    this.requestUpdate();
  }

  private _editCustomer(customer: Customer) {
    this.selectedCustomer = { ...customer };
    this.showCustomerDialog = true;
    this.requestUpdate();
  }

  private customerFormRenderer = (root: HTMLElement) => {
    const customer = this.selectedCustomer || {
      id: 0,
      name: '',
      email: '',
      phone: '',
      status: 'lead' as const,
      lastContact: new Date().toISOString().split('T')[0]
    };

    const saveCustomer = () => {
      if (customer.id) {
        // Update existing customer
        const index = this.customers.findIndex(c => c.id === customer.id);
        if (index !== -1) {
          this.customers = [
            ...this.customers.slice(0, index),
            customer,
            ...this.customers.slice(index + 1)
          ];
        }
      } else {
        // Add new customer
        customer.id = Math.max(0, ...this.customers.map(c => c.id)) + 1;
        this.customers = [...this.customers, customer];
      }
      
      this.showCustomerDialog = false;
      this.requestUpdate();
    };

    root.innerHTML = '';
    const container = document.createElement('div');
    container.style.padding = '1rem';
    container.style.minWidth = '400px';
    
    container.innerHTML = `
      <h2 style="margin-top: 0;">${customer.id ? 'Edit' : 'Add New'} Customer</h2>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <vaadin-text-field
          id="customer-name"
          label="Name"
          value="${customer.name}"
          required
        ></vaadin-text-field>
        
        <vaadin-text-field
          id="customer-email"
          label="Email"
          type="email"
          value="${customer.email}"
          required
        ></vaadin-text-field>
        
        <vaadin-text-field
          id="customer-phone"
          label="Phone"
          value="${customer.phone}"
        ></vaadin-text-field>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--lumo-secondary-text-color);">Status</label>
          <vaadin-select id="customer-status" value="${customer.status}">
            <vaadin-list-box>
              <vaadin-item value="lead">Lead</vaadin-item>
              <vaadin-item value="active">Active</vaadin-item>
              <vaadin-item value="inactive">Inactive</vaadin-item>
            </vaadin-list-box>
          </vaadin-select>
        </div>
        
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
          <vaadin-button
            theme="tertiary"
            id="cancel-button"
          >
            Cancel
          </vaadin-button>
          <vaadin-button
            theme="primary"
            id="save-button"
          >
            Save
          </vaadin-button>
        </div>
      </div>
    `;

    // Add event listeners after elements are created
    const nameField = container.querySelector('#customer-name') as HTMLInputElement;
    const emailField = container.querySelector('#customer-email') as HTMLInputElement;
    const phoneField = container.querySelector('#customer-phone') as HTMLInputElement;
    const statusSelect = container.querySelector('#customer-status') as any;
    const saveButton = container.querySelector('#save-button') as HTMLElement;
    const cancelButton = container.querySelector('#cancel-button') as HTMLElement;

    saveButton.addEventListener('click', () => {
      const customer: Partial<Customer> = {
        id: this.selectedCustomer?.id || Date.now(),
        name: nameField.value,
        email: emailField.value,
        phone: phoneField.value,
        status: statusSelect.value as 'active' | 'inactive' | 'lead',
        lastContact: new Date().toISOString().split('T')[0]
      };
      
      this._saveCustomer(customer);
    });

    cancelButton.addEventListener('click', () => {
      this.showCustomerDialog = false;
      this.requestUpdate();
    });

    root.appendChild(container);
  };

  private _saveCustomer(customer: Partial<Customer>) {
    if (customer.id) {
      // Update existing customer
      const index = this.customers.findIndex(c => c.id === customer.id);
      if (index !== -1) {
        this.customers = [
          ...this.customers.slice(0, index),
          { ...this.customers[index], ...customer },
          ...this.customers.slice(index + 1)
        ];
      }
    } else {
      // Add new customer
      customer.id = Math.max(0, ...this.customers.map(c => c.id)) + 1;
      this.customers = [...this.customers, customer];
    }
    
    this.showCustomerDialog = false;
    this.requestUpdate();
  }

  private _onLogout() {
    // Clear user data
    localStorage.removeItem('user');
    
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
