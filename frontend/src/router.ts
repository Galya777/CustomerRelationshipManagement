// This file provides route configuration
// The actual router initialization happens in main.ts to avoid duplicate router creation

import { authService } from './services/auth';

export const routeConfig = [
  {
    path: '/',
    component: 'landing-view',
    action: () => {
      return import('./views/landing-view');
    }
  },
  {
    path: '/login',
    component: 'login-view',
    action: (_context: any, commands: any) => {
      if (authService.isAuthenticated()) {
        return commands.redirect('/dashboard');
      }
      return import('./views/login-view');
    }
  },
  {
    path: '/register',
    component: 'register-view',
    action: (_context: any, commands: any) => {
      if (authService.isAuthenticated()) {
        return commands.redirect('/dashboard');
      }
      return import('./views/register-view');
    }
  },
  {
    path: '/users',
    component: 'user-management',
    action: (_context: any, commands: any) => {
      if (!authService.isAuthenticated()) {
        return commands.redirect('/login');
      }
      return import('./components/user-management');
    }
  },
  {
    path: '/dashboard',
    component: 'new-dashboard-view',
    action: (_context: any, commands: any) => {
      if (!authService.isAuthenticated()) {
        return commands.redirect('/login');
      }
      return import('./views/new-dashboard-view');
    }
  },
  {
    path: '(.*)',
    component: 'landing-view',
    action: () => {
      return import('./views/landing-view');
    }
  }
];
