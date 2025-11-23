// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Router } from '@vaadin/router';
import './components/user-management.js';
export function initRouter() {
    const router = new Router(document.getElementById('outlet'));
    router.setRoutes([
        {
            path: '/',
            component: 'user-management',
            action: async () => {
                await import('./components/user-management.js');
            },
        },
        {
            path: '/users',
            component: 'user-management',
            action: async () => {
                await import('./components/user-management.js');
            },
        },
    ]);
    return router;
}
