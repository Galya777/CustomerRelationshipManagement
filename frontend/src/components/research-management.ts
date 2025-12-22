import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/text-area';
import '@vaadin/dialog';
import '@vaadin/grid';
import { columnBodyRenderer } from '@vaadin/grid/lit';
import { apiService } from '../services/api';

interface Research {
    id?: number;
    name: string;
    subject: string;
    description: string;
    tags: string[];
    createdByUserId?: number;
}

@customElement('research-management')
export class ResearchManagement extends LitElement {
    @state() private researches: Research[] = [];
    @state() private searchQuery = '';
    @state() private dialogOpened = false;
    @state() private editingResearch: Research | null = null;

    private filteredResearches() {
        if (!this.searchQuery) return this.researches;
        const query = this.searchQuery.toLowerCase();
        return this.researches.filter(research =>
            research.name.toLowerCase().includes(query) ||
            research.subject.toLowerCase().includes(query) ||
            research.description.toLowerCase().includes(query)
        );
    }

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

    private openCreateDialog() {
        this.editingResearch = { name: '', subject: '', description: '', tags: [] };
        this.dialogOpened = true;
    }

    private openEditDialog(research: Research) {
        this.editingResearch = { ...research };
        this.dialogOpened = true;
    }

    private closeDialog() {
        this.dialogOpened = false;
        this.editingResearch = null;
    }

    private async saveResearch() {
        if (!this.editingResearch) return;

        try {
            if (this.editingResearch.id) {
                await apiService.updateResearch(this.editingResearch.id, this.editingResearch);
            } else {
                await apiService.createResearch(this.editingResearch);
            }
            await this.loadResearches();
            this.closeDialog();
        } catch (error) {
            console.error('Failed to save research:', error);
        }
    }

    private async deleteResearch(research: Research) {
        if (!research.id) return;
        if (confirm('Are you sure you want to delete this research?')) {
            try {
                await apiService.deleteResearch(research.id);
                await this.loadResearches();
            } catch (error) {
                console.error('Failed to delete research:', error);
            }
        }
    }

    render() {
        const filteredResearches = this.filteredResearches();

        return html`
            <div class="research-management">
                <div class="header">
                    <h2>Research Management</h2>
                    <vaadin-button theme="primary" @click=${this.openCreateDialog}>
                        Create Research
                    </vaadin-button>
                </div>

                <div class="search-bar">
                    <vaadin-text-field
                        placeholder="Search researches..."
                        clear-button-visible
                        .value=${this.searchQuery}
                        @value-changed=${(e: CustomEvent) => this.searchQuery = e.detail.value}
                    ></vaadin-text-field>
                </div>

                <vaadin-grid .items="${filteredResearches}" class="research-grid">
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
                        header="Actions"
                        ${columnBodyRenderer<Research>(
                            (research) => html`
                                <vaadin-button theme="tertiary" @click=${() => this.openEditDialog(research)}>
                                    Edit
                                </vaadin-button>
                                <vaadin-button theme="tertiary error" @click=${() => this.deleteResearch(research)}>
                                    Delete
                                </vaadin-button>
                            `,
                            []
                        )}
                    ></vaadin-grid-column>
                </vaadin-grid>

                <vaadin-dialog
                    .opened=${this.dialogOpened}
                    @opened-changed=${(e: CustomEvent) => { if (!e.detail.value) this.closeDialog(); }}
                    header-title=${this.editingResearch?.id ? 'Edit Research' : 'Create Research'}
                >
                    <vaadin-text-field
                        label="Name"
                        .value=${this.editingResearch?.name || ''}
                        @value-changed=${(e: CustomEvent) => { if (this.editingResearch) this.editingResearch.name = e.detail.value; }}
                    ></vaadin-text-field>

                    <vaadin-text-field
                        label="Subject"
                        .value=${this.editingResearch?.subject || ''}
                        @value-changed=${(e: CustomEvent) => { if (this.editingResearch) this.editingResearch.subject = e.detail.value; }}
                    ></vaadin-text-field>

                    <vaadin-text-area
                        label="Description"
                        .value=${this.editingResearch?.description || ''}
                        @value-changed=${(e: CustomEvent) => { if (this.editingResearch) this.editingResearch.description = e.detail.value; }}
                    ></vaadin-text-area>

                    <vaadin-text-field
                        label="Tags (comma separated)"
                        .value=${this.editingResearch?.tags?.join(', ') || ''}
                        @value-changed=${(e: CustomEvent) => {
                            if (this.editingResearch) {
                                this.editingResearch.tags = e.detail.value.split(',').map((t: string) => t.trim());
                            }
                        }}
                    ></vaadin-text-field>

                    <vaadin-button slot="footer" theme="primary" @click=${this.saveResearch}>
                        Save
                    </vaadin-button>
                    <vaadin-button slot="footer" theme="tertiary" @click=${this.closeDialog}>
                        Cancel
                    </vaadin-button>
                </vaadin-dialog>
            </div>
        `;
    }
}