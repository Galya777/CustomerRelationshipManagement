// Import the application initialization
import { initializeApp } from './app';
// Initialize the application when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
}
else {
    initializeApp();
}
// Handle any uncaught errors
window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
});
// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
