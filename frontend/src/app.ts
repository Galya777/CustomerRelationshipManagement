import { Router } from '@vaadin/router';

// Import components to register them
import '../views/login-view';
import '../views/register-view';
import '../views/main-layout';
import '../views/new-dashboard-view';

// Export the initializeApp function
export function initializeApp() {
  const outlet = document.getElementById('outlet');
  
  if (!outlet) {
    console.error('Could not find the outlet element');
    return;
  }

  try {
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
              return !isLoggedIn ? commands.redirect('/login') : undefined;
            }
          },
          {
            path: '(.*)',
            component: 'new-dashboard-view'
          }
        ]
      }
    ]);
    
    // Handle initial route
    if (window.location.pathname === '/') {
      const isLoggedIn = localStorage.getItem('user') !== null;
      if (!isLoggedIn) {
        window.history.replaceState(null, '', '/login');
      }
    }
    
  } catch (error) {
    console.error('Failed to initialize router:', error);
  }
}
