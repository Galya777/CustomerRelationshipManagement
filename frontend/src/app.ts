import { Router } from '@vaadin/router';

// Import components to register them
import '../views/login-view';
import '../views/register-view';
import '../views/main-layout';
import '../views/new-dashboard-view';

// Export the initializeApp function
export function initializeApp() {
  console.log('Initializing app...');
  const outlet = document.getElementById('outlet');

  if (!outlet) {
    console.error('Could not find the outlet element');
    return;
  }

  console.log('Found outlet element, initializing router...');

  try {
    const router = new Router(outlet);
    console.log('Router created successfully');
    
    router.setRoutes([
      {
        path: '/login',
        component: 'login-view',
        action: (_, commands) => {
          console.log('Login route action triggered');
          const isLoggedIn = localStorage.getItem('user') !== null;
          console.log('User logged in:', isLoggedIn);
          return isLoggedIn ? commands.redirect('/') : undefined;
        }
      },
      {
        path: '/register',
        component: 'register-view',
        action: (_, commands) => {
          console.log('Register route action triggered');
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
              console.log('Dashboard route action triggered');
              const isLoggedIn = localStorage.getItem('user') !== null;
              console.log('User logged in for dashboard:', isLoggedIn);
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

    console.log('Routes set successfully');

    // Handle initial route
    console.log('Current pathname:', window.location.pathname);
    if (window.location.pathname === '/') {
      const isLoggedIn = localStorage.getItem('user') !== null;
      console.log('Initial route check - user logged in:', isLoggedIn);
      if (!isLoggedIn) {
        console.log('Redirecting to /login');
        window.history.replaceState(null, '', '/login');
      }
    }
    
  } catch (error) {
    console.error('Failed to initialize router:', error);
  }
}
