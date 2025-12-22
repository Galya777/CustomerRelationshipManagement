import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/research-management';

@customElement('research-view')
export class ResearchView extends LitElement {
    render() {
        return html`
            <research-management></research-management>
        `;
    }
}