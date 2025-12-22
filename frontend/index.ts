import { Router } from '@vaadin/router';

// Import components
import './views/login-view.js';
import './views/register-view.js';
import './views/main-layout.js';
import './views/new-dashboard-view.js';
import './views/not-found-view.js';

// Wait for Web Components to be loaded
async function initializeApp() {
  try {
    // Ensure the outlet element exists
    let outlet = document.getElementById('outlet');
    
    if (!outlet) {
      // If outlet doesn't exist, create it
      outlet = document.createElement('div');
      outlet.id = 'outlet';
      const app = document.getElementById('app');
      if (app) {
        app.appendChild(outlet);
      } else {
        document.body.appendChild(outlet);
      }
    }

    // Add a small delay to ensure all components are registered
    await new Promise(resolve => setTimeout(resolve, 100));

    // Create the router
    const router = new Router(outlet);

    // Expose router globally so views/components can access it
    try {
      (window as any).vaadin = (window as any).vaadin || {};
      (window as any).vaadin.router = router;
      // Also provide a static convenience method so code that calls Router.go(...) works
      try {
        (Router as any).go = (...args: any[]) => (router as any).go(...args);
      } catch (e) {
        // ignore if not possible
        console.debug('Could not attach Router.go delegate', e);
      }
      // Expose under window.router too for quick access
      (window as any).router = router;
    } catch (e) {
      console.warn('Failed to expose router globally', e);
    }

    // Set up routes with authentication
    router.setRoutes([
      {
        path: '/login',
        component: 'login-view',
        action: (_, commands) => {
          const isLoggedIn = localStorage.getItem('user') !== null;
          if (isLoggedIn) {
            return commands.redirect('/');
          }
          return undefined;
        }
      },
      {
        path: '/register',
        component: 'register-view',
        action: (_, commands) => {
          const isLoggedIn = localStorage.getItem('user') !== null;
          if (isLoggedIn) {
            return commands.redirect('/');
          }
          return undefined;
        }
      },
      {
        path: '/',
        component: 'main-layout',
        children: [
          {
            path: '',
            component: 'new-dashboard-view',
            action: (_, commands) => {
              const isLoggedIn = localStorage.getItem('user') !== null;
              if (!isLoggedIn) {
                return commands.redirect('/login');
              }
              return undefined;
            }
          },
          {
            path: '(.*)',
            component: 'not-found-view'
          }
        ]
      }
    ]);
    
    // Remove loading indicator
    const loading = document.querySelector('.loading');
    if (loading) {
      loading.remove();
    }
    
  } catch (error) {
    console.error('Failed to initialize application:', error);
    
    // Show error message
    const errorDiv = document.createElement('div');
    errorDiv.style.color = 'red';
    errorDiv.style.padding = '20px';
    errorDiv.style.textAlign = 'center';
    errorDiv.innerHTML = `
      <h2>Application Error</h2>
      <p>Failed to initialize the application. Please check the console for more details.</p>
      <p>${error instanceof Error ? error.message : String(error)}</p>
      <button onclick="window.location.reload()" style="margin-top: 10px; padding: 5px 10px;">
        Reload Application
      </button>
    `;
    
    const app = document.getElementById('app') || document.body;
    app.innerHTML = '';
    app.appendChild(errorDiv);
  }
}

// Check if custom elements are supported
if (!window.customElements) {
  document.body.innerHTML = `
    <div style="text-align: center; padding: 50px;">
      <h2>Browser Not Supported</h2>
      <p>This application requires a modern browser that supports Web Components.</p>
      <p>Please use the latest version of Chrome, Firefox, Safari, or Edge.</p>
    </div>
  `;
} else {
  // Initialize the app when the DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    initializeApp();
  }
}
