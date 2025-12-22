import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/button';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/text-field';
import '@vaadin/avatar';
import { Router } from '@vaadin/router';

declare global {
  interface HTMLElementTagNameMap {
    'main-layout': MainLayout;
  }
}

@customElement('main-layout')
export class MainLayout extends LitElement {
  private getCurrentUser() {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user).username || 'User' : 'User';
    } catch (e) {
      return 'User';
    }
  }

  private handleLogout() {
    localStorage.removeItem('user');
    Router.go('/login');
  }

  protected render() {
    return html`
      <vaadin-app-layout style="height: 100vh;">
        <!-- Header -->
        <header slot="navbar" class="header">
          <div class="header-left">
            <vaadin-drawer-toggle></vaadin-drawer-toggle>
            <h1 class="app-title">CRM System</h1>
          </div>
          <div class="header-right">
            <vaadin-avatar name="${this.getCurrentUser()}" theme="xsmall"></vaadin-avatar>
            <span class="username">${this.getCurrentUser()}</span>
          </div>
        </header>

        <!-- Sidebar Navigation -->
        <div class="sidebar" slot="drawer">
          <div class="sidebar-header">
            <h2>CRM System</h2>
          </div>
          <nav class="nav-menu">
            <a href="/" class="nav-item active">
              <vaadin-icon icon="vaadin:dashboard"></vaadin-icon>
              Dashboard
            </a>
            <a href="/customers" class="nav-item">
              <vaadin-icon icon="vaadin:users"></vaadin-icon>
              Customers
            </a>
            <a href="/analytics" class="nav-item">
              <vaadin-icon icon="vaadin:chart"></vaadin-icon>
              Analytics
            </a>
            <a href="/settings" class="nav-item">
              <vaadin-icon icon="vaadin:cog"></vaadin-icon>
              Settings
            </a>
          </nav>
          <div class="sidebar-footer">
            <vaadin-button theme="tertiary" @click="${this.handleLogout}" class="logout-button">
              <vaadin-icon icon="vaadin:sign-out" slot="prefix"></vaadin-icon>
              Sign Out
            </vaadin-button>
          </div>
        </div>

        <!-- Main Content -->
        <div class="content">
          <slot></slot>
        </div>
      </vaadin-app-layout>

      <style>
        :host {
          display: block;
          height: 100vh;
          --lumo-primary-color: #2563eb;
          --lumo-primary-text-color: #1e40af;
          --lumo-primary-color-10pct: rgba(37, 99, 235, 0.1);
          --lumo-header-text-color: #1f2937;
          --lumo-secondary-text-color: #6b7280;
          --lumo-contrast-5pct: rgba(0, 0, 0, 0.05);
          --lumo-contrast-10pct: rgba(0, 0, 0, 0.1);
          --lumo-base-color: #ffffff;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 1.5rem;
          background: var(--lumo-base-color);
          border-bottom: 1px solid var(--lumo-contrast-10pct);
          height: 4.5rem;
        }

        .header-left, .header-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .app-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--lumo-header-text-color);
        }

        .username {
          font-weight: 500;
          color: var(--lumo-header-text-color);
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--lumo-base-color);
          border-right: 1px solid var(--lumo-contrast-10pct);
          width: 16rem;
        }

        .sidebar-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--lumo-contrast-10pct);
        }

        .sidebar-header h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--lumo-header-text-color);
        }

        .nav-menu {
          flex: 1;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          color: var(--lumo-secondary-text-color);
          text-decoration: none;
          transition: all 0.2s;
          font-size: 0.9375rem;
          border-radius: 0.375rem;
          margin: 0 0.5rem;
        }

        .nav-item:hover {
          background: var(--lumo-contrast-5pct);
          color: var(--lumo-primary-text-color);
        }

        .nav-item.active {
          background: var(--lumo-primary-color-10pct);
          color: var(--lumo-primary-text-color);
          font-weight: 500;
        }

        .nav-item vaadin-icon {
          margin-right: 0.75rem;
          width: 1.25rem;
          height: 1.25rem;
        }

        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid var(--lumo-contrast-10pct);
        }

        .logout-button {
          width: 100%;
          justify-content: flex-start;
        }

        .content {
          padding: 1.5rem;
          height: 100%;
          overflow-y: auto;
          background-color: #f9fafb;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .header {
            padding: 0 1rem;
          }
          
          .app-title {
            display: none;
          }
          
          .username {
            display: none;
          }
        }
      </style>
    `;
  }
}
