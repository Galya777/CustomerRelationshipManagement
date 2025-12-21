// Import the router initialization
import { initRouter } from './router';

// Import main layout and views to ensure they're registered
import './views/main-layout';
import './views/login-view';
import './views/register-view';
import './views/new-dashboard-view';
import './views/not-found-view';

// Initialize the application when the DOM is fully loaded
function initializeApp() {
  console.log('Initializing application...');
  
  // Initialize the router
  initRouter();
  
  console.log('Application initialized');
}

// Check if the DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    initializeApp();
  });
} else {
  // DOM is already loaded, initialize immediately
  console.log('DOM already loaded, initializing...');
  setTimeout(initializeApp, 0);
}

// Global error handling
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error);
  // You might want to show an error toast or notification here
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // You might want to show an error toast or notification here
});

// For debugging
console.log('Main script loaded');
