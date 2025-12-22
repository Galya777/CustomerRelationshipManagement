// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Router } from '@vaadin/router';
import './components/user-management.js';
import './views/login-view.js';
import './views/register-view.js';
import './views/landing-view.js';

const requireAuth = (_ctx, commands) => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
        return commands.redirect('/login');
    }
    return undefined;
};

export function initRouter() {
    const router = new Router(document.getElementById('outlet'));
    router.setRoutes([
        {
            path: '/',
            component: 'landing-view',
            action: async () => {
                await import('./views/landing-view.js');
            },
        },
        {
            path: '/login',
            component: 'login-view',
            action: (_context, commands) => {
                if (localStorage.getItem('isAuthenticated') === 'true') {
                    return commands.redirect('/users');
                }
                return import('./views/login-view.js');
            },
        },
        {
            path: '/register',
            component: 'register-view',
            action: (_context, commands) => {
                if (localStorage.getItem('isAuthenticated') === 'true') {
                    return commands.redirect('/users');
                }
                return import('./views/register-view.js');
            },
        },
        {
            path: '/users',
            component: 'user-management',
            action: (_context, commands) => {
                const guard = requireAuth(_context, commands);
                if (guard) return guard;
                return import('./components/user-management.js');
            },
        },
        {
            path: '/dashboard',
            component: 'new-dashboard-view',
            action: (_context, commands) => {
                const guard = requireAuth(_context, commands);
                if (guard) return guard;
                return import('./views/new-dashboard-view.js');
            },
        },
        {
            path: '/groups',
            component: 'group-view',
            action: (_context, commands) => {
                const guard = requireAuth(_context, commands);
                if (guard) return guard;
                return import('./views/group-view.js');
            },
        },
        {
            path: '/researches',
            component: 'research-view',
            action: (_context, commands) => {
                const guard = requireAuth(_context, commands);
                if (guard) return guard;
                return import('./views/research-view.js');
            },
        },
        {
            path: '/products',
            component: 'product-view',
            action: (_context, commands) => {
                const guard = requireAuth(_context, commands);
                if (guard) return guard;
                return import('./views/product-view.js');
            },
        },
        {
            path: '(.*)',
            component: 'landing-view',
            action: async () => {
                await import('./views/landing-view.js');
            },
        },
    ]);
    return router;
}
