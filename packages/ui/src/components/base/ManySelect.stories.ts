import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ManySelect from './ManySelect.vue'
import { ref } from 'vue'

const meta: Meta<typeof ManySelect> = {
    title: 'Foundation/Inputs/ManySelect',
    component: ManySelect,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used for multi-selection from a list of options throughout the application.

\`\`\`vue
<ManySelect 
  v-model="selectedOptions"
  :options="['Option 1', 'Option 2', 'Option 3']"
  :search="true"
  :show-always="true"
>
  Select options
</ManySelect>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        modelValue: {
            control: 'object',
            description: 'Array of selected options',
            table: { category: 'State' },
        },
        options: {
            control: 'object',
            description: 'Array of available options',
            table: { category: 'Content' },
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the select is disabled',
            table: { category: 'State' },
        },
        search: {
            control: 'boolean',
            description: 'Whether to show search functionality',
            table: { category: 'Behavior' },
        },
        showAlways: {
            control: 'boolean',
            description: 'Whether to always show the dropdown',
            table: { category: 'Behavior' },
        },
        displayName: {
            description: 'Function to format option labels',
            table: { category: 'Content' },
        },
        position: {
            control: 'text',
            description: 'Dropdown position',
            table: { category: 'Layout' },
        },
        direction: {
            control: 'text',
            description: 'Dropdown direction',
            table: { category: 'Layout' },
        },
        tooltip: {
            control: 'text',
            description: 'Tooltip text',
            table: { category: 'Content' },
        },
    },
    args: {
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
        disabled: false,
        search: false,
        showAlways: true,
        position: 'auto',
        direction: 'auto',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { ManySelect },
        setup() {
            const selected = ref<string[]>([])
            return { args, selected }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <ManySelect v-bind="args" v-model="selected">
              Select multiple options
            </ManySelect>
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Selected: <strong>{{ selected.length > 0 ? selected.join(', ') : 'None' }}</strong>. Use the controls panel to experiment with different configurations.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with ManySelect multi-selection functionality.',
            },
        },
    },
} 