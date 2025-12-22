import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/product-monitoring';

@customElement('product-view')
export class ProductView extends LitElement {
    render() {
        return html`
            <product-monitoring></product-monitoring>
        `;
    }
}