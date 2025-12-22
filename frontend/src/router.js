// Import the TypeScript `routeConfig` explicitly (avoid './router' which would resolve to this file)
import { routeConfig as _routeConfig } from './router.ts';
export const routeConfig = _routeConfig;

import { Router } from '@vaadin/router';

export function initRouter() {
  const outlet = document.getElementById('outlet');
  const router = new Router(outlet);
  router.setRoutes(routeConfig);
  return router;
}
