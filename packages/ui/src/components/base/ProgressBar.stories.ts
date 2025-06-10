import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ProgressBar from './ProgressBar.vue'

const meta: Meta<typeof ProgressBar> = {
    title: 'Foundation/Feedback/ProgressBar',
    component: ProgressBar,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to show progress states throughout the application.

\`\`\`vue
<ProgressBar :progress="0.7" color="brand" />
<ProgressBar :progress="0.5" :waiting="true" color="green" />
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        progress: {
            control: { type: 'range', min: 0, max: 1, step: 0.1 },
            description: 'Progress value (0-1)',
            table: { category: 'State' },
        },
        max: {
            control: { type: 'number', min: 1, max: 100 },
            description: 'Maximum value',
            table: { category: 'State' },
        },
        color: {
            control: 'select',
            options: ['brand', 'green', 'red', 'orange', 'blue', 'purple', 'gray'],
            description: 'Progress bar color',
            table: { category: 'Appearance' },
        },
        waiting: {
            control: 'boolean',
            description: 'Show waiting animation',
            table: { category: 'State' },
        },
    },
    args: {
        progress: 0.6,
        max: 1,
        color: 'brand',
        waiting: false,
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { ProgressBar },
        setup() {
            return { args }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <ProgressBar v-bind="args" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Use the controls panel to experiment with different progress values, colors, and waiting states.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with progress bar properties.',
            },
        },
    },
}

export const AllVariants: Story = {
    render: () => ({
        components: { ProgressBar },
        template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All ProgressBar Variants</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          
          <!-- Progress Values -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Progress Values</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Empty (0%)</p>
                <ProgressBar :progress="0" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Quarter (25%)</p>
                <ProgressBar :progress="0.25" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Half (50%)</p>
                <ProgressBar :progress="0.5" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Three Quarters (75%)</p>
                <ProgressBar :progress="0.75" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Complete (100%)</p>
                <ProgressBar :progress="1" color="brand" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Common progress states</p>
          </div>

          <!-- Color Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Color Themes</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Brand (default)</p>
                <ProgressBar :progress="0.7" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Success (green)</p>
                <ProgressBar :progress="0.7" color="green" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Danger (red)</p>
                <ProgressBar :progress="0.7" color="red" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Warning (orange)</p>
                <ProgressBar :progress="0.7" color="orange" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Info (blue)</p>
                <ProgressBar :progress="0.7" color="blue" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Purple</p>
                <ProgressBar :progress="0.7" color="purple" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Neutral (gray)</p>
                <ProgressBar :progress="0.7" color="gray" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Semantic color meanings</p>
          </div>

          <!-- Waiting State -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Waiting Animation</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Static progress</p>
                <ProgressBar :progress="0.6" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Waiting state (brand)</p>
                <ProgressBar :progress="0" :waiting="true" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Waiting state (green)</p>
                <ProgressBar :progress="0" :waiting="true" color="green" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Waiting state (orange)</p>
                <ProgressBar :progress="0" :waiting="true" color="orange" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Indeterminate loading state</p>
          </div>

          <!-- Max Value Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Custom Max Values</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Standard (max: 1, progress: 0.8)</p>
                <ProgressBar :progress="0.8" :max="1" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Steps (max: 5, progress: 3)</p>
                <ProgressBar :progress="3" :max="5" color="green" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Percentage (max: 100, progress: 65)</p>
                <ProgressBar :progress="65" :max="100" color="blue" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Large scale (max: 1000, progress: 750)</p>
                <ProgressBar :progress="750" :max="1000" color="purple" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Different scales and contexts</p>
          </div>

          <!-- Size Context -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Layout Contexts</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">In card (max-width applied)</p>
                <div style="border: 1px solid var(--color-divider); padding: 1rem; border-radius: 0.5rem; background: var(--color-bg);">
                  <ProgressBar :progress="0.4" color="brand" />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">In narrow container</p>
                <div style="width: 200px; border: 1px solid var(--color-divider); padding: 1rem; border-radius: 0.5rem; background: var(--color-bg);">
                  <ProgressBar :progress="0.65" color="green" />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">In wide container</p>
                <div style="width: 100%; max-width: 400px; border: 1px solid var(--color-divider); padding: 1rem; border-radius: 0.5rem; background: var(--color-bg);">
                  <ProgressBar :progress="0.85" color="blue" />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Responsive to container width</p>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Comprehensive showcase of all ProgressBar variants including progress values, color themes, waiting animations, custom max values, and layout contexts.',
            },
        },
    },
}

export const AllStates: Story = {
    render: () => ({
        components: { ProgressBar },
        template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All ProgressBar States</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          
          <!-- Initial States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Initial States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Not started (0%)</p>
                <ProgressBar :progress="0" color="gray" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Waiting to start</p>
                <ProgressBar :progress="0" :waiting="true" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Just started (5%)</p>
                <ProgressBar :progress="0.05" color="blue" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Beginning states</p>
          </div>

          <!-- Active Progress States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Active Progress</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Early progress (15%)</p>
                <ProgressBar :progress="0.15" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Steady progress (45%)</p>
                <ProgressBar :progress="0.45" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Significant progress (70%)</p>
                <ProgressBar :progress="0.7" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Nearly complete (90%)</p>
                <ProgressBar :progress="0.9" color="brand" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Normal progression states</p>
          </div>

          <!-- Completion States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Completion States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Almost done (95%)</p>
                <ProgressBar :progress="0.95" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Complete (100%)</p>
                <ProgressBar :progress="1" color="green" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Success confirmation</p>
                <ProgressBar :progress="1" color="green" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Final completion states</p>
          </div>

          <!-- Error & Warning States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Error & Warning States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Failed early (20%)</p>
                <ProgressBar :progress="0.2" color="red" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Warning state (60%)</p>
                <ProgressBar :progress="0.6" color="orange" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Critical error</p>
                <ProgressBar :progress="0" color="red" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Timeout state</p>
                <ProgressBar :progress="0.3" color="red" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Error handling states</p>
          </div>

          <!-- Loading & Waiting States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Loading & Waiting</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Connecting...</p>
                <ProgressBar :progress="0" :waiting="true" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Processing...</p>
                <ProgressBar :progress="0" :waiting="true" color="blue" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Uploading...</p>
                <ProgressBar :progress="0" :waiting="true" color="green" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Retrying...</p>
                <ProgressBar :progress="0" :waiting="true" color="orange" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Indeterminate progress states</p>
          </div>

          <!-- Contextual States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Contextual States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Download progress (65%)</p>
                <ProgressBar :progress="0.65" color="blue" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Upload progress (45%)</p>
                <ProgressBar :progress="0.45" color="green" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Installation progress (80%)</p>
                <ProgressBar :progress="0.8" color="purple" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Profile completion (40%)</p>
                <ProgressBar :progress="0.4" color="brand" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Application-specific contexts</p>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Comprehensive demonstration of ProgressBar states including initial, active, completion, error, loading, and contextual states.',
            },
        },
    },
}

export const RealWorldUsage: Story = {
    render: () => ({
        components: { ProgressBar },
        template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real-World ProgressBar Usage</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem;">
          
          <!-- Project Upload Progress -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Project Upload Flow</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Uploading project files...</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">2.3 MB / 5.1 MB</span>
                </div>
                <ProgressBar :progress="0.45" color="brand" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Processing images...</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">3 / 7 images</span>
                </div>
                <ProgressBar :progress="3" :max="7" color="blue" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Upload complete!</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">5.1 MB / 5.1 MB</span>
                </div>
                <ProgressBar :progress="1" color="green" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">
              <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/project/upload.vue" target="_blank" style="color: var(--color-brand);">Project upload page</a>
            </p>
          </div>

          <!-- Instance Installation -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Instance Installation</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Downloading Minecraft...</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Installing</span>
                </div>
                <ProgressBar :progress="0" :waiting="true" color="green" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Installing Fabric Loader</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">73%</span>
                </div>
                <ProgressBar :progress="0.73" color="blue" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Installing mods...</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">12 / 45 mods</span>
                </div>
                <ProgressBar :progress="12" :max="45" color="purple" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">
              <a href="https://github.com/modrinth/code/blob/main/apps/app-frontend/src/components/ui/install_flow" target="_blank" style="color: var(--color-brand);">Installation flow components</a>
            </p>
          </div>

          <!-- Search & Processing -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Search & Processing</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Searching mods...</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Loading</span>
                </div>
                <ProgressBar :progress="0" :waiting="true" color="brand" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Indexing projects</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">1,247 / 2,856</span>
                </div>
                <ProgressBar :progress="1247" :max="2856" color="blue" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Processing modpacks</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">85%</span>
                </div>
                <ProgressBar :progress="0.85" color="purple" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">
              <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/search.vue" target="_blank" style="color: var(--color-brand);">Search implementation</a>
            </p>
          </div>

          <!-- Profile & Account -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Profile & Account</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Profile completeness</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">3 / 5 steps</span>
                </div>
                <ProgressBar :progress="3" :max="5" color="brand" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Email verification</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Pending</span>
                </div>
                <ProgressBar :progress="0" :waiting="true" color="orange" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Account setup</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Complete</span>
                </div>
                <ProgressBar :progress="1" color="green" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">
              <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/settings/account.vue" target="_blank" style="color: var(--color-brand);">Account settings page</a>
            </p>
          </div>

          <!-- Server Management -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Server Management</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Server startup</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Starting...</span>
                </div>
                <ProgressBar :progress="0" :waiting="true" color="green" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Backup creation</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">67%</span>
                </div>
                <ProgressBar :progress="0.67" color="blue" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Backup failed</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Error</span>
                </div>
                <ProgressBar :progress="0.2" color="red" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">
              <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/servers/manage" target="_blank" style="color: var(--color-brand);">Server management</a>
            </p>
          </div>

          <!-- Build & Deploy -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Build & Deploy Progress</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Building project</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Running tests</span>
                </div>
                <ProgressBar :progress="0" :waiting="true" color="blue" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Deploying to production</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">4 / 7 steps</span>
                </div>
                <ProgressBar :progress="4" :max="7" color="purple" />
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Deploy successful!</span>
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Live</span>
                </div>
                <ProgressBar :progress="1" color="green" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">
              <a href="https://github.com/modrinth/code/blob/main/.github/workflows" target="_blank" style="color: var(--color-brand);">CI/CD workflows</a>
            </p>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Real-world examples of ProgressBar usage in the Modrinth platform, including project uploads, instance installation, search processing, profile setup, server management, and build/deploy workflows.',
            },
        },
    },
}

export const EdgeCases: Story = {
    render: () => ({
        components: { ProgressBar },
        template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">ProgressBar Edge Cases</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          
          <!-- Invalid & Boundary Values -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Invalid & Boundary Values</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Negative progress (-0.5)</p>
                <ProgressBar :progress="-0.5" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Progress over max (1.5 / 1)</p>
                <ProgressBar :progress="1.5" :max="1" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Zero max value (progress: 0.5, max: 0)</p>
                <ProgressBar :progress="0.5" :max="0" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Extremely small progress (0.001)</p>
                <ProgressBar :progress="0.001" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Very large values (999999 / 1000000)</p>
                <ProgressBar :progress="999999" :max="1000000" color="brand" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Testing boundary conditions</p>
          </div>

          <!-- Data Type Edge Cases -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Data Type Edge Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Decimal precision (0.333333333...)</p>
                <ProgressBar :progress="1/3" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Float precision (0.1 + 0.2)</p>
                <ProgressBar :progress="0.1 + 0.2" color="blue" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Scientific notation (1e-10)</p>
                <ProgressBar :progress="1e-10" color="green" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Infinity progress</p>
                <ProgressBar :progress="Infinity" color="red" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">NaN progress</p>
                <ProgressBar :progress="NaN" color="orange" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">JavaScript number edge cases</p>
          </div>

          <!-- Extreme Scales -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Extreme Scales</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Micro scale (0.0001 / 0.0002)</p>
                <ProgressBar :progress="0.0001" :max="0.0002" color="brand" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Massive scale (5M / 10M)</p>
                <ProgressBar :progress="5000000" :max="10000000" color="green" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Time scale (milliseconds)</p>
                <ProgressBar :progress="1234567890" :max="2000000000" color="blue" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Single unit (1 / 1)</p>
                <ProgressBar :progress="1" :max="1" color="purple" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Testing different scales</p>
          </div>

          <!-- Color & Display Edge Cases -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Color & Display Edge Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Invalid color (falls back to brand)</p>
                <ProgressBar :progress="0.6" color="invalid" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Null color (falls back to brand)</p>
                <ProgressBar :progress="0.6" :color="null" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Waiting with progress</p>
                <ProgressBar :progress="0.5" :waiting="true" color="brand" />
              </div>
              <div style="background: var(--color-bg); padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">On different background</p>
                <ProgressBar :progress="0.7" color="brand" />
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Visual and prop edge cases</p>
          </div>

          <!-- Container Edge Cases -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Container Edge Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Extremely narrow (50px)</p>
                <div style="width: 50px; border: 1px solid var(--color-divider); padding: 0.5rem; border-radius: 0.25rem;">
                  <ProgressBar :progress="0.7" color="brand" />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Very wide container</p>
                <div style="width: 100%; max-width: 600px; border: 1px solid var(--color-divider); padding: 1rem; border-radius: 0.5rem;">
                  <ProgressBar :progress="0.3" color="green" />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Hidden container (opacity: 0.1)</p>
                <div style="opacity: 0.1; border: 1px solid var(--color-divider); padding: 1rem; border-radius: 0.5rem;">
                  <ProgressBar :progress="0.8" color="blue" />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">In flex container</p>
                <div style="display: flex; gap: 1rem; align-items: center; border: 1px solid var(--color-divider); padding: 1rem; border-radius: 0.5rem;">
                  <span style="flex-shrink: 0; font-size: 0.875rem;">Progress:</span>
                  <ProgressBar :progress="0.65" color="purple" />
                  <span style="flex-shrink: 0; font-size: 0.875rem;">65%</span>
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Layout constraint testing</p>
          </div>

          <!-- Performance Edge Cases -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Performance Edge Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Multiple simultaneous waiting bars</p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                  <ProgressBar :progress="0" :waiting="true" color="brand" />
                  <ProgressBar :progress="0" :waiting="true" color="green" />
                  <ProgressBar :progress="0" :waiting="true" color="blue" />
                  <ProgressBar :progress="0" :waiting="true" color="purple" />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Rapid value changes</p>
                <ProgressBar :progress="Math.sin(Date.now() / 1000) * 0.5 + 0.5" color="orange" />
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Many static bars</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem;">
                  <ProgressBar :progress="0.1" color="gray" />
                  <ProgressBar :progress="0.2" color="gray" />
                  <ProgressBar :progress="0.3" color="gray" />
                  <ProgressBar :progress="0.4" color="gray" />
                  <ProgressBar :progress="0.5" color="gray" />
                  <ProgressBar :progress="0.6" color="gray" />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Testing animation and rendering performance</p>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Comprehensive edge case testing for ProgressBar including invalid values, data type extremes, scale testing, visual edge cases, container constraints, and performance scenarios.',
            },
        },
    },
} 