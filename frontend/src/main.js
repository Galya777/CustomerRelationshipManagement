// Main.js starting to load
console.log('=== MAIN.JS STARTING ===');

// Import the application initialization
import { initializeApp } from './app';

console.log('Import completed, initializeApp function:', typeof initializeApp);

console.log('Main.js loaded, document.readyState:', document.readyState);

// Initialize immediately
console.log('Calling initializeApp immediately');
try {
  initializeApp();
  console.log('initializeApp called successfully');
} catch (error) {
  console.error('Error calling initializeApp:', error);
}

// Handle any uncaught errors
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', event.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
