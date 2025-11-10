import { Route } from '@vaadin/router';
import type { RouterLocation, Commands } from '@vaadin/router';

// Type definitions
type RouteAction = (context: RouterLocation, commands: Commands) => Promise<unknown>;

declare global {
  interface HTMLElementTagNameMap {
    'login-view': HTMLElement;
    'register-view': HTMLElement;
    'new-dashboard-view': HTMLElement;
    'main-layout': HTMLElement;
  }
}

// Check if user is authenticated
const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const user = localStorage.getItem('user');
    return !!user && JSON.parse(user) !== null;
  } catch (e) {
    console.error('Authentication check failed:', e);
    return false;
  }
};
const publicRoutes: Route[] = [
  {
    path: '/login',
    component: 'login-view',
    name: 'login',
    action: (async (context: RouterLocation, commands: Commands) => {
      if (isAuthenticated()) {
        return commands.redirect('/');
      }
      await import('./views/login-view.js');
      return commands.component('login-view');
    }) as RouteAction
  },
  {
    path: '/register',
    component: 'register-view',
    name: 'register',
    action: (async (context: RouterLocation, commands: Commands) => {
      if (isAuthenticated()) {
        return commands.redirect('/');
      }
      await import('./views/register-view.js');
      return commands.component('register-view');
    }) as RouteAction
  }
];

// Protected routes that require authentication
const protectedRoutes: Route[] = [
  {
    path: '',
    component: 'main-layout',
    children: [
      {
        path: '/',
        component: 'new-dashboard-view',
        action: (async (context: RouterLocation, commands: Commands) => {
          if (!isAuthenticated()) {
            return commands.redirect('/login');
          }
          await import('./views/new-dashboard-view.js');
          return commands.component('new-dashboard-view');
        }) as RouteAction
      }
    ]
  }
];

// Fallback route for unknown paths
const fallbackRoute: Route = {
  path: '(.*)',
  action: ((context: RouterLocation, commands: Commands) => {
    return commands.redirect(isAuthenticated() ? '/' : '/login');
  }) as RouteAction
};

// Combine all routes
export const routes: Route[] = [
  ...publicRoutes,
  ...protectedRoutes,
  fallbackRoute
];

