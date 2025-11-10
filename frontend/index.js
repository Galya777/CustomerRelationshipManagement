// This file is a fallback entry point
console.log('Index.js loaded');

// The actual application is loaded from /src/main.js
import('./src/main.js').catch(err => {
  console.error('Failed to load main application:', err);
});
