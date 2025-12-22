import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@vaadin/button';
import '@vaadin/grid';
import { columnBodyRenderer } from '@vaadin/grid/lit';
import { apiService } from '../services/api';

interface Research {
    id?: number;
    name: string;
    subject: string;
    description: string;
    tags: string[];
}

@customElement('research-participation')
export class ResearchParticipation extends LitElement {
    @state() private researches: Research[] = [];

    async firstUpdated() {
        await this.loadResearches();
    }

    private async loadResearches() {
        try {
            this.researches = await apiService.getAllResearches();
        } catch (error) {
            console.error('Failed to load researches:', error);
        }
    }

    private takeResearch(research: Research) {
        // Placeholder for taking research
        alert(`Taking research: ${research.name}`);
    }

    render() {
        return html`
            <div class="research-participation">
                <h2>Available Researches</h2>
                <vaadin-grid .items="${this.researches}" class="research-grid">
                    <vaadin-grid-column header="Name" path="name"></vaadin-grid-column>
                    <vaadin-grid-column header="Subject" path="subject"></vaadin-grid-column>
                    <vaadin-grid-column header="Description" path="description"></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Tags"
                        ${columnBodyRenderer<Research>(
                            (research) => html`${research.tags?.join(', ') || ''}`,
                            []
                        )}
                    ></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Action"
                        ${columnBodyRenderer<Research>(
                            (research) => html`
                                <vaadin-button @click=${() => this.takeResearch(research)}>
                                    Take Research
                                </vaadin-button>
                            `,
                            []
                        )}
                    ></vaadin-grid-column>
                </vaadin-grid>
            </div>
        `;
    }
}