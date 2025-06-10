import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SimpleBadge from './SimpleBadge.vue'
import { CheckIcon, XIcon, StarIcon } from '@modrinth/assets'

const meta: Meta<typeof SimpleBadge> = {
    title: 'Foundation/Data Display/SimpleBadge',
    component: SimpleBadge,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to display simple text badges with optional icons and colors throughout the application.

\`\`\`vue
<SimpleBadge 
  :icon="CheckIcon"
  formatted-name="Approved"
  color="green"
/>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        icon: {
            control: 'select',
            options: [undefined, 'CheckIcon', 'XIcon', 'StarIcon'],
            mapping: {
                CheckIcon,
                XIcon,
                StarIcon,
            },
            description: 'Optional icon component to display',
            table: { category: 'Content' },
        },
        formattedName: {
            control: 'text',
            description: 'The text content of the badge',
            table: { category: 'Content' },
        },
        color: {
            control: 'select',
            options: [undefined, 'brand', 'green', 'blue', 'purple', 'orange', 'red'],
            description: 'Color variant for the badge',
            table: { category: 'Appearance' },
        },
    },
    args: {
        formattedName: 'Example Badge',
        color: 'brand',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { SimpleBadge },
        setup() {
            return { args }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <SimpleBadge v-bind="args" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Use the controls panel to experiment with different icons, text, and color variants.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with SimpleBadge properties.',
            },
        },
    },
}

// 2. ALL VARIANTS STORY
export const AllVariants: Story = {
    render: () => ({
        components: { SimpleBadge },
        setup() {
            return { CheckIcon, XIcon, StarIcon }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All SimpleBadge Variants</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Color Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Color Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Brand Badge" color="brand" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Brand</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Primary brand color</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Success Badge" color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Green</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Success and positive states</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Info Badge" color="blue" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Blue</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Information and neutral states</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Special Badge" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Purple</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Special features and highlights</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Warning Badge" color="orange" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Orange</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Warnings and caution states</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Error Badge" color="red" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Red</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Errors and critical states</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Icon Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Icon Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="No Icon" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Text Only</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Simple text badge without icon</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="CheckIcon" formatted-name="Approved" color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Check Icon</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Success and approval states</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="XIcon" formatted-name="Rejected" color="red" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">X Icon</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Rejection and error states</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="StarIcon" formatted-name="Featured" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Star Icon</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Special and featured content</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Text Length Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Text Length Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="OK" color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Short Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Minimal text content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Standard Badge" color="blue" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Medium Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Typical badge text length</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Very Long Badge Text Content" color="orange" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Long Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Extended text content</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Combined Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Combined Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="CheckIcon" formatted-name="✓" color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Icon + Symbol</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Icon with symbolic text</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="StarIcon" formatted-name="Premium Feature Available" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Icon + Long Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Icon with extended description</div>
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
                story: 'Comprehensive showcase of all SimpleBadge variants including color options, icon combinations, text lengths, and combined variations.',
            },
        },
    },
}

// 3. ALL STATES STORY
export const AllStates: Story = {
    render: () => ({
        components: { SimpleBadge },
        setup() {
            return { CheckIcon, XIcon, StarIcon }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All SimpleBadge States</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Background Context States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Background Context States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Normal Context" color="blue" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Normal Background</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Standard background context</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Raised Context" color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Raised Background</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Elevated surface context</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-button-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Button Context" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Button Background</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Interactive element context</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Semantic States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Semantic States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="CheckIcon" formatted-name="Success" color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Success State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Positive outcome indication</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Warning" color="orange" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Warning State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Caution and attention needed</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="XIcon" formatted-name="Error" color="red" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Error State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Critical issue indication</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Info" color="blue" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Info State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Neutral information display</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contrast States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Contrast States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: #ffffff; border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Light Background" color="brand" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Light Context</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">High contrast on light</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: #1a1a1a; border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Dark Background" color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: #ffffff; margin-bottom: 0.25rem;">Dark Context</div>
                  <div style="font-size: 0.75rem; color: #cccccc;">High contrast on dark</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%); background-size: 20px 20px; background-position: 0 0, 0 10px, 10px -10px, -10px 0px; border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Pattern Background" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Pattern Context</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Complex background pattern</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Size Context States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Size Context States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <SimpleBadge formatted-name="Compact" color="blue" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">in tight spaces</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Compact Layout</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Limited space context</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 2rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <SimpleBadge formatted-name="Spacious" color="green" />
                  <span style="font-size: 0.875rem; color: var(--color-secondary);">with plenty of room</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Spacious Layout</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Generous space context</div>
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
                story: 'Demonstration of SimpleBadge in different visual states including background contexts, semantic meanings, contrast scenarios, and size contexts.',
            },
        },
    },
}

// 4. REAL WORLD USAGE STORY
export const RealWorldUsage: Story = {
    render: () => ({
        components: { SimpleBadge },
        setup() {
            return { CheckIcon, XIcon, StarIcon }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real World Usage Examples</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 2.5rem;">
          
          <!-- Project Cards -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Cards</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                  <div style="width: 40px; height: 40px; border-radius: 0.5rem; background: var(--color-brand); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">
                    M
                  </div>
                  <div style="flex: 1;">
                    <h4 style="margin: 0; color: var(--color-base); font-size: 0.875rem;">Minecraft Mod</h4>
                    <p style="margin: 0; color: var(--color-secondary); font-size: 0.75rem;">by ModAuthor</p>
                  </div>
                  <SimpleBadge formatted-name="Approved" color="green" />
                </div>
                <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
                  Used in <a href="https://github.com/modrinth/code/blob/main/packages/ui/src/components/base/ProjectCard.vue#L24" target="_blank" style="color: var(--color-brand);">ProjectCard.vue</a> to show project status
                </p>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                  <div style="width: 40px; height: 40px; border-radius: 0.5rem; background: var(--color-orange); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">
                    R
                  </div>
                  <div style="flex: 1;">
                    <h4 style="margin: 0; color: var(--color-base); font-size: 0.875rem;">Resource Pack</h4>
                    <p style="margin: 0; color: var(--color-secondary); font-size: 0.75rem;">by PackCreator</p>
                  </div>
                  <SimpleBadge formatted-name="Processing" color="orange" />
                </div>
                <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
                  Status badges for project approval workflow
                </p>
              </div>
            </div>
            <div style="text-align: right; margin-top: 1rem;">
              <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Project Status Display</div>
              <div style="font-size: 0.75rem; color: var(--color-secondary);">Status indication in project listings</div>
            </div>
          </div>

          <!-- Search Categories -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Search Categories</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 0.75rem;">
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--color-base); font-size: 0.875rem;">Category Tags</h4>
                  <div style="display: flex; flex-wrap: gap: 0.5rem;">
                    <SimpleBadge :icon="StarIcon" formatted-name="Adventure" color="purple" />
                    <SimpleBadge formatted-name="Technology" color="blue" />
                    <SimpleBadge formatted-name="Magic" color="brand" />
                  </div>
                </div>
                <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
                  Used in <a href="https://github.com/modrinth/code/blob/main/packages/ui/src/components/search/Categories.vue" target="_blank" style="color: var(--color-brand);">Categories.vue</a> for search filtering
                </p>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 0.75rem;">
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--color-base); font-size: 0.875rem;">Loader Tags</h4>
                  <div style="display: flex; flex-wrap: gap: 0.5rem;">
                    <SimpleBadge formatted-name="Fabric" color="green" />
                    <SimpleBadge formatted-name="Forge" color="orange" />
                    <SimpleBadge formatted-name="Quilt" color="purple" />
                  </div>
                </div>
                <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
                  Mod loader compatibility indicators
                </p>
              </div>
            </div>
            <div style="text-align: right; margin-top: 1rem;">
              <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Category Display</div>
              <div style="font-size: 0.75rem; color: var(--color-secondary);">Search and filter categorization</div>
            </div>
          </div>

          <!-- User Profile Badges -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">User Profile Badges</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-brand); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">
                    JD
                  </div>
                  <div style="flex: 1;">
                    <div style="font-weight: 600; margin-bottom: 0.25rem; color: var(--color-base);">John Developer</div>
                    <div style="display: flex; gap: 0.5rem;">
                      <SimpleBadge :icon="CheckIcon" formatted-name="Verified" color="green" />
                      <SimpleBadge :icon="StarIcon" formatted-name="Creator" color="purple" />
                    </div>
                  </div>
                </div>
                <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
                  User verification and role indicators
                </p>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-orange); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">
                    AM
                  </div>
                  <div style="flex: 1;">
                    <div style="font-weight: 600; margin-bottom: 0.25rem; color: var(--color-base);">Alice Moderator</div>
                    <div style="display: flex; gap: 0.5rem;">
                      <SimpleBadge formatted-name="Staff" color="brand" />
                      <SimpleBadge formatted-name="Moderator" color="orange" />
                    </div>
                  </div>
                </div>
                <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
                  Staff and moderation role badges
                </p>
              </div>
            </div>
            <div style="text-align: right; margin-top: 1rem;">
              <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">User Roles</div>
              <div style="font-size: 0.75rem; color: var(--color-secondary);">Profile status and permissions</div>
            </div>
          </div>

          <!-- Content Metadata -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Content Metadata</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 0.75rem;">
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--color-base); font-size: 0.875rem;">Version Information</h4>
                  <div style="display: flex; flex-wrap: gap: 0.5rem;">
                    <SimpleBadge formatted-name="1.20.1" color="green" />
                    <SimpleBadge formatted-name="1.19.4" color="blue" />
                    <SimpleBadge formatted-name="Beta" color="orange" />
                  </div>
                </div>
                <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
                  Minecraft version compatibility tags
                </p>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 0.75rem;">
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--color-base); font-size: 0.875rem;">Content Type</h4>
                  <div style="display: flex; flex-wrap: gap: 0.5rem;">
                    <SimpleBadge formatted-name="Client-side" color="blue" />
                    <SimpleBadge formatted-name="Server-side" color="green" />
                    <SimpleBadge formatted-name="Optional" color="purple" />
                  </div>
                </div>
                <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
                  Environment and dependency indicators
                </p>
              </div>
            </div>
            <div style="text-align: right; margin-top: 1rem;">
              <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Content Tags</div>
              <div style="font-size: 0.75rem; color: var(--color-secondary);">Metadata and compatibility info</div>
            </div>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Real-world usage examples showing how SimpleBadge is used throughout the Modrinth application for project status, search categories, user roles, and content metadata with links to actual implementation.',
            },
        },
    },
}

// 5. EDGE CASES STORY
export const EdgeCases: Story = {
    render: () => ({
        components: { SimpleBadge },
        setup() {
            return { CheckIcon, XIcon, StarIcon }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Edge Cases & Boundary Conditions</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Empty and Minimal Content -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Empty and Minimal Content</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="" color="blue" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Empty Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Badge with no text content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name=" " color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Whitespace Only</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Badge with only whitespace</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="•" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Single Character</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Minimal single character content</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Special Characters and Unicode -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Special Characters and Unicode</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="🎮 Gaming" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Emoji Content</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Unicode emoji characters</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Café & Résumé" color="orange" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Accented Characters</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">International character support</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="<script>alert('xss')</script>" color="red" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">HTML/Script Content</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Potentially dangerous content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="日本語テキスト" color="blue" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Non-Latin Script</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Japanese character support</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Extreme Length Variations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Extreme Length Variations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="This is an extremely long badge text that might cause layout issues in some contexts and should be handled gracefully by the component" color="orange" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Very Long Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Extreme length content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Supercalifragilisticexpialidocious" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Single Long Word</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">No word breaks available</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Word-with-many-hyphens-that-might-break-differently" color="blue" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Hyphenated Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Multiple break opportunities</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Accessibility and Contrast -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Accessibility and Contrast</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Screen Reader Text" color="green" style="outline: 2px solid var(--color-brand); outline-offset: 2px;" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Focus Outline</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Keyboard navigation support</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="High Contrast" color="red" style="filter: contrast(1.5);" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">High Contrast Mode</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Enhanced visibility</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="ARIA Label" color="blue" aria-label="This badge has an ARIA label for screen readers" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">ARIA Support</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Screen reader enhancement</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Invalid Color Combinations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Invalid Color Combinations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Invalid Color" color="invalid-color" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Invalid Color</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Fallback to default styling</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge formatted-name="Undefined Color" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">No Color Prop</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Default color behavior</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="CheckIcon" formatted-name="Icon Only Test" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Icon Without Color</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Icon with default styling</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Complex Icon Scenarios -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Complex Icon Scenarios</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="null" formatted-name="Null Icon" color="blue" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Null Icon</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Explicit null icon value</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="undefined" formatted-name="Undefined Icon" color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Undefined Icon</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Undefined icon property</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SimpleBadge :icon="CheckIcon" formatted-name="" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Icon Only</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Icon with empty text</div>
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
                story: 'Edge cases and boundary conditions for SimpleBadge including empty content, special characters, extreme lengths, accessibility considerations, invalid props, and complex icon scenarios.',
            },
        },
    },
} 