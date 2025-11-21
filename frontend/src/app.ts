import { initRouter } from './router.js';

// Export the initializeApp function
export function initializeApp() {
  console.log('Initializing app...');

  const outlet = document.getElementById('outlet');

  if (!outlet) {
    console.error('Could not find the outlet element');
    return;
  }

  console.log('Found outlet element, initializing router...');

  // Initialize the router
  initRouter();

  console.log('Router initialized successfully');
}
