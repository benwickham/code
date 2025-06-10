import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Toggle from './Toggle.vue'
import { ref } from 'vue'

const meta: Meta<typeof Toggle> = {
    title: 'Foundation/Actions/Toggle',
    component: Toggle,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used for boolean settings and preferences throughout the application.

\`\`\`vue
<Toggle 
  id="notifications" 
  v-model="enableNotifications"
  :disabled="false"
/>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        id: {
            control: 'text',
            description: 'Unique identifier for the toggle input',
            table: { category: 'Content' },
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the toggle is disabled',
            table: { category: 'State' },
        },
        modelValue: {
            control: 'boolean',
            description: 'The checked state of the toggle',
            table: { category: 'State' },
        },
    },
    args: {
        id: 'example-toggle',
        disabled: false,
        modelValue: false,
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { Toggle },
        setup() {
            const checked = ref(false)
            return { args, checked }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
            <label :for="args.id" style="font-size: 0.875rem; color: var(--color-base);">Enable setting</label>
            <Toggle v-bind="args" v-model="checked" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Current state: <strong>{{ checked ? 'Enabled' : 'Disabled' }}</strong>. Use the controls panel to experiment with different states.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with toggle states and properties.',
            },
        },
    },
}

// 2. ALL VARIANTS STORY
export const AllVariants: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const checked1 = ref(false)
            const checked2 = ref(true)
            const checked3 = ref(false)
            const checked4 = ref(true)
            return { checked1, checked2, checked3, checked4 }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All Toggle Variants</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Basic Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Basic Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="unchecked-toggle" v-model="checked1" />
                  <label for="unchecked-toggle" style="font-size: 0.875rem; color: var(--color-base);">Unchecked Toggle</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Unchecked</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Default off state</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="checked-toggle" v-model="checked2" />
                  <label for="checked-toggle" style="font-size: 0.875rem; color: var(--color-base);">Checked Toggle</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Checked</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Active on state</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Disabled Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Disabled Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="disabled-unchecked" v-model="checked3" :disabled="true" />
                  <label for="disabled-unchecked" style="font-size: 0.875rem; color: var(--color-secondary); opacity: 0.6;">Disabled Unchecked</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Disabled Off</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Non-interactive off state</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="disabled-checked" v-model="checked4" :disabled="true" />
                  <label for="disabled-checked" style="font-size: 0.875rem; color: var(--color-secondary); opacity: 0.6;">Disabled Checked</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Disabled On</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Non-interactive on state</div>
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
                story: 'Comprehensive showcase of all Toggle variants including checked/unchecked states and disabled variations.',
            },
        },
    },
}

// 3. ALL STATES STORY
export const AllStates: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const normalOff = ref(false)
            const normalOn = ref(true)
            const disabledOff = ref(false)
            const disabledOn = ref(true)
            return { normalOff, normalOn, disabledOff, disabledOn }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All Toggle States</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Interactive States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Interactive States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="normal-off" v-model="normalOff" />
                  <label for="normal-off" style="font-size: 0.875rem; color: var(--color-base);">Normal Off</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Normal Off</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Interactive unchecked state</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="normal-on" v-model="normalOn" />
                  <label for="normal-on" style="font-size: 0.875rem; color: var(--color-base);">Normal On</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Normal On</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Interactive checked state</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="hover-state" v-model="normalOff" style="filter: brightness(1.1);" />
                  <label for="hover-state" style="font-size: 0.875rem; color: var(--color-base);">Hover State</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Hover</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Hover effect (simulated)</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="focus-state" v-model="normalOff" style="outline: 2px solid var(--color-brand); outline-offset: 2px;" />
                  <label for="focus-state" style="font-size: 0.875rem; color: var(--color-base);">Focus State</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Focus</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Keyboard focus (simulated)</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Disabled States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Disabled States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="disabled-off" v-model="disabledOff" :disabled="true" />
                  <label for="disabled-off" style="font-size: 0.875rem; color: var(--color-secondary); opacity: 0.6;">Disabled Off</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Disabled Off</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Non-interactive unchecked</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="disabled-on" v-model="disabledOn" :disabled="true" />
                  <label for="disabled-on" style="font-size: 0.875rem; color: var(--color-secondary); opacity: 0.6;">Disabled On</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Disabled On</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Non-interactive checked</div>
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
                story: 'Demonstration of all Toggle states including normal, hover, focus, and disabled states in both checked and unchecked variations.',
            },
        },
    },
}

// 4. REAL WORLD USAGE STORY
export const RealWorldUsage: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const notifications = ref(true)
            const autoUpdate = ref(false)
            const darkMode = ref(true)
            const analytics = ref(false)
            const betaFeatures = ref(false)
            return { notifications, autoUpdate, darkMode, analytics, betaFeatures }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real World Usage Examples</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- User Preferences -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">User Preferences</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                  <div style="flex: 1;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Enable Notifications</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Receive updates about your projects and downloads</div>
                  </div>
                  <Toggle id="notifications-toggle" v-model="notifications" />
                </div>
                <div style="text-align: right; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Notifications</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">User preference setting</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                  <div style="flex: 1;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Dark Mode</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Use dark theme for the interface</div>
                  </div>
                  <Toggle id="dark-mode-toggle" v-model="darkMode" />
                </div>
                <div style="text-align: right; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Theme</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Interface appearance</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Instance Settings -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Instance Settings</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                  <div style="flex: 1;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Auto-Update Mods</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Automatically update mods when new versions are available</div>
                  </div>
                  <Toggle id="auto-update-toggle" v-model="autoUpdate" />
                </div>
                <div style="text-align: right; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Auto-Update</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Instance configuration</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Privacy Settings -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Privacy Settings</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                  <div style="flex: 1;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Analytics</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Help improve Modrinth by sharing anonymous usage data</div>
                  </div>
                  <Toggle id="analytics-toggle" v-model="analytics" />
                </div>
                <div style="text-align: right; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Data Sharing</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Privacy preference</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Advanced Settings -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Advanced Settings</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                  <div style="flex: 1;">
                    <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Beta Features</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Enable experimental features (may be unstable)</div>
                  </div>
                  <Toggle id="beta-features-toggle" v-model="betaFeatures" />
                </div>
                <div style="text-align: right; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Experimental</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Advanced user option</div>
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
                story: 'Real-world usage examples showing how Toggle is used in user preferences, instance settings, privacy controls, and advanced configuration options throughout the Modrinth application.',
            },
        },
    },
}

// 5. EDGE CASES STORY
export const EdgeCases: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const normalToggle = ref(false)
            const longLabelToggle = ref(true)
            const noLabelToggle = ref(false)
            return { normalToggle, longLabelToggle, noLabelToggle }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Edge Cases & Boundary Conditions</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Label Variations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Label Variations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="no-label" v-model="noLabelToggle" />
                  <span style="font-size: 0.875rem; color: var(--color-secondary);">(No label)</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">No Label</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Toggle without associated label</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                  <Toggle id="long-label" v-model="longLabelToggle" style="margin-top: 0.125rem;" />
                  <label for="long-label" style="font-size: 0.875rem; color: var(--color-base); line-height: 1.4; max-width: 200px;">
                    This is a very long label that describes a complex setting with multiple considerations and detailed explanation
                  </label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Long Label</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Multi-line label text</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ID Variations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">ID Variations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="special-chars-123" v-model="normalToggle" />
                  <label for="special-chars-123" style="font-size: 0.875rem; color: var(--color-base);">ID with numbers</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Numeric ID</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">ID: "special-chars-123"</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="very-long-id-name-that-might-cause-issues" v-model="normalToggle" />
                  <label for="very-long-id-name-that-might-cause-issues" style="font-size: 0.875rem; color: var(--color-base);">Very long ID</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Long ID</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Extremely long identifier</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Accessibility Considerations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Accessibility Considerations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle 
                    id="aria-toggle" 
                    v-model="normalToggle" 
                    aria-describedby="aria-description"
                    style="outline: 2px solid var(--color-brand); outline-offset: 2px;"
                  />
                  <label for="aria-toggle" style="font-size: 0.875rem; color: var(--color-base);">ARIA Enhanced</label>
                  <div id="aria-description" style="font-size: 0.75rem; color: var(--color-secondary);">
                    (Screen reader description)
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">ARIA Support</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Enhanced accessibility</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle 
                    id="high-contrast" 
                    v-model="normalToggle" 
                    style="filter: contrast(1.5);"
                  />
                  <label for="high-contrast" style="font-size: 0.875rem; color: var(--color-base); font-weight: 600;">High Contrast</label>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">High Contrast</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Enhanced visibility</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Rapid State Changes -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Rapid State Changes</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Toggle id="rapid-toggle" v-model="normalToggle" />
                  <label for="rapid-toggle" style="font-size: 0.875rem; color: var(--color-base);">Rapid Clicking Test</label>
                  <button 
                    @click="normalToggle = !normalToggle"
                    style="font-size: 0.75rem; padding: 0.25rem 0.5rem; background: var(--color-button-bg); border: 1px solid var(--color-divider); border-radius: 0.25rem; cursor: pointer;"
                  >
                    Toggle
                  </button>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Rapid Changes</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Test rapid state transitions</div>
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
                story: 'Edge cases and boundary conditions for Toggle including label variations, ID edge cases, accessibility considerations, and rapid state changes.',
            },
        },
    },
} 