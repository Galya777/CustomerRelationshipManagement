// Import the application initialization
import { initializeApp } from './app';

console.log('Main.js loaded, document.readyState:', document.readyState);

// Initialize immediately
console.log('Calling initializeApp immediately');
initializeApp();

// Handle any uncaught errors
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
