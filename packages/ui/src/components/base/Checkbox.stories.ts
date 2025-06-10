import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
    title: 'Foundation/Inputs/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used in forms and settings throughout the application.

\`\`\`vue
<Checkbox v-model="isChecked" label="Enable notifications" />
<Checkbox v-model="isIndeterminate" :indeterminate="true" label="Select all" />
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        modelValue: {
            control: 'boolean',
            description: 'Checkbox checked state',
            table: { category: 'State' },
        },
        label: {
            control: 'text',
            description: 'Checkbox label text',
            table: { category: 'Content' },
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the checkbox',
            table: { category: 'State' },
        },
        indeterminate: {
            control: 'boolean',
            description: 'Show indeterminate state',
            table: { category: 'State' },
        },
        collapsingToggleStyle: {
            control: 'boolean',
            description: 'Use collapsing toggle style',
            table: { category: 'Appearance' },
        },
    },
    args: {
        modelValue: false,
        label: 'Checkbox label',
        disabled: false,
        indeterminate: false,
        collapsingToggleStyle: false,
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return { args }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <Checkbox v-bind="args" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Use the controls panel to experiment with different checkbox states and styles.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with checkbox properties.',
            },
        },
    },
} 