import { Router } from '@vaadin/router';
import './views/login-view';
import './views/register-view';
import './views/landing-view';
import './components/user-management';


declare global {
  interface Window {
    vaadin: {
      router?: Router;
      [key: string]: any;
    };
  }
}

async function initializeApp() {
  try {
    const outlet = document.getElementById('outlet');
    if (!outlet) {
      throw new Error('Could not find the outlet element');
    }

    // Initialize the router
    const router = new Router(outlet);
    console.debug('[main] router created', router);

    // Make router available globally for navigation
    window.vaadin = window.vaadin || {};
    window.vaadin.router = router;
    (window as any).router = router;
    console.log('[main] router set globally:', !!router);

    // Dispatch an event so other components can react when router is ready
    try {
      window.dispatchEvent(new CustomEvent('vaadin-router-ready', { detail: { router } }));
    } catch (e) {
      // ignore if CustomEvent not supported
    }


    // Set up routes
    router.setRoutes([
      {
        path: '/',
        component: 'landing-view',
        action: () => {
          // Ensure the component is loaded
          import('./views/landing-view');
        }
      },
      {
        path: '/login',
        component: 'login-view',
        // Use the router's action arguments so we can return a commands.redirect to avoid hard reloads
        action: (_context: any, commands: any) => {
          // Check if already logged in
          if (localStorage.getItem('isAuthenticated') === 'true') {
            return commands.redirect('/users');
          }
          return import('./views/login-view');
        }
      },
      {
        path: '/register',
        component: 'register-view',
        action: (_context: any, commands: any) => {
          // Check if already logged in
          if (localStorage.getItem('isAuthenticated') === 'true') {
            return commands.redirect('/users');
          }
          return import('./views/register-view');
        }
      },
      {
        path: '/users',
        component: 'user-management',
        action: (_context: any, commands: any) => {
          // Check if not logged in
          if (localStorage.getItem('isAuthenticated') !== 'true') {
            return commands.redirect('/login');
          }
          return import('./components/user-management');
        }
      },

      {
        path: '/dashboard',
        component: 'new-dashboard-view',
        action: (_context: any, commands: any) => {
          if (localStorage.getItem('isAuthenticated') !== 'true') {
            return commands.redirect('/login');
          }
          return import('./views/new-dashboard-view');
        }
      },
      // Add a catch-all route for 404
      {
        path: '(.*)',
        component: 'landing-view',
        action: () => {
          import('./views/landing-view');
        }
      }
    ]);

    // Check authentication status on page load
    const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
    const currentPath = window.location.pathname;

    // Redirect to login if not authenticated and not on a public page
    if (!isLoggedIn && !['/login', '/register', '/'].includes(currentPath)) {
      // Use client-side navigation to avoid full reload
      Router.go('/login');
    }
    // Redirect to users if already logged in and trying to access auth pages
    else if (isLoggedIn && ['/login', '/register'].includes(currentPath)) {
      Router.go('/dashboard');
    }

    // Remove loading indicator
    const loading = document.querySelector('#outlet > div');
    if (loading) {
      loading.remove();
    }


  } catch (error) {
    console.error('Failed to initialize the app:', error);
    const errorDiv = document.createElement('div');
    errorDiv.style.color = 'red';
    errorDiv.style.padding = '20px';
    errorDiv.style.textAlign = 'center';
    errorDiv.innerHTML = `
      <h2>Application Error</h2>
      <p>Failed to initialize the application. Please check the console for more details.</p>
      <p>${error instanceof Error ? error.message : String(error)}</p>
      <button onclick="window.location.reload()" style="margin-top: 10px; padding: 8px 16px; cursor: pointer;">
        Reload Application
      </button>
    `;
    
    const app = document.getElementById('app') || document.body;
    app.innerHTML = '';
    app.appendChild(errorDiv);
  }
}

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
