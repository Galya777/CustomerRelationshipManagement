import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/dialog';
import '@vaadin/grid';
import { columnBodyRenderer } from '@vaadin/grid/lit';
import { apiService } from '../services/api';

interface Group {
    id?: number;
    name: string;
    tokenKey: string;
    creationDate?: string;
    createdByUserId?: number;
    memberIds: number[];
}

@customElement('group-management')
export class GroupManagement extends LitElement {
    @state() private groups: Group[] = [];
    @state() private searchQuery = '';
    @state() private dialogOpened = false;
    @state() private editingGroup: Group | null = null;

    private filteredGroups() {
        if (!this.searchQuery) return this.groups;
        const query = this.searchQuery.toLowerCase();
        return this.groups.filter(group =>
            group.name.toLowerCase().includes(query)
        );
    }

    async firstUpdated() {
        await this.loadGroups();
    }

    private async loadGroups() {
        try {
            this.groups = await apiService.getAllGroups();
        } catch (error) {
            console.error('Failed to load groups:', error);
        }
    }

    private openCreateDialog() {
        this.editingGroup = { name: '', tokenKey: '', memberIds: [] };
        this.dialogOpened = true;
    }

    private openEditDialog(group: Group) {
        this.editingGroup = { ...group };
        this.dialogOpened = true;
    }

    private closeDialog() {
        this.dialogOpened = false;
        this.editingGroup = null;
    }

    private async saveGroup() {
        if (!this.editingGroup) return;
        try {
            if (this.editingGroup.id) {
                await apiService.updateGroup(this.editingGroup.id, this.editingGroup);
            } else {
                await apiService.createGroup(this.editingGroup);
            }
            await this.loadGroups();
            this.closeDialog();
        } catch (error) {
            console.error('Failed to save group:', error);
        }
    }

    private async deleteGroup(group: Group) {
        if (!group.id) return;
        if (confirm('Are you sure you want to delete this group?')) {
            try {
                await apiService.deleteGroup(group.id);
                await this.loadGroups();
            } catch (error) {
                console.error('Failed to delete group:', error);
            }
        }
    }

    render() {
        const filteredGroups = this.filteredGroups();

        return html`
            <div class="group-management">
                <div class="header">
                    <h2>Group Management</h2>
                    <vaadin-button theme="primary" @click=${this.openCreateDialog}>
                        Create Group
                    </vaadin-button>
                </div>

                <div class="search-bar">
                    <vaadin-text-field
                        placeholder="Search groups..."
                        clear-button-visible
                        .value=${this.searchQuery}
                        @value-changed=${(e: CustomEvent) => this.searchQuery = e.detail.value}
                    ></vaadin-text-field>
                </div>

                <vaadin-grid .items="${filteredGroups}" class="group-grid">
                    <vaadin-grid-column header="Name" path="name"></vaadin-grid-column>
                    <vaadin-grid-column header="Token Key" path="tokenKey"></vaadin-grid-column>
                    <vaadin-grid-column header="Creation Date" path="creationDate"></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Members"
                        ${columnBodyRenderer<Group>(
                            (group) => html`${group.memberIds?.length || 0} members`,
                            []
                        )}
                    ></vaadin-grid-column>
                    <vaadin-grid-column
                        header="Actions"
                        ${columnBodyRenderer<Group>(
                            (group) => html`
                                <vaadin-button theme="tertiary" @click=${() => this.openEditDialog(group)}>
                                    Edit
                                </vaadin-button>
                                <vaadin-button theme="tertiary error" @click=${() => this.deleteGroup(group)}>
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
                    header-title=${this.editingGroup?.id ? 'Edit Group' : 'Create Group'}
                >
                    <vaadin-text-field
                        label="Name"
                        .value=${this.editingGroup?.name || ''}
                        @value-changed=${(e: CustomEvent) => { if (this.editingGroup) this.editingGroup.name = e.detail.value; }}
                    ></vaadin-text-field>

                    <vaadin-text-field
                        label="Token Key"
                        .value=${this.editingGroup?.tokenKey || ''}
                        @value-changed=${(e: CustomEvent) => { if (this.editingGroup) this.editingGroup.tokenKey = e.detail.value; }}
                    ></vaadin-text-field>

                    <vaadin-button slot="footer" theme="primary" @click=${this.saveGroup}>
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