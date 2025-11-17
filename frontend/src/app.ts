import { Router } from '@vaadin/router';

// Simple test component
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('test-view')
export class TestView extends LitElement {
  render() {
    return html`<h1>Test Component Loaded!</h1><p>If you see this, components are working.</p>`;
  }
}

// Export the initializeApp function
export function initializeApp() {
  console.log('Initializing app...');
  console.log('Document body:', document.body);
  console.log('All elements with id outlet:', document.querySelectorAll('#outlet'));

  const outlet = document.getElementById('outlet');

  if (!outlet) {
    console.error('Could not find the outlet element');
    console.log('Available elements:', document.querySelectorAll('*[id]'));
    return;
  }

  console.log('Found outlet element:', outlet);
  console.log('Outlet current content:', outlet.innerHTML);

  // Update the outlet content directly
  outlet.innerHTML = '<h1>Test Component Loaded!</h1><p>If you see this, JavaScript is working.</p>';

  console.log('Content updated successfully, new content:', outlet.innerHTML);
}
