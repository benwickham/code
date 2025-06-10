import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Breadcrumbs from './Breadcrumbs.vue'

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Foundation/Layout/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to display navigation breadcrumbs throughout the application.

\`\`\`vue
<Breadcrumbs 
  :link-stack="[
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' }
  ]"
  current-title="Current Page"
/>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        linkStack: {
            control: 'object',
            description: 'Array of breadcrumb links with href and label properties',
            table: { category: 'Content' },
        },
        currentTitle: {
            control: 'text',
            description: 'Title of the current page (not linked)',
            table: { category: 'Content' },
        },
    },
    args: {
        linkStack: [
            { href: '/', label: 'Home' },
            { href: '/projects', label: 'Projects' },
            { href: '/projects/category', label: 'Category' },
        ],
        currentTitle: 'Current Page',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { Breadcrumbs },
        setup() {
            return { args }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem;">
            <Breadcrumbs v-bind="args" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Use the controls panel to experiment with different breadcrumb configurations. Note: Links are for display only in this demo.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with Breadcrumbs navigation structure.',
            },
        },
    },
} 