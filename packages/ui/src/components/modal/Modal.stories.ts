import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Modal from './Modal.vue'

const meta: Meta<typeof Modal> = {
    title: 'Foundation/Layout/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used throughout the application for dialogs and overlays.

\`\`\`vue
<Modal ref="modal" header="Settings" :closable="true">
  <p>Modal content goes here</p>
</Modal>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        header: {
            control: 'text',
            description: 'Modal header text',
            table: { category: 'Content' },
        },
        noblur: {
            control: 'boolean',
            description: 'Disable backdrop blur effect',
            table: { category: 'Appearance' },
        },
        closable: {
            control: 'boolean',
            description: 'Show close button and allow closing',
            table: { category: 'Behavior' },
        },
    },
    args: {
        header: 'Modal Title',
        noblur: false,
        closable: true,
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { Modal },
        setup() {
            return { args }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem;">
            <button @click="$refs.modal.show()" style="padding: 0.75rem 1.5rem; background: var(--color-brand); color: var(--color-accent-contrast); border: none; border-radius: var(--radius-md); cursor: pointer; font-weight: 500; font-size: 0.875rem;">
              Open Modal
            </button>
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Use the controls panel to experiment with different modal configurations. Test header text, closable behavior, and blur effects.
          </p>
        </div>
        
        <Modal ref="modal" v-bind="args">
          <div style="padding: 1.5rem;">
            <p style="margin: 0 0 1.5rem 0; color: var(--color-base); line-height: 1.5;">This is the modal content. You can put any content here including forms, images, or other components.</p>
            <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
              <button @click="$refs.modal.hide()" style="padding: 0.5rem 1rem; background: var(--color-button-bg); color: var(--color-base); border: 1px solid var(--color-divider); border-radius: var(--radius-md); cursor: pointer; font-size: 0.875rem;">
                Cancel
              </button>
              <button @click="$refs.modal.hide()" style="padding: 0.5rem 1rem; background: var(--color-brand); color: var(--color-accent-contrast); border: none; border-radius: var(--radius-md); cursor: pointer; font-weight: 500; font-size: 0.875rem;">
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for testing modal functionality.',
            },
        },
    },
}

export const AllVariants: Story = {
    render: () => ({
        components: { Modal },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Modal Variants</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Header Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <button @click="$refs.modalWithHeader.show()" style="padding: 0.5rem 1rem; background: var(--color-brand); color: white; border: none; border-radius: 0.25rem; cursor: pointer;">Open</button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">With Header</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Standard modal with header and close button</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <button @click="$refs.modalNoHeader.show()" style="padding: 0.5rem 1rem; background: var(--color-brand); color: white; border: none; border-radius: 0.25rem; cursor: pointer;">Open</button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">No Header</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Content-only modal without header</div>
                </div>
              </div>
            </div>
          </div>

          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Behavior Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <button @click="$refs.modalClosable.show()" style="padding: 0.5rem 1rem; background: var(--color-brand); color: white; border: none; border-radius: 0.25rem; cursor: pointer;">Open</button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Closable</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Can be closed by clicking outside or X button</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <button @click="$refs.modalNotClosable.show()" style="padding: 0.5rem 1rem; background: var(--color-brand); color: white; border: none; border-radius: 0.25rem; cursor: pointer;">Open</button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Not Closable</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Must be closed programmatically</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Modal instances -->
        <Modal ref="modalWithHeader" header="Modal with Header" :closable="true">
          <div style="padding: 1rem;">
            <p>This modal has a header with a close button.</p>
          </div>
        </Modal>

        <Modal ref="modalNoHeader" :closable="true">
          <div style="padding: 1rem;">
            <h3 style="margin: 0 0 1rem 0;">Custom Content</h3>
            <p>This modal has no header, just content.</p>
            <button @click="$refs.modalNoHeader.hide()" style="padding: 0.5rem 1rem; background: var(--color-button-bg); border: 1px solid var(--color-divider); border-radius: 0.25rem; cursor: pointer; margin-top: 1rem;">Close</button>
          </div>
        </Modal>

        <Modal ref="modalClosable" header="Closable Modal" :closable="true">
          <div style="padding: 1rem;">
            <p>Click outside or the X button to close this modal.</p>
          </div>
        </Modal>

        <Modal ref="modalNotClosable" header="Non-Closable Modal" :closable="false">
          <div style="padding: 1rem;">
            <p>This modal cannot be closed by clicking outside.</p>
            <button @click="$refs.modalNotClosable.hide()" style="padding: 0.5rem 1rem; background: var(--color-brand); color: white; border: none; border-radius: 0.25rem; cursor: pointer; margin-top: 1rem;">Close Programmatically</button>
          </div>
        </Modal>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'All modal variants showing different header and behavior configurations.',
            },
        },
    },
} 