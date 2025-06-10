import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FileInput from './FileInput.vue'

const meta: Meta<typeof FileInput> = {
    title: 'Foundation/Inputs/FileInput',
    component: FileInput,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used for file upload functionality throughout the application.

\`\`\`vue
<FileInput 
  prompt="Select files"
  :multiple="true"
  accept="image/*"
  :max-size="5000000"
  :long-style="true"
  @change="handleFileChange"
/>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        prompt: {
            control: 'text',
            description: 'Text prompt for file selection',
            table: { category: 'Content' },
        },
        multiple: {
            control: 'boolean',
            description: 'Whether to allow multiple file selection',
            table: { category: 'Behavior' },
        },
        accept: {
            control: 'text',
            description: 'File type restrictions (MIME types)',
            table: { category: 'Behavior' },
        },
        maxSize: {
            control: 'number',
            description: 'Maximum file size in bytes',
            table: { category: 'Behavior' },
        },
        showIcon: {
            control: 'boolean',
            description: 'Whether to show an icon',
            table: { category: 'Appearance' },
        },
        shouldAlwaysReset: {
            control: 'boolean',
            description: 'Whether to always reset file selection',
            table: { category: 'Behavior' },
        },
        longStyle: {
            control: 'boolean',
            description: 'Whether to use the long drag-and-drop style',
            table: { category: 'Appearance' },
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the input is disabled',
            table: { category: 'State' },
        },
    },
    args: {
        prompt: 'Select file',
        multiple: false,
        accept: '',
        maxSize: null,
        showIcon: true,
        shouldAlwaysReset: false,
        longStyle: false,
        disabled: false,
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { FileInput },
        setup() {
            const handleChange = (files: File[]) => {
                console.log('Files selected:', files)
            }
            return { args, handleChange }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <FileInput v-bind="args" @change="handleChange" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Use the controls panel to experiment with different file input configurations. Check the browser console for file selection events.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with FileInput properties and file selection.',
            },
        },
    },
} 