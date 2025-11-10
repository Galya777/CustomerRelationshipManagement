import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js'; // Using legacy import for better compatibility
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/button';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/tabs';

declare global {
  interface HTMLElementTagNameMap {
    'main-layout': MainLayout;
  }
}

@customElement('main-layout')
export class MainLayout extends LitElement {
  protected render(): ReturnType<typeof html> {
    return html`
      <vaadin-app-layout>
        <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
        <h1 slot="navbar" class="text-l m-0">Customer Relationship Management</h1>
        
        <div class="flex flex-col h-full">
          <slot></slot>
        </div>
      </vaadin-app-layout>
    `;
  }
}
