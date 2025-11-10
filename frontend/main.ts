// Import Vaadin Router
import { Router } from '@vaadin/router';

// Import views to register them
import './views/login-view';
import './views/register-view';
import './views/main-layout';
import './views/new-dashboard-view';

// Initialize the router when the DOM is ready
function initializeRouter() {
  const outlet = document.getElementById('outlet');
  if (!outlet) {
    console.error('Could not find the outlet element');
    return;
  }

  const router = new Router(outlet);
  
  router.setRoutes([
    {
      path: '/login',
      component: 'login-view',
      action: (_, commands) => {
        const isLoggedIn = localStorage.getItem('user') !== null;
        return isLoggedIn ? commands.redirect('/') : undefined;
      }
    },
    {
      path: '/register',
      component: 'register-view',
      action: (_, commands) => {
        const isLoggedIn = localStorage.getItem('user') !== null;
        return isLoggedIn ? commands.redirect('/') : undefined;
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
            return isLoggedIn ? undefined : commands.redirect('/login');
          }
        },
        {
          path: '(.*)',
          component: 'not-found-view'
        }
      ]
    }
  ]);
}

// Initialize the app when the DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeRouter);
} else {
  initializeRouter();
}

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
