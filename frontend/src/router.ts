import { Router } from '@vaadin/router';
import './components/user-management';
import './views/login-view';
import './views/register-view';

export function initRouter() {
  const router = new Router(document.getElementById('outlet'));

  const requireAuth = (_ctx: any, commands: any) => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      return commands.redirect('/login');
    }
    return undefined;
  };

  router.setRoutes([
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: 'login-view',
      action: async () => {
        await import('./views/login-view');
      },
    },
    {
      path: '/register',
      component: 'register-view',
      action: async () => {
        await import('./views/register-view');
      },
    },
    {
      path: '/users',
      component: 'user-management',
      action: async (ctx, commands) => {
        const guard = requireAuth(ctx, commands);
        if (guard) return guard;
        await import('./components/user-management');
      },
    },
  ]);
}