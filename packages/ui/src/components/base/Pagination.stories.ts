import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Pagination from './Pagination.vue'
import { ref } from 'vue'

const meta: Meta<typeof Pagination> = {
    title: 'Foundation/Utilities/Pagination',
    component: Pagination,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to provide pagination controls for navigating through multiple pages of content.

\`\`\`vue
<Pagination 
  :page="currentPage"
  :count="totalPages"
  @switch-page="handlePageChange"
/>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        page: {
            control: 'number',
            description: 'Current active page number',
            table: { category: 'State' },
        },
        count: {
            control: 'number',
            description: 'Total number of pages',
            table: { category: 'Content' },
        },
        linkFunction: {
            description: 'Optional function to generate URLs for each page',
            table: { category: 'Behavior' },
        },
    },
    args: {
        page: 5,
        count: 20,
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { Pagination },
        setup() {
            const currentPage = ref(5)
            const handlePageChange = (page: number) => {
                currentPage.value = page
            }
            return { args, currentPage, handlePageChange }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <Pagination 
              :page="currentPage" 
              :count="args.count"
              @switch-page="handlePageChange"
            />
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="text-align: center; padding: 1rem; border: 1px solid var(--color-divider); border-radius: 0.5rem; background: var(--color-bg);">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600;">Current Page</h4>
              <span style="font-size: 1.25rem; font-weight: 600; color: var(--color-brand);">{{ currentPage }}</span>
            </div>
            <div style="text-align: center; padding: 1rem; border: 1px solid var(--color-divider); border-radius: 0.5rem; background: var(--color-bg);">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600;">Total Pages</h4>
              <span style="font-size: 1.25rem; font-weight: 600; color: var(--color-secondary);">{{ args.count }}</span>
            </div>
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Click the pagination buttons to navigate between pages. Use the controls panel to experiment with different page counts.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with Pagination navigation and different page configurations.',
            },
        },
    },
} 