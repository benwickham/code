import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SearchFilter from './SearchFilter.vue'
import { ref } from 'vue'

const meta: Meta<typeof SearchFilter> = {
    title: 'Foundation/Inputs/SearchFilter',
    component: SearchFilter,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to create filterable checkboxes for search and filtering functionality.

\`\`\`vue
<SearchFilter 
  facet-name="category"
  display-name="Category Filter"
  :active-filters="activeFilters"
  @toggle="handleToggle"
/>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        facetName: {
            control: 'text',
            description: 'Unique identifier for the filter',
            table: { category: 'Content' },
        },
        displayName: {
            control: 'text',
            description: 'Display text for the filter',
            table: { category: 'Content' },
        },
        icon: {
            control: 'text',
            description: 'SVG icon HTML string',
            table: { category: 'Content' },
        },
        activeFilters: {
            control: 'object',
            description: 'Array of currently active filter names',
            table: { category: 'State' },
        },
        default: {
            description: 'Default slot for custom icon content',
            table: { category: 'Content' },
        },
    },
    args: {
        facetName: 'example-filter',
        displayName: 'Example Filter',
        icon: '',
        activeFilters: [],
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { SearchFilter },
        setup() {
            const activeFilters = ref<string[]>([])
            const handleToggle = (facetName: string) => {
                if (activeFilters.value.includes(facetName)) {
                    activeFilters.value = activeFilters.value.filter(f => f !== facetName)
                } else {
                    activeFilters.value = [...activeFilters.value, facetName]
                }
            }
            return { args, activeFilters, handleToggle }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem;">
            <SearchFilter 
              v-bind="args" 
              :active-filters="activeFilters"
              @toggle="handleToggle"
            />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Active filters: <strong>{{ activeFilters.length > 0 ? activeFilters.join(', ') : 'None' }}</strong>. Use the controls panel to experiment with different properties.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with SearchFilter checkbox functionality.',
            },
        },
    },
} 