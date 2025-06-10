import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Button from './Button.vue'
import { DownloadIcon, HeartIcon, ShareIcon, ExternalIcon, PlusIcon, TrashIcon, EditIcon } from '@modrinth/assets'
import {
    createStoryParameters,
    createSelectArgType,
    createBooleanArgType,
    createTextArgType,
    commonA11yConfig,
    createStoryContainer,
    createSection,
    createPlaygroundContainer,
    createGrid,
    cardStyle,
} from './story-utils'

// ===== META CONFIGURATION =====
const meta: Meta<typeof Button> = {
    title: 'Foundation/Actions/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
## Example usage

This component is used in [version pages](https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/%5Btype%5D/%5Bid%5D/version/%5Bversion%5D.vue#L144) for download and action buttons, and in [navigation menus](https://github.com/modrinth/code/blob/main/packages/ui/src/components/base/OverflowMenu.vue#L25) for menu items.

\`\`\`vue
<Button color="brand" :link="primaryFile.url">
  <DownloadIcon />
  Download
</Button>
<Button :action="reportVersion" color="danger">
  <ReportIcon />
  Report
</Button>
\`\`\`
                `,
            },
        },
        ...commonA11yConfig,
    },
    argTypes: {
        // ===== CONTENT =====
        default: {
            control: 'text',
            description: 'Button text content',
            table: {
                category: 'Content',
                type: { summary: 'string | slot' },
            },
        },

        // ===== APPEARANCE =====
        color: createSelectArgType(
            ['default', 'primary', 'secondary', 'danger', 'highlight', 'red', 'orange', 'green', 'blue', 'purple', 'gray'],
            'Visual style variant that conveys meaning and hierarchy',
            'Appearance',
            'default'
        ),
        large: createBooleanArgType(
            'Larger size for prominent actions',
            'Appearance',
            false
        ),
        iconOnly: createBooleanArgType(
            'Optimized spacing for icon-only buttons',
            'Appearance',
            false
        ),
        outline: createBooleanArgType(
            'Outlined style with transparent background',
            'Appearance',
            false
        ),
        transparent: createBooleanArgType(
            'Minimal style with no background',
            'Appearance',
            false
        ),
        hoverFilled: createBooleanArgType(
            'Shows filled background on hover',
            'Appearance',
            false
        ),

        // ===== BEHAVIOR =====
        disabled: createBooleanArgType(
            'Disables interaction and applies disabled styling',
            'Behavior',
            false
        ),

        // ===== INTERACTION =====
        action: {
            control: false,
            description: 'Click handler function',
            table: {
                category: 'Interaction',
                type: { summary: '() => void' },
            },
        },

        // ===== NAVIGATION =====
        link: createTextArgType(
            'URL or route path for navigation',
            'Navigation'
        ),
        external: createBooleanArgType(
            'Opens link in new tab with security attributes',
            'Navigation',
            false
        ),
    },
    args: {
        default: 'Button',
        color: 'default',
        large: false,
        iconOnly: false,
        outline: false,
        transparent: false,
        hoverFilled: false,
        external: false,
        disabled: false,
        action: () => console.log('Button clicked'),
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ===== STORY DEFINITIONS =====

// 1. PLAYGROUND STORY (Always first)
export const Playground: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: createPlaygroundContainer(
            '<Button v-bind="args">{{ args.default }}</Button>',
            'Use the controls panel to experiment with different button properties. This interactive playground lets you test all combinations of colors, styles, sizes, and states.'
        ),
    }),
    parameters: createStoryParameters(
        'Interactive playground for experimenting with all button properties and combinations.',
        'fullscreen'
    ),
}

// 2. ALL COLOR VARIANTS
export const AllVariants: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <!-- Primary Actions -->
        <div style="margin-bottom: 3rem;">
          <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Color Variants</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
            
            <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
              <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Default & Primary</h3>
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="default">Default</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Default</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Standard actions and neutral interactions</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="primary">Primary</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Primary</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Main call-to-action buttons</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="secondary">Secondary</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Secondary</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Supporting and alternative actions</div>
                  </div>
                </div>
              </div>
            </div>

            <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
              <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Special Actions</h3>
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="danger">Danger</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Danger</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Destructive actions (delete, remove)</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="highlight">Highlight</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Highlight</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Featured content and promotions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Semantic Colors -->
        <div style="margin-bottom: 3rem;">
          <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Semantic Colors</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
            
            <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
              <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Success & Information</h3>
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="green">Green</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Green</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Success states, confirmations</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="blue">Blue</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Blue</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Information, links, neutral actions</div>
                  </div>
                </div>
              </div>
            </div>

            <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
              <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Warnings & Alerts</h3>
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="orange">Orange</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Orange</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Warnings, pending states</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="red">Red</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Red</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Critical alerts, errors</div>
                  </div>
                </div>
              </div>
            </div>

            <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
              <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Special & Neutral</h3>
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="purple">Purple</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Purple</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Special features, premium content</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="gray">Gray</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Gray</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Neutral, disabled-like actions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Style Variants -->
        <div style="margin-bottom: 3rem;">
          <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Style Variants</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
            
            <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
              <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Filled vs Outline</h3>
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="primary">Filled</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Filled (Default)</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">High visual prominence with solid backgrounds</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="primary" outline>Outline</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Outline</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Less prominent with clear boundaries</div>
                  </div>
                </div>
              </div>
            </div>

            <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
              <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Minimal Styles</h3>
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="primary" transparent>Transparent</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Transparent</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Minimal style with no background</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <Button color="primary" hoverFilled>Hover Filled</Button>
                  <div style="text-align: right; flex: 1; margin-left: 1rem;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Hover Filled</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Fills background on hover</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    }),
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'All available color and style variants organized by purpose with semantic meanings and recommended use cases.',
            },
        },
    },
}

// 3. SIZE VARIANTS
export const SizeVariants: Story = {
    render: () => ({
        components: { Button, PlusIcon, EditIcon, TrashIcon, ShareIcon },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Size Variants</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Standard vs Large</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary">Standard Button</Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Standard Size</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Default size for most interface actions</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary" large>Large Button</Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Large Size</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Prominent call-to-action buttons</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Icon Only Buttons</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.5rem;">
                  <Button color="primary" iconOnly><PlusIcon /></Button>
                  <Button color="secondary" iconOnly><EditIcon /></Button>
                  <Button color="danger" iconOnly><TrashIcon /></Button>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Standard Icon Only</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Compact buttons for toolbars</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.5rem;">
                  <Button color="primary" iconOnly large><PlusIcon /></Button>
                  <Button color="secondary" iconOnly large><EditIcon /></Button>
                  <Button color="danger" iconOnly large><TrashIcon /></Button>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Large Icon Only</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Better target size for touch interfaces</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    }),
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'Size variants showing how buttons adapt to different interface needs and prominence levels.',
            },
        },
    },
}

// 4. ALL STATES
export const AllStates: Story = {
    render: () => ({
        components: { Button, PlusIcon },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Button States</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Interactive States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary">Default</Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Default State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Ready for interaction</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary" style="background-color: var(--color-button-primary-hover);">Hover</Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Hover State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Visual feedback on hover</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary" style="outline: 2px solid var(--color-accent-primary); outline-offset: 2px;">Focus</Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Focus State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Keyboard focus indicator</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Disabled & Loading</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary" disabled>Disabled</Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Disabled State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Temporarily unavailable</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary" disabled>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div style="width: 1rem; height: 1rem; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                    Loading...
                  </div>
                </Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Loading State</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Processing user action</div>
                </div>
              </div>
            </div>
        </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">With Icons</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary">
                  <PlusIcon style="margin-right: 0.5rem;" />
                  Create Project
                </Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Icon + Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Icons reinforce action meaning</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="secondary">
                  <EditIcon style="margin-right: 0.5rem;" />
                  Edit Settings
                </Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Secondary Actions</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Supporting actions with icons</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="danger">
                  <TrashIcon style="margin-right: 0.5rem;" />
                  Delete Item
                </Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Destructive Actions</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Clear visual warning with icons</div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    `,
    }),
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'All interaction states showing how buttons respond to user interaction and system conditions.',
            },
        },
    },
}

// 5. REAL-WORLD USAGE
export const RealWorldUsage: Story = {
    render: () => ({
        components: { Button, DownloadIcon, ExternalIcon, TrashIcon, EditIcon, PlusIcon, HeartIcon, ShareIcon },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real-World Usage</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Actions</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
                  <Button color="primary" large>
                    <DownloadIcon style="margin-right: 0.5rem;" />
                    Download
                  </Button>
                  <Button color="secondary">
                    <HeartIcon style="margin-right: 0.5rem;" />
                    Favorite
                  </Button>
                  <Button color="default" outline>
                    <ShareIcon style="margin-right: 0.5rem;" />
                    Share
                  </Button>
                  <Button color="default" transparent>Report</Button>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Action Hierarchy</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Primary download with supporting actions</div>
                </div>
              </div>
            </div>
        </div>
        
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Form Actions</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap;">
                  <Button color="default" outline>Cancel</Button>
                  <Button color="secondary">Save Draft</Button>
                  <Button color="primary">Publish Project</Button>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Form Pattern</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Cancel left, primary action right</div>
                </div>
              </div>
            </div>
        </div>
        
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Navigation</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary" link="/projects">Browse Projects</Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Primary Navigation</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Main navigation links</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="secondary" link="/docs" external>
                  Documentation
                  <ExternalIcon style="margin-left: 0.5rem;" />
                </Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">External Links</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Links with external indicators</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="default" link="/settings">Settings</Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Secondary Navigation</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Settings and configuration</div>
                </div>
              </div>
            </div>
        </div>
        
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Management Actions</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.5rem;">
                  <Button color="primary" iconOnly aria-label="Add new item">
                    <PlusIcon />
                  </Button>
                  <Button color="default" iconOnly aria-label="Edit item">
                    <EditIcon />
                  </Button>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Icon Actions</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Compact toolbar buttons</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="danger" outline>
                  <TrashIcon style="margin-right: 0.5rem;" />
                  Delete Project
                </Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Destructive Actions</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Dangerous operations with clear warnings</div>
                </div>
              </div>
            </div>
        </div>
        
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); grid-column: 1 / -1;">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Button Groups & Edge Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0; border-radius: 0.375rem; overflow: hidden; width: fit-content; border: 1px solid var(--color-divider);">
                  <Button color="default" style="border-radius: 0; border: none; border-right: 1px solid var(--color-divider);">All</Button>
                  <Button color="primary" style="border-radius: 0; border: none; border-right: 1px solid var(--color-divider);">Mods</Button>
                  <Button color="default" style="border-radius: 0; border: none; border-right: 1px solid var(--color-divider);">Plugins</Button>
                  <Button color="default" style="border-radius: 0; border: none;">Resource Packs</Button>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Segmented Control</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Connected buttons for filtering and selection</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  <Button color="primary">Primary Action</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="default" outline>Tertiary</Button>
                  <Button color="default" transparent>Quaternary</Button>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Action Hierarchy</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Visual hierarchy from primary to quaternary actions</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary" style="max-width: 200px;">Very long button text that wraps</Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Long Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Buttons with text that wraps to multiple lines</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="secondary" iconOnly></Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Empty Icon Button</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Icon-only button without content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Button color="primary">
                  <DownloadIcon style="margin-right: 0.5rem;" />
                  Download
                  <ExternalIcon style="margin-left: 0.5rem;" />
                </Button>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Multiple Icons</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Button with icons on both sides</div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    `,
    }),
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'Real-world usage patterns showing buttons in context: project interfaces, forms, navigation, management, grouped actions, and edge cases.',
            },
        },
    },
}

