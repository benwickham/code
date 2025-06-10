import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AutoLink from './AutoLink.vue'

const meta: Meta<typeof AutoLink> = {
    title: 'Foundation/Utilities/AutoLink',
    component: AutoLink,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component automatically determines whether to render a router-link, external link, or span based on the 'to' prop.

\`\`\`vue
<AutoLink to="/internal-route">Internal Link</AutoLink>
<AutoLink to="https://external.com">External Link</AutoLink>
<AutoLink to="not-a-link">Plain Text</AutoLink>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        to: {
            control: 'text',
            description: 'Target URL or route - determines link type automatically',
            table: { category: 'Content' },
        },
        default: {
            description: 'Default slot content for the link text',
            table: { category: 'Content' },
        },
    },
    args: {
        to: '/example-route',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { AutoLink },
        setup() {
            return { args }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; text-align: center;">
            <AutoLink v-bind="args" style="color: var(--color-brand); text-decoration: underline;">
              Example Link Text
            </AutoLink>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="padding: 1rem; border: 1px solid var(--color-divider); border-radius: 0.5rem; background: var(--color-bg);">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600;">Internal Route</h4>
              <AutoLink to="/example" style="color: var(--color-brand); text-decoration: underline;">
                Internal Link
              </AutoLink>
            </div>
            <div style="padding: 1rem; border: 1px solid var(--color-divider); border-radius: 0.5rem; background: var(--color-bg);">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600;">External URL</h4>
              <AutoLink to="https://example.com" style="color: var(--color-brand); text-decoration: underline;">
                External Link
              </AutoLink>
            </div>
            <div style="padding: 1rem; border: 1px solid var(--color-divider); border-radius: 0.5rem; background: var(--color-bg);">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600;">Plain Text</h4>
              <AutoLink to="not-a-link" style="color: var(--color-secondary);">
                Plain Text
              </AutoLink>
            </div>
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            AutoLink automatically determines the appropriate element type based on the 'to' prop value.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground showing AutoLink behavior with different URL types.',
            },
        },
    },
} 