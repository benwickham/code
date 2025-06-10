import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Chips from './Chips.vue'
import { ref } from 'vue'

const meta: Meta<typeof Chips> = {
    title: 'Foundation/Data Display/Chips',
    component: Chips,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to display selectable chips for filtering and categorization throughout the application.

\`\`\`vue
<Chips 
  :items="['Option 1', 'Option 2', 'Option 3']"
  v-model="selectedOption"
  :never-empty="true"
  :capitalize="true"
/>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        items: {
            control: 'object',
            description: 'Array of items to display as chips',
            table: { category: 'Content' },
        },
        formatLabel: {
            description: 'Function to format item labels',
            table: { category: 'Content' },
        },
        neverEmpty: {
            control: 'boolean',
            description: 'Whether at least one item must always be selected',
            table: { category: 'Behavior' },
        },
        capitalize: {
            control: 'boolean',
            description: 'Whether to capitalize chip labels',
            table: { category: 'Appearance' },
        },
        modelValue: {
            description: 'Currently selected item',
            table: { category: 'State' },
        },
    },
    args: {
        items: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        neverEmpty: true,
        capitalize: true,
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { Chips },
        setup() {
            const selected = ref('Option 1')
            return { args, selected }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <Chips v-bind="args" v-model="selected" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Selected: <strong>{{ selected }}</strong>. Use the controls panel to experiment with different options and behaviors.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with Chips selection and properties.',
            },
        },
    },
}

// 2. ALL VARIANTS STORY
export const AllVariants: Story = {
    render: () => ({
        components: { Chips },
        setup() {
            const selectedBasic = ref('Option 1')
            const selectedCapitalized = ref('minecraft')
            const selectedFormatted = ref('critical')
            const selectedNonEmpty = ref('always')
            const selectedEmpty = ref('')
            const selectedCustom = ref({ id: 1, name: 'First Item' })

            const formatPriority = (item: string) => {
                const priorities = {
                    'low': '🟢 Low Priority',
                    'medium': '🟡 Medium Priority',
                    'high': '🟠 High Priority',
                    'critical': '🔴 Critical Priority'
                }
                return priorities[item as keyof typeof priorities] || item
            }

            const formatObject = (item: any) => {
                return item.name
            }

            return {
                selectedBasic,
                selectedCapitalized,
                selectedFormatted,
                selectedNonEmpty,
                selectedEmpty,
                selectedCustom,
                formatPriority,
                formatObject
            }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All Chips Variants</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Basic Item Types -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Basic Item Types</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Simple String Items</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Standard text-based chip selection</div>
                </div>
                <Chips 
                  :items="['Option 1', 'Option 2', 'Option 3', 'Option 4']"
                  v-model="selectedBasic"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedBasic }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Single Item Set</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Single chip behaves as a toggle</div>
                </div>
                <Chips 
                  :items="['Only Option']"
                  v-model="selectedEmpty"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedEmpty || 'None' }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Capitalization Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Capitalization Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">With Capitalization</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">capitalize="true" - Labels are capitalized</div>
                </div>
                <Chips 
                  :items="['minecraft', 'fabric', 'forge', 'quilt']"
                  v-model="selectedCapitalized"
                  :capitalize="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedCapitalized }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Without Capitalization</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">capitalize="false" - Raw label display</div>
                </div>
                <Chips 
                  :items="['minecraft', 'fabric', 'forge', 'quilt']"
                  v-model="selectedCapitalized"
                  :capitalize="false"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedCapitalized }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Never Empty Behavior -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Selection Behavior Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Never Empty Mode</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">never-empty="true" - Always has selection</div>
                </div>
                <Chips 
                  :items="['always', 'selected', 'something', 'required']"
                  v-model="selectedNonEmpty"
                  :never-empty="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedNonEmpty }}</strong> (cannot be empty)
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Allow Empty Mode</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">never-empty="false" - Can deselect all</div>
                </div>
                <Chips 
                  :items="['optional', 'selection', 'can', 'clear']"
                  v-model="selectedEmpty"
                  :never-empty="false"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedEmpty || 'None' }}</strong> (can be empty)
                </div>
              </div>
            </div>
          </div>

          <!-- Custom Label Formatting -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Custom Label Formatting</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Priority Levels with Icons</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Custom formatLabel function with emojis</div>
                </div>
                <Chips 
                  :items="['low', 'medium', 'high', 'critical']"
                  v-model="selectedFormatted"
                  :format-label="formatPriority"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedFormatted }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Object Items with Formatter</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Complex objects with name extraction</div>
                </div>
                <Chips 
                  :items="[
                    { id: 1, name: 'First Item' },
                    { id: 2, name: 'Second Item' },
                    { id: 3, name: 'Third Item' }
                  ]"
                  v-model="selectedCustom"
                  :format-label="formatObject"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedCustom?.name || 'None' }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Length Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Length Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Short Labels</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Minimal text content</div>
                </div>
                <Chips 
                  :items="['A', 'B', 'C', 'D', 'E']"
                  v-model="selectedBasic"
                />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Long Labels</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Extended text content that wraps</div>
                </div>
                <Chips 
                  :items="['Very Long Option Name That Extends', 'Another Extended Choice', 'Short', 'Medium Length Option']"
                  v-model="selectedBasic"
                />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Many Options</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Large number of selectable items</div>
                </div>
                <Chips 
                  :items="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10']"
                  v-model="selectedBasic"
                />
              </div>
            </div>
          </div>

          <!-- Content Type Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Content Type Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Numbers</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Numeric content display</div>
                </div>
                <Chips 
                  :items="['1', '2', '3', '4', '5']"
                  v-model="selectedBasic"
                />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Mixed Case</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Varied capitalization patterns</div>
                </div>
                <Chips 
                  :items="['camelCase', 'PascalCase', 'kebab-case', 'snake_case', 'UPPERCASE']"
                  v-model="selectedBasic"
                />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Special Characters</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Non-alphanumeric content</div>
                </div>
                <Chips 
                  :items="['v1.0.0', '>=2.0', '@latest', '#main', '~1.2.3']"
                  v-model="selectedBasic"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Comprehensive showcase of all Chips variants including item types, capitalization options, selection behaviors, custom formatting, length variations, and content types.',
            },
        },
    },
}

// 3. ALL STATES STORY
export const AllStates: Story = {
    render: () => ({
        components: { Chips },
        setup() {
            const selectedEmpty = ref('')
            const selectedSingle = ref('Option 1')
            const selectedDefault = ref('Default')
            const selectedNeverEmpty = ref('Required')
            const selectedOptional = ref('')
            const selectedDisabled = ref('Disabled')
            const selectedFirst = ref('First')
            const selectedLast = ref('Last')
            const selectedMiddle = ref('Middle')

            return {
                selectedEmpty,
                selectedSingle,
                selectedDefault,
                selectedNeverEmpty,
                selectedOptional,
                selectedDisabled,
                selectedFirst,
                selectedLast,
                selectedMiddle
            }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All Chips States</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Selection States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Selection States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">No Selection State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Empty selection with optional behavior</div>
                </div>
                <Chips 
                  :items="['Option 1', 'Option 2', 'Option 3']"
                  v-model="selectedEmpty"
                  :never-empty="false"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  State: <strong>{{ selectedEmpty || 'None selected' }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Single Selection State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">One item actively selected</div>
                </div>
                <Chips 
                  :items="['Option 1', 'Option 2', 'Option 3']"
                  v-model="selectedSingle"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  State: <strong>{{ selectedSingle }} selected</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Default Selection State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Initial selection on load</div>
                </div>
                <Chips 
                  :items="['Default', 'Alternative', 'Other']"
                  v-model="selectedDefault"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  State: <strong>{{ selectedDefault }} (default)</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Behavior States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Behavior States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Never Empty Required State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Cannot deselect all items</div>
                </div>
                <Chips 
                  :items="['Required', 'Always', 'Selected']"
                  v-model="selectedNeverEmpty"
                  :never-empty="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  State: <strong>{{ selectedNeverEmpty }} (required)</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Optional Selection State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Can clear all selections</div>
                </div>
                <Chips 
                  :items="['Optional', 'Can Clear', 'Flexible']"
                  v-model="selectedOptional"
                  :never-empty="false"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  State: <strong>{{ selectedOptional || 'Clearable (optional)' }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Position States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Position States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">First Item Selected</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Leading position selection</div>
                </div>
                <Chips 
                  :items="['First', 'Second', 'Third', 'Fourth']"
                  v-model="selectedFirst"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Position: <strong>{{ selectedFirst }} (1st)</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Middle Item Selected</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Center position selection</div>
                </div>
                <Chips 
                  :items="['First', 'Middle', 'Last']"
                  v-model="selectedMiddle"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Position: <strong>{{ selectedMiddle }} (center)</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Last Item Selected</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Trailing position selection</div>
                </div>
                <Chips 
                  :items="['First', 'Second', 'Third', 'Last']"
                  v-model="selectedLast"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Position: <strong>{{ selectedLast }} (last)</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Context States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Context States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Filter Context State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Used in search/filter interfaces</div>
                </div>
                <Chips 
                  :items="['All', 'Mods', 'Plugins', 'Modpacks', 'Shaders']"
                  v-model="selectedSingle"
                  :capitalize="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Filter: <strong>{{ selectedSingle }} active</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Category Context State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Used in categorization interfaces</div>
                </div>
                <Chips 
                  :items="['Technology', 'Adventure', 'Magic', 'Decoration']"
                  v-model="selectedDefault"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Category: <strong>{{ selectedDefault }} selected</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Settings Context State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Used in configuration interfaces</div>
                </div>
                <Chips 
                  :items="['Enabled', 'Disabled']"
                  v-model="selectedSingle"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Setting: <strong>{{ selectedSingle }} mode</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates all possible states of the Chips component including selection states, behavior modes, position contexts, and usage scenarios.',
            },
        },
    },
}

// 4. REAL WORLD USAGE STORY
export const RealWorldUsage: Story = {
    render: () => ({
        components: { Chips },
        setup() {
            const selectedProjectType = ref('mod')
            const selectedLoader = ref('fabric')
            const selectedCategory = ref('technology')
            const selectedVersion = ref('1.20.1')
            const selectedSort = ref('relevance')
            const selectedStatus = ref('approved')
            const selectedLicense = ref('mit')
            const selectedEnvironment = ref('client')

            return {
                selectedProjectType,
                selectedLoader,
                selectedCategory,
                selectedVersion,
                selectedSort,
                selectedStatus,
                selectedLicense,
                selectedEnvironment
            }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real World Chips Usage</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Search Filtering -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Search & Filtering</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Project Type Filter</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">
                    Browse page filters: <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/search/[[query]].vue" target="_blank" style="color: var(--color-brand); text-decoration: none;">search/[[query]].vue</a>
                  </div>
                </div>
                <Chips 
                  :items="['mod', 'modpack', 'plugin', 'shader', 'datapack', 'resourcepack']"
                  v-model="selectedProjectType"
                  :capitalize="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Filtering: <strong>{{ selectedProjectType }}s</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Mod Loader Selection</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">
                    Project filters: <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/components/ui/search/SearchFilter.vue" target="_blank" style="color: var(--color-brand); text-decoration: none;">SearchFilter.vue</a>
                  </div>
                </div>
                <Chips 
                  :items="['fabric', 'forge', 'quilt', 'neoforge', 'liteloader']"
                  v-model="selectedLoader"
                  :capitalize="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Loader: <strong>{{ selectedLoader }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Categorization -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Categorization</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Category Selection</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">
                    Project creation: <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/project/create.vue" target="_blank" style="color: var(--color-brand); text-decoration: none;">project/create.vue</a>
                  </div>
                </div>
                <Chips 
                  :items="['technology', 'adventure', 'magic', 'decoration', 'utility', 'library']"
                  v-model="selectedCategory"
                  :capitalize="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Category: <strong>{{ selectedCategory }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Environment Support</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">
                    Version creation: <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/[type]/[id]/version/create.vue" target="_blank" style="color: var(--color-brand); text-decoration: none;">version/create.vue</a>
                  </div>
                </div>
                <Chips 
                  :items="['client', 'server', 'both']"
                  v-model="selectedEnvironment"
                  :capitalize="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Environment: <strong>{{ selectedEnvironment }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Version & Compatibility -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Version & Compatibility</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Minecraft Version</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">
                    Version compatibility: <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/components/ui/search/SearchFilter.vue" target="_blank" style="color: var(--color-brand); text-decoration: none;">SearchFilter.vue</a>
                  </div>
                </div>
                <Chips 
                  :items="['1.20.1', '1.19.4', '1.18.2', '1.16.5', '1.12.2']"
                  v-model="selectedVersion"
                  :never-empty="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Version: <strong>{{ selectedVersion }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">License Type</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">
                    Project settings: <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/[type]/[id]/settings/index.vue" target="_blank" style="color: var(--color-brand); text-decoration: none;">settings/index.vue</a>
                  </div>
                </div>
                <Chips 
                  :items="['mit', 'apache-2.0', 'gpl-3.0', 'bsd-3-clause', 'cc0-1.0']"
                  v-model="selectedLicense"
                  :capitalize="false"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  License: <strong>{{ selectedLicense }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Admin & Moderation -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Admin & Moderation</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Project Status</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">
                    Moderation dashboard: <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/moderation/index.vue" target="_blank" style="color: var(--color-brand); text-decoration: none;">moderation/index.vue</a>
                  </div>
                </div>
                <Chips 
                  :items="['approved', 'archived', 'rejected', 'draft', 'withheld']"
                  v-model="selectedStatus"
                  :capitalize="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Status: <strong>{{ selectedStatus }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Sort Options</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">
                    Search results: <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/search/[[query]].vue" target="_blank" style="color: var(--color-brand); text-decoration: none;">search/[[query]].vue</a>
                  </div>
                </div>
                <Chips 
                  :items="['relevance', 'downloads', 'follows', 'newest', 'updated']"
                  v-model="selectedSort"
                  :capitalize="true"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Sorting: <strong>{{ selectedSort }}</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Real-world examples of Chips usage throughout the Modrinth platform including search filters, project categorization, version compatibility, and admin interfaces.',
            },
        },
    },
}

// 5. EDGE CASES STORY
export const EdgeCases: Story = {
    render: () => ({
        components: { Chips },
        setup() {
            const selectedEmpty = ref('')
            const selectedNull = ref(null)
            const selectedUndefined = ref(undefined)
            const selectedNumber = ref(42)
            const selectedBoolean = ref(true)
            const selectedSpecial = ref('test@email.com')
            const selectedEmoji = ref('🎮')
            const selectedLong = ref('Lorem ipsum dolor sit amet')

            const formatSpecial = (item: any) => {
                if (typeof item === 'number') return `#${item}`
                if (typeof item === 'boolean') return item ? '✓ Enabled' : '✗ Disabled'
                if (typeof item === 'string' && item.includes('@')) return `📧 ${item}`
                if (typeof item === 'string' && /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]/u.test(item)) return `Emoji: ${item}`
                return item
            }

            const handleError = (item: any) => {
                try {
                    return item?.toString() || 'Unknown'
                } catch (e) {
                    return 'Error'
                }
            }

            return {
                selectedEmpty,
                selectedNull,
                selectedUndefined,
                selectedNumber,
                selectedBoolean,
                selectedSpecial,
                selectedEmoji,
                selectedLong,
                formatSpecial,
                handleError
            }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Chips Edge Cases</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Empty & Null States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Empty & Null States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Empty Array</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">No items provided to component</div>
                </div>
                <Chips 
                  :items="[]"
                  v-model="selectedEmpty"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  State: <strong>{{ selectedEmpty || 'No items to select' }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Empty String Items</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Array contains empty strings</div>
                </div>
                <Chips 
                  :items="['', 'Valid', '', 'Another Valid', '']"
                  v-model="selectedEmpty"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selection: <strong>{{ selectedEmpty || 'Empty string selected' }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Null/Undefined Items</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Array contains null/undefined values</div>
                </div>
                <Chips 
                  :items="['Valid', null, 'Another', undefined, 'Last']"
                  v-model="selectedNull"
                  :format-label="handleError"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selection: <strong>{{ selectedNull || 'Null/undefined handled' }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Data Type Edge Cases -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Data Type Edge Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Number Items</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Numeric values as items</div>
                </div>
                <Chips 
                  :items="[0, 1, 42, -1, 3.14159, Infinity]"
                  v-model="selectedNumber"
                  :format-label="formatSpecial"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedNumber }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Boolean Items</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">True/false values as items</div>
                </div>
                <Chips 
                  :items="[true, false]"
                  v-model="selectedBoolean"
                  :format-label="formatSpecial"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedBoolean }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Mixed Type Items</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Different data types together</div>
                </div>
                <Chips 
                  :items="['String', 123, true, null, 'Another String']"
                  v-model="selectedSpecial"
                  :format-label="handleError"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedSpecial }}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Special Characters & Content -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Special Characters & Content</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Special Characters</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Symbols, punctuation, and special chars</div>
                </div>
                <Chips 
                  :items="['test@email.com', '<script>', '& ampersand', 'quotes\"test\"', 'http://url.com']"
                  v-model="selectedSpecial"
                  :format-label="formatSpecial"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedSpecial }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Unicode & Emojis</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">International characters and emojis</div>
                </div>
                <Chips 
                  :items="['🎮', '🎯', '🚀', '中文', 'العربية', 'русский', 'हिन्दी']"
                  v-model="selectedEmoji"
                  :format-label="formatSpecial"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedEmoji }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Whitespace Variations</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Different types of whitespace</div>
                </div>
                <Chips 
                  :items="[' leading space', 'trailing space ', '  double  spaces  ', 'tab	character', 'newline\\ncharacter']"
                  v-model="selectedSpecial"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>"{{ selectedSpecial }}"</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Extreme Length Cases -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Extreme Length Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Single Character Items</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Minimal character content</div>
                </div>
                <Chips 
                  :items="['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T']"
                  v-model="selectedSpecial"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedSpecial }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Very Long Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Extremely long item labels</div>
                </div>
                <Chips 
                  :items="[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                    'Short',
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure',
                    'Medium length option',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                  ]"
                  v-model="selectedLong"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedLong.substring(0, 50) }}{{ selectedLong.length > 50 ? '...' : '' }}</strong>
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Many Items (Performance)</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Large number of items</div>
                </div>
                <Chips 
                  :items="Array.from({ length: 50 }, (_, i) => \`Option \${i + 1}\`)"
                  v-model="selectedSpecial"
                />
                <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--color-secondary);">
                  Selected: <strong>{{ selectedSpecial }}</strong> (50 total items)
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Edge cases and stress testing for the Chips component including empty states, mixed data types, special characters, Unicode content, and extreme length scenarios.',
            },
        },
    },
} 