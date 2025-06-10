import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DropdownSelect from './DropdownSelect.vue'
import {
  createStoryParameters,
  createSelectArgType,
  createTextArgType,
  createBooleanArgType,
  commonA11yConfig
} from './story-utils'

const meta: Meta<typeof DropdownSelect> = {
  title: 'Foundation/Form/DropdownSelect',
  component: DropdownSelect,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Example usage

This component is used in [search filters](https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/search/%5BsearchProjectType%5D.vue#L164) for sorting and filtering, and in [project settings](https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/%5Btype%5D/%5Bid%5D/settings/license.vue#L29) for license selection.

\`\`\`vue
<DropdownSelect
  v-model="sortBy"
  :options="['relevance', 'downloads', 'follows', 'newest', 'updated']"
  name="sort"
  placeholder="Sort by"
/>
\`\`\`
        `,
      },
    },
    ...commonA11yConfig,
  },
  argTypes: {
    // ===== DATA =====
    options: {
      control: 'object',
      description: 'Array of options to display',
      table: {
        category: 'Data',
        type: { summary: 'Array<string | number | object>' },
      },
    },

    // ===== FORM =====
    name: createTextArgType('Name attribute for form handling', 'Form'),

    // ===== APPEARANCE =====
    placeholder: createTextArgType('Placeholder text when no option is selected', 'Appearance'),

    // ===== BEHAVIOR =====
    disabled: createBooleanArgType('Disable the dropdown', 'Behavior'),
  },
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    name: 'example-dropdown',
    placeholder: 'Select an option',
    disabled: false,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ===== HELPER FUNCTIONS =====
const optionTypeExamples = [
  {
    title: 'String Options',
    description: 'Simple string array for basic selections like categories, tags, or simple lists.',
    options: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
    placeholder: 'Choose a fruit',
    name: 'string-select'
  },
  {
    title: 'Number Options',
    description: 'Numeric values for quantities, IDs, or mathematical selections.',
    options: [1, 2, 3, 5, 8, 13, 21],
    placeholder: 'Pick a number',
    name: 'number-select'
  },
  {
    title: 'Object Options',
    description: 'Complex objects with custom display formatting and additional data.',
    options: [
      { id: 1, name: 'Admin', level: 'high' },
      { id: 2, name: 'Moderator', level: 'medium' },
      { id: 3, name: 'User', level: 'low' }
    ],
    placeholder: 'Select a role',
    name: 'object-select'
  },
  {
    title: 'Mixed Types',
    description: 'Flexible handling of different data types in a single dropdown.',
    options: ['String', 42, { name: 'Object', type: 'complex' }],
    placeholder: 'Choose any type',
    name: 'mixed-select'
  }
]

// 1. PLAYGROUND STORY (Always first)
export const Playground: Story = {
  render: (args) => ({
    components: { DropdownSelect },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <div style="max-width: 300px;">
              <DropdownSelect v-bind="args" />
            </div>
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Use the controls panel to experiment with different options, states, and configurations. Test keyboard navigation and accessibility features.
          </p>
        </div>
      </div>
    `,
  }),
  parameters: createStoryParameters('Interactive playground for experimenting with all dropdown configurations and states.', 'fullscreen'),
}

// 2. OPTION TYPES
export const OptionTypes: Story = {
  render: () => ({
    components: { DropdownSelect },
    setup() {
      return { optionTypeExamples }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Option Types</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div v-for="example in optionTypeExamples" :key="example.title" style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">{{ example.title }}</h3>
            <div style="margin-bottom: 1.5rem;">
              <DropdownSelect 
                :options="example.options" 
                :placeholder="example.placeholder"
                :name="example.name"
              />
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary);">
              {{ example.description }}
            </p>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: createStoryParameters('Different option types supported: strings, numbers, objects, and mixed arrays.', 'fullscreen'),
}

// 3. STATES AND VARIANTS
export const StatesAndVariants: Story = {
  render: () => ({
    components: { DropdownSelect },
    setup() {
      const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
      return { options }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">States and Variants</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Default State</h3>
            <div style="margin-bottom: 1rem;">
              <DropdownSelect 
                :options="options" 
                placeholder="Select an option"
                name="default-select"
              />
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary);">
              Standard dropdown in its default, interactive state.
            </p>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Disabled State</h3>
            <div style="margin-bottom: 1rem;">
              <DropdownSelect 
                :options="options" 
                placeholder="Cannot select"
                name="disabled-select"
                :disabled="true"
              />
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary);">
              Disabled dropdown that cannot be interacted with.
            </p>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">With Placeholder</h3>
            <div style="margin-bottom: 1rem;">
              <DropdownSelect 
                :options="options" 
                placeholder="Choose your preference..."
                name="placeholder-select"
              />
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary);">
              Custom placeholder text to guide user selection.
            </p>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Empty Options</h3>
            <div style="margin-bottom: 1rem;">
              <DropdownSelect 
                :options="[]" 
                placeholder="No options available"
                name="empty-select"
              />
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary);">
              Graceful handling when no options are provided.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: createStoryParameters('Different states including default, disabled, with placeholders, and empty options.', 'fullscreen'),
}

// 4. REAL WORLD USAGE
export const RealWorldUsage: Story = {
  render: () => ({
    components: { DropdownSelect },
    setup() {
      const categories = ['Mods', 'Resource Packs', 'Shaders', 'Data Packs', 'Plugins']
      const versions = ['1.20.4', '1.20.3', '1.20.2', '1.20.1', '1.19.4', '1.19.3']
      const sortOptions = ['Relevance', 'Downloads', 'Updated', 'Created', 'Name']
      const userRoles = [
        { id: 'admin', name: 'Administrator', permissions: 'full' },
        { id: 'mod', name: 'Moderator', permissions: 'moderate' },
        { id: 'user', name: 'User', permissions: 'basic' }
      ]

      return { categories, versions, sortOptions, userRoles }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real World Usage</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Search Filters</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-base); font-size: 0.875rem;">Category</label>
                <DropdownSelect 
                  :options="categories" 
                  placeholder="All categories"
                  name="category-filter"
                />
              </div>
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-base); font-size: 0.875rem;">Version</label>
                <DropdownSelect 
                  :options="versions" 
                  placeholder="Any version"
                  name="version-filter"
                />
              </div>
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-base); font-size: 0.875rem;">Sort by</label>
                <DropdownSelect 
                  :options="sortOptions" 
                  placeholder="Relevance"
                  name="sort-filter"
                />
              </div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">User Management</h3>
            <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.375rem; border: 1px solid var(--color-divider);">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-brand); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">
                  JD
                </div>
                <div style="flex: 1;">
                  <div style="font-weight: 600; margin-bottom: 0.25rem; color: var(--color-base);">John Doe</div>
                  <div style="font-size: 0.875rem; color: var(--color-secondary);">john.doe@example.com</div>
                </div>
              </div>
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-base); font-size: 0.875rem;">Role</label>
                <DropdownSelect 
                  :options="userRoles" 
                  placeholder="Select role"
                  name="user-role"
                />
              </div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Settings</h3>
            <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.375rem; border: 1px solid var(--color-divider);">
              <h4 style="margin: 0 0 1rem 0; font-size: 1rem; color: var(--color-base);">Awesome Mod</h4>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-base); font-size: 0.875rem;">Visibility</label>
                  <DropdownSelect 
                    :options="['Public', 'Unlisted', 'Private']" 
                    placeholder="Public"
                    name="visibility"
                  />
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-base); font-size: 0.875rem;">License</label>
                  <DropdownSelect 
                    :options="['MIT', 'GPL-3.0', 'Apache-2.0', 'BSD-3-Clause', 'Custom']" 
                    placeholder="Choose license"
                    name="license"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: createStoryParameters('Real-world usage examples in search filters, user management, and project settings.', 'fullscreen'),
}

