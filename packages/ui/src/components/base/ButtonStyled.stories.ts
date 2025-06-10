import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ButtonStyled from './ButtonStyled.vue'
import { PlusIcon, PlayIcon, StopCircleIcon, SettingsIcon, DownloadIcon, TrashIcon } from '@modrinth/assets'

const meta: Meta<typeof ButtonStyled> = {
  title: 'Foundation/Actions/ButtonStyled',
  component: ButtonStyled,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Example usage

This component is used throughout the app to style button elements with consistent visual design. It's used in [instance management](https://github.com/modrinth/code/blob/main/apps/app-frontend/src/pages/instance/Index.vue#L33) for play/stop actions, [project pages](https://github.com/modrinth/code/blob/main/apps/app-frontend/src/pages/project/Index.vue#L35) for download buttons, and [modals](https://github.com/modrinth/code/blob/main/packages/ui/src/components/modal/ConfirmModal.vue#L34) for action buttons.

\`\`\`vue
<ButtonStyled size="large" color="brand">
  <button>Download</button>
</ButtonStyled>
<ButtonStyled circular type="transparent">
  <button><SettingsIcon /></button>
</ButtonStyled>
\`\`\`
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'button-name',
            enabled: true,
          },
          {
            id: 'focus-visible',
            enabled: true,
          },
        ],
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['standard', 'brand', 'red', 'orange', 'green', 'blue', 'purple'],
      description: 'Color theme for the button',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'standard', 'large'],
      description: 'Size variant of the button',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
    type: {
      control: 'select',
      options: ['standard', 'outlined', 'transparent', 'highlight', 'highlight-colored-text'],
      description: 'Visual style type of the button',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
    circular: {
      control: 'boolean',
      description: 'Makes the button circular (typically for icon-only buttons)',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    colorFill: {
      control: 'select',
      options: ['auto', 'background', 'text', 'none'],
      description: 'How color is applied to the button',
      table: {
        category: 'Styling',
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    hoverColorFill: {
      control: 'select',
      options: ['auto', 'background', 'text', 'none'],
      description: 'How color is applied on hover',
      table: {
        category: 'Styling',
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    highlighted: {
      control: 'boolean',
      description: 'Whether the button is in a highlighted state',
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    highlightedStyle: {
      control: 'select',
      options: ['main-nav-primary', 'main-nav-secondary'],
      description: 'Style variant when highlighted',
      table: {
        category: 'State',
        type: { summary: 'string' },
        defaultValue: { summary: 'main-nav-primary' },
      },
    },
  },
  args: {
    color: 'standard',
    size: 'standard',
    type: 'standard',
    circular: false,
    colorFill: 'auto',
    hoverColorFill: 'auto',
    highlighted: false,
    highlightedStyle: 'main-nav-primary',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ===== HELPER FUNCTIONS =====
const colorVariants = [
  { color: 'standard', description: 'Default neutral styling' },
  { color: 'brand', description: 'Primary brand color' },
  { color: 'red', description: 'Destructive actions' },
  { color: 'orange', description: 'Warning actions' },
  { color: 'green', description: 'Success actions' },
  { color: 'blue', description: 'Information actions' },
  { color: 'purple', description: 'Special actions' },
]

const sizeVariants = [
  { size: 'small', description: 'Compact buttons for tight spaces' },
  { size: 'standard', description: 'Default button size' },
  { size: 'large', description: 'Prominent call-to-action buttons' },
]

const typeVariants = [
  { type: 'standard', description: 'Filled button with background' },
  { type: 'outlined', description: 'Button with border only' },
  { type: 'transparent', description: 'Text-only button' },
  { type: 'highlight', description: 'High-contrast highlighted button' },
  { type: 'highlight-colored-text', description: 'Highlighted with colored text' },
]

// 1. PLAYGROUND STORY
export const Playground: Story = {
  render: (args) => ({
    components: { ButtonStyled, PlusIcon },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <ButtonStyled v-bind="args">
              <button>
                <PlusIcon v-if="args.circular" />
                <template v-else>
                  <PlusIcon />
                  Button Text
                </template>
              </button>
            </ButtonStyled>
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Use the controls panel to experiment with different button styles, colors, and sizes. The ButtonStyled component wraps button elements to provide consistent styling.
          </p>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for experimenting with all ButtonStyled variants and configurations.',
      },
    },
  },
}

// 2. ALL VARIANTS STORY
export const AllVariants: Story = {
  render: () => ({
    components: { ButtonStyled, PlusIcon, PlayIcon, DownloadIcon, SettingsIcon },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All ButtonStyled Variants</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Color Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Color Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div v-for="variant in colorVariants" :key="variant.color" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled :color="variant.color">
                  <button>
                    <DownloadIcon />
                    {{ variant.color.charAt(0).toUpperCase() + variant.color.slice(1) }}
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">{{ variant.color }}</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">{{ variant.description }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Size Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Size Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div v-for="variant in sizeVariants" :key="variant.size" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled :size="variant.size" color="brand">
                  <button>
                    <PlayIcon />
                    {{ variant.size.charAt(0).toUpperCase() + variant.size.slice(1) }}
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">{{ variant.size }}</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">{{ variant.description }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Type Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Type Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div v-for="variant in typeVariants" :key="variant.type" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled :type="variant.type" color="brand">
                  <button>
                    <SettingsIcon />
                    {{ variant.type.charAt(0).toUpperCase() + variant.type.slice(1) }}
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">{{ variant.type }}</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">{{ variant.description }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Special Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Special Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled circular color="brand">
                  <button><PlusIcon /></button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Circular</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Icon-only circular button</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled highlighted color="brand">
                  <button>
                    <PlayIcon />
                    Highlighted
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Highlighted</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Button in highlighted state</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `,
    data() {
      return {
        colorVariants,
        sizeVariants,
        typeVariants,
      }
    },
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all ButtonStyled visual variants organized by category. Used in [instance management](https://github.com/modrinth/code/blob/main/apps/app-frontend/src/pages/instance/Index.vue#L33) and [project pages](https://github.com/modrinth/code/blob/main/apps/app-frontend/src/pages/project/Index.vue#L35).',
      },
    },
  },
}

// 3. ALL STATES STORY
export const AllStates: Story = {
  render: () => ({
    components: { ButtonStyled, PlayIcon, StopCircleIcon, SettingsIcon },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All ButtonStyled States</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Interactive States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Interactive States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand">
                  <button>
                    <PlayIcon />
                    Normal
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Normal</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Default button state</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand">
                  <button style="filter: brightness(1.1);">
                    <PlayIcon />
                    Hover
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Hover</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Button on hover (simulated)</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand">
                  <button style="outline: 2px solid var(--color-brand); outline-offset: 2px;">
                    <PlayIcon />
                    Focused
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Focused</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Button with keyboard focus (simulated)</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand">
                  <button disabled style="opacity: 0.5; cursor: not-allowed;">
                    <StopCircleIcon />
                    Disabled
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Disabled</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Button in disabled state</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Highlighted States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Highlighted States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled highlighted color="brand">
                  <button>
                    <SettingsIcon />
                    Primary Highlight
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Primary Highlight</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Main navigation primary style</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled highlighted highlightedStyle="main-nav-secondary" color="brand">
                  <button>
                    <SettingsIcon />
                    Secondary Highlight
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Secondary Highlight</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Main navigation secondary style</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Color Fill States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Color Fill States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand" colorFill="auto">
                  <button>
                    <PlayIcon />
                    Auto Fill
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Auto Fill</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Automatic color application</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand" colorFill="background">
                  <button>
                    <PlayIcon />
                    Background Fill
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Background Fill</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Color applied to background</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand" colorFill="text" type="outlined">
                  <button>
                    <PlayIcon />
                    Text Fill
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Text Fill</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Color applied to text only</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand" colorFill="none" type="outlined">
                  <button>
                    <PlayIcon />
                    No Fill
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">No Fill</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">No color application</div>
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
        story: 'Demonstration of all ButtonStyled interaction and display states including hover, focus, disabled, highlighted, and color fill variations. Essential for understanding button behavior in different contexts.',
      },
    },
  },
}

// 4. REAL WORLD USAGE STORY
export const RealWorldUsage: Story = {
  render: () => ({
    components: { ButtonStyled, PlayIcon, StopCircleIcon, DownloadIcon, TrashIcon, SettingsIcon },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real World Usage Examples</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Instance Management -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Instance Management</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.75rem;">
                  <ButtonStyled size="large" color="green">
                    <button>
                      <PlayIcon />
                      Play
                    </button>
                  </ButtonStyled>
                  <ButtonStyled size="large" color="red">
                    <button>
                      <StopCircleIcon />
                      Stop
                    </button>
                  </ButtonStyled>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Play/Stop Actions</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">
                    <a href="https://github.com/modrinth/code/blob/main/apps/app-frontend/src/pages/instance/Index.vue#L33" target="_blank" style="color: var(--color-brand);">Instance.vue#L33</a>
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled circular color="standard" type="transparent">
                  <button>
                    <SettingsIcon />
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Settings Button</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Circular icon-only settings access</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Pages -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Pages</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled size="large" color="brand">
                  <button>
                    <DownloadIcon />
                    Download
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Primary Download</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">
                    <a href="https://github.com/modrinth/code/blob/main/apps/app-frontend/src/pages/project/Index.vue#L35" target="_blank" style="color: var(--color-brand);">Project/Index.vue#L35</a>
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled type="outlined" color="standard">
                  <button>
                    View on GitHub
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Secondary Action</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Outlined style for secondary actions</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Actions -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Modal Actions</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.75rem;">
                  <ButtonStyled type="transparent" color="standard">
                    <button>Cancel</button>
                  </ButtonStyled>
                  <ButtonStyled color="red">
                    <button>
                      <TrashIcon />
                      Delete
                    </button>
                  </ButtonStyled>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Confirmation Modal</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">
                    <a href="https://github.com/modrinth/code/blob/main/packages/ui/src/components/modal/ConfirmModal.vue#L34" target="_blank" style="color: var(--color-brand);">ConfirmModal.vue#L34</a>
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.75rem;">
                  <ButtonStyled type="outlined" color="standard">
                    <button>Back</button>
                  </ButtonStyled>
                  <ButtonStyled color="brand">
                    <button>Continue</button>
                  </ButtonStyled>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Form Modal</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Standard form navigation pattern</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Highlights -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Navigation Highlights</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled highlighted color="brand" highlightedStyle="main-nav-primary">
                  <button>Active Tab</button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Primary Navigation</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Main navigation active state</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled highlighted color="brand" highlightedStyle="main-nav-secondary">
                  <button>Sub Tab</button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Secondary Navigation</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Sub-navigation active state</div>
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
        story: 'Real-world usage examples from the Modrinth codebase showing how ButtonStyled is used in different contexts like instance management, project pages, modals, and navigation. Each example links to the actual implementation in the codebase.',
      },
    },
  },
}

// 5. EDGE CASES STORY
export const EdgeCases: Story = {
  render: () => ({
    components: { ButtonStyled, PlusIcon, DownloadIcon },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Edge Cases & Boundary Conditions</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Text Length Variations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Text Length Variations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand">
                  <button>A</button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Single Character</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Minimal text content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand" style="max-width: 200px;">
                  <button style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    This is a very long button text that might overflow
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Long Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Text overflow handling</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand">
                  <button style="min-width: 20px; min-height: 20px;"></button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Empty Content</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">No text or icon content</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Complex Combinations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Complex Combinations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled 
                  circular 
                  highlighted 
                  color="purple" 
                  size="large" 
                  type="highlight-colored-text"
                  colorFill="text"
                  hoverColorFill="background"
                >
                  <button>
                    <PlusIcon />
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">All Properties</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Maximum property combination</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled 
                  color="red" 
                  type="transparent" 
                  colorFill="none" 
                  hoverColorFill="none"
                >
                  <button disabled style="opacity: 0.3;">
                    <DownloadIcon />
                    Disabled Transparent
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Disabled + Transparent</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Conflicting state combination</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Size Extremes -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Size Extremes</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                  <ButtonStyled size="small" circular color="brand">
                    <button style="padding: 0.25rem;">
                      <PlusIcon style="width: 12px; height: 12px;" />
                    </button>
                  </ButtonStyled>
                  <ButtonStyled size="large" circular color="brand">
                    <button style="padding: 1rem;">
                      <PlusIcon style="width: 24px; height: 24px;" />
                    </button>
                  </ButtonStyled>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Size Comparison</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Small vs large circular buttons</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled size="large" color="brand" style="width: 100%; max-width: 300px;">
                  <button style="width: 100%; padding: 1.5rem;">
                    Full Width Large Button
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Full Width</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Maximum width button</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Accessibility Considerations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Accessibility Considerations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled circular color="brand">
                  <button aria-label="Add new item" title="Add new item">
                    <PlusIcon />
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Icon with ARIA</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Proper aria-label for screen readers</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand">
                  <button style="min-height: 44px; min-width: 44px;">
                    <DownloadIcon />
                    Touch Target
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Touch Target Size</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Minimum 44px for touch accessibility</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <ButtonStyled color="brand">
                  <button style="outline: 3px solid var(--color-brand); outline-offset: 2px;">
                    <DownloadIcon />
                    High Contrast Focus
                  </button>
                </ButtonStyled>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Focus Indicator</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">High contrast focus outline</div>
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
        story: 'Edge cases and boundary conditions for ButtonStyled including text length variations, complex property combinations, size extremes, and accessibility considerations. These scenarios help ensure robust component behavior in unusual situations.',
      },
    },
  },
}