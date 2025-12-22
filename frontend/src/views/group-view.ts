import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/group-management';

@customElement('group-view')
export class GroupView extends LitElement {
    render() {
        return html`
            <group-management></group-management>
        `;
    }
}