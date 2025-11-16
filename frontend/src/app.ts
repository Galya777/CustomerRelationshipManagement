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
  const outlet = document.getElementById('outlet');

  if (!outlet) {
    console.error('Could not find the outlet element');
    return;
  }

  console.log('Found outlet element, updating content directly...');

  // Update the outlet content directly
  outlet.innerHTML = '<h1>Test Component Loaded!</h1><p>If you see this, JavaScript is working.</p>';

  console.log('Content updated successfully');
}
