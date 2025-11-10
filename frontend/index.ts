import { Router } from '@vaadin/router';

// Import components
import './views/login-view';
import './views/register-view';
import './views/main-layout';
import './views/new-dashboard-view';

// Wait for Web Components to be loaded
function initializeApp() {
  const outlet = document.getElementById('outlet');
  
  if (!outlet) {
    console.error('Could not find the outlet element');
    return;
  }

  // Create the router
  const router = new Router(outlet);
  
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
          component: 'new-dashboard-view'
        }
      ]
    }
  ]);
}

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
