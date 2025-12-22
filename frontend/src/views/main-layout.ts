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
import { authService } from '../services/auth';

declare global {
  interface HTMLElementTagNameMap {
    'main-layout': MainLayout;
  }
}

@customElement('main-layout')
export class MainLayout extends LitElement {
  private getCurrentUser() {
    try {
      // Първо опитай auth service
      const state = authService.getState();
      if (state.user?.firstName || state.user?.email) {
        return state.user.firstName || state.user.email.split('@')[0] || 'User';
      }
      // Fallback към localStorage
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user).firstName || JSON.parse(user).username || 'User' : 'User';
    } catch (e) {
      return 'User';
    }
  }

  private handleLogout() {
    // Използвай auth service за правилна очистка
    authService.logout();
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
            <vaadin-button theme="tertiary" @click=${this.handleLogout} class="logout-button">
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
        @media (max-width: 1024px) {
          .sidebar {
            width: 14rem;
          }
          
          .sidebar-header {
            padding: 1rem 1.25rem;
          }
          
          .nav-item {
            padding: 0.65rem 1.25rem;
            font-size: 0.875rem;
          }
          
          .content {
            padding: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          :host {
            --vaadin-app-layout-navbar-offset-size: 3.5rem;
          }

          .header {
            padding: 0 0.75rem;
            height: 3.5rem;
          }
          
          .header-left {
            gap: 0.5rem;
          }

          .app-title {
            display: block;
            font-size: 1rem;
          }
          
          .username {
            display: none;
          }

          .sidebar {
            width: 100%;
            max-width: 280px;
            position: fixed;
            left: 0;
            top: 3.5rem;
            height: calc(100vh - 3.5rem);
            z-index: 100;
            box-shadow: 2px 0 8px rgba(0,0,0,0.15);
          }

          .sidebar-header {
            padding: 1rem 1rem;
            border-bottom: 1px solid var(--lumo-contrast-10pct);
          }

          .sidebar-header h2 {
            font-size: 1.1rem;
          }

          .nav-menu {
            padding: 0.75rem 0;
            gap: 0;
          }

          .nav-item {
            padding: 0.65rem 1rem;
            margin: 0;
            font-size: 0.9rem;
            border-radius: 0;
          }

          .nav-item vaadin-icon {
            margin-right: 0.5rem;
            width: 1.125rem;
            height: 1.125rem;
          }

          .sidebar-footer {
            padding: 0.75rem;
            border-top: 1px solid var(--lumo-contrast-10pct);
          }

          .content {
            padding: 1rem;
            background-color: #f9fafb;
          }

          /* Drawer toggle visibility */
          vaadin-drawer-toggle {
            display: inline-flex;
          }
        }

        @media (max-width: 480px) {
          :host {
            --vaadin-app-layout-navbar-offset-size: 3rem;
          }

          .header {
            padding: 0 0.5rem;
            height: 3rem;
            gap: 0.5rem;
          }

          .header-left {
            gap: 0.25rem;
          }

          .header-right {
            gap: 0.5rem;
          }

          .app-title {
            font-size: 0.9rem;
          }

          vaadin-avatar {
            --lumo-avatar-size: 2rem;
          }

          .sidebar {
            max-width: 260px;
            top: 3rem;
            height: calc(100vh - 3rem);
          }

          .sidebar-header {
            padding: 0.75rem 0.75rem;
          }

          .sidebar-header h2 {
            font-size: 1rem;
          }

          .nav-menu {
            padding: 0.5rem 0;
          }

          .nav-item {
            padding: 0.6rem 0.75rem;
            font-size: 0.85rem;
          }

          .sidebar-footer {
            padding: 0.5rem;
          }

          .logout-button {
            font-size: 0.85rem;
          }

          .content {
            padding: 0.75rem;
          }
        }
      </style>
    `;
  }
}
