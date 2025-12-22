import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/dialog';
import '@vaadin/grid';
import { columnBodyRenderer } from '@vaadin/grid/lit';
import { apiService } from '../services/api';

interface Product {
    id?: number;
    name: string;
    description: string;
    income: number;
    tags: string[];
    buyerIds: number[];
}

@customElement('product-monitoring')
export class ProductMonitoring extends LitElement {
    @state() private products: Product[] = [];
    @state() private searchQuery = '';
    @state() private totalIncome = 0;

    private filteredProducts() {
        if (!this.searchQuery) return this.products;
        const query = this.searchQuery.toLowerCase();
        return this.products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    }

    async firstUpdated() {
        await this.loadProducts();
        await this.loadTotalIncome();
    }

    private async loadProducts() {
        try {
            this.products = await apiService.getAllProducts();
        } catch (error) {
            console.error('Failed to load products:', error);
        }
    }

    private async loadTotalIncome() {
        try {
            // Assuming apiService has getTotalIncome
            this.totalIncome = 0; // Placeholder
        } catch (error) {
            console.error('Failed to load total income:', error);
        }
    }

    render() {
        const filteredProducts = this.filteredProducts();

        return html`
            <div class="product-monitoring">
                <div class="header">
                    <h2>Product Monitoring</h2>
                    <div class="stats">
                        <div class="stat">Total Income: $${this.totalIncome}</div>
                    </div>
                </div>

                <div class="search-bar">
                    <vaadin-text-field
                        placeholder="Search products..."
                        clear-button-visible
                        .value=${this.searchQuery}
                        @value-changed=${(e: CustomEvent) => this.searchQuery = e.detail.value}
                    ></vaadin-text-field>
                </div>

                <vaadin-grid .items="${filteredProducts}" class="product-grid">
                    <vaadin-grid-column header="Name" path="name"></vaadin-grid-column>
                    <vaadin-grid-column header="Description" path="description"></vaadin-grid-column>
                    <vaadin-grid-column header="Income" path="income"></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Tags"
                        ${columnBodyRenderer<Product>(
                            (product) => html`${product.tags?.join(', ') || ''}`,
                            []
                        )}
                    ></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Buyers"
                        ${columnBodyRenderer<Product>(
                            (product) => html`${product.buyerIds?.length || 0} buyers`,
                            []
                        )}
                    ></vaadin-grid-column>
                </vaadin-grid>
            </div>
        `;
    }
}