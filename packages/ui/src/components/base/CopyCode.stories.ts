import type { Meta, StoryObj } from '@storybook/vue3-vite'
import CopyCode from './CopyCode.vue'

const meta: Meta<typeof CopyCode> = {
    title: 'Foundation/Utilities/CopyCode',
    component: CopyCode,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to display copyable code snippets with a click-to-copy functionality.

\`\`\`vue
<CopyCode text="npm install @modrinth/ui" />
<CopyCode text="const example = 'Hello World'" />
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        text: {
            control: 'text',
            description: 'The code text to display and copy',
            table: { category: 'Content' },
        },
    },
    args: {
        text: 'npm install @modrinth/ui',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { CopyCode },
        setup() {
            return { args }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; text-align: center;">
            <CopyCode v-bind="args" />
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
            <div style="text-align: center;">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600;">Installation Command</h4>
              <CopyCode text="npm install @modrinth/ui" />
            </div>
            <div style="text-align: center;">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600;">Import Statement</h4>
              <CopyCode text="import { Button, Card } from '@modrinth/ui'" />
            </div>
            <div style="text-align: center;">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600;">API Key</h4>
              <CopyCode text="mrp_1234567890abcdef" />
            </div>
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Click any code snippet to copy it to your clipboard. The icon will change to indicate successful copying.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with CopyCode functionality and different code snippets.',
            },
        },
    },
} 