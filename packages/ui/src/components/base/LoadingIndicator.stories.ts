import type { Meta, StoryObj } from '@storybook/vue3-vite'
import LoadingIndicator from './LoadingIndicator.vue'

const meta: Meta<typeof LoadingIndicator> = {
    title: 'Foundation/Feedback/LoadingIndicator',
    component: LoadingIndicator,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to show loading states throughout the application.

\`\`\`vue
<LoadingIndicator />
\`\`\`
        `,
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: () => ({
        components: { LoadingIndicator },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <LoadingIndicator />
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Loading indicator with animated placeholders and shimmer effect.',
            },
        },
    },
}

export const AllVariants: Story = {
    render: () => ({
        components: { LoadingIndicator },
        template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All LoadingIndicator Variants</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          
          <!-- Standard Display -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Standard Display</h3>
            <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
              <LoadingIndicator />
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Default loading state</p>
          </div>

          <!-- Different Container Sizes -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Container Sizes</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Narrow container</p>
                <div style="width: 200px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Wide container</p>
                <div style="width: 100%; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Responsive to container width</p>
          </div>

          <!-- Background Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Background Contexts</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Light background</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Raised background</p>
                <div style="background: var(--color-raised-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Card background</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Different background contexts</p>
          </div>

          <!-- Height Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Height Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Compact (150px)</p>
                <div style="height: 150px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Standard (250px)</p>
                <div style="height: 250px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Tall (400px)</p>
                <div style="height: 400px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Different height constraints</p>
          </div>

          <!-- Layout Contexts -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Layout Contexts</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">In modal dialog</p>
                <div style="background: var(--color-bg); border-radius: 0.75rem; padding: 2rem; border: 1px solid var(--color-divider); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">In sidebar panel</p>
                <div style="width: 250px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">In content area</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 2rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Common UI layout contexts</p>
          </div>

          <!-- Animation Focus -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Animation Details</h3>
            <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 2rem; border: 1px solid var(--color-divider);">
              <LoadingIndicator />
            </div>
            <div style="margin-top: 1rem; padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Animation Features:</p>
              <ul style="margin: 0; padding-left: 1.5rem; color: var(--color-secondary); font-size: 0.75rem; line-height: 1.4;">
                <li>Text with animated dots (2s cycle)</li>
                <li>Staggered placeholder animations (0.3s delay)</li>
                <li>Shimmer effect across placeholders</li>
                <li>Pulsing opacity and border effects</li>
              </ul>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Built-in CSS animations</p>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Comprehensive showcase of LoadingIndicator variants in different container sizes, background contexts, heights, layout contexts, and animation details.',
            },
        },
    },
}

export const AllStates: Story = {
    render: () => ({
        components: { LoadingIndicator },
        template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All LoadingIndicator States</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem;">
          
          <!-- Initial Loading States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Initial Loading States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Page first load</p>
                <div style="height: 200px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Component initialization</p>
                <div style="height: 150px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">First-time loading experiences</p>
          </div>

          <!-- Data Fetching States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Data Fetching States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Loading project list</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Loading search results</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Loading user profile</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">API data loading states</p>
          </div>

          <!-- Navigation States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Navigation States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Route transition</p>
                <div style="height: 180px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Page refresh</p>
                <div style="height: 160px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Page and route loading states</p>
          </div>

          <!-- Modal & Dialog States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Modal & Dialog States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Modal content loading</p>
                <div style="background: var(--color-bg); border-radius: 0.75rem; padding: 1.5rem; border: 1px solid var(--color-divider); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Settings panel loading</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Overlay and dialog loading</p>
          </div>

          <!-- Content Refresh States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Content Refresh States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Auto-refresh data</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Pull-to-refresh</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Filter results update</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Content update scenarios</p>
          </div>

          <!-- Error Recovery States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Error Recovery States</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Retry after error</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Reconnection attempt</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Fallback data loading</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Recovery and retry scenarios</p>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Comprehensive demonstration of LoadingIndicator states across different application contexts including initial loading, data fetching, navigation, modals, content refresh, and error recovery scenarios.',
            },
        },
    },
}

export const RealWorldUsage: Story = {
    render: () => ({
        components: { LoadingIndicator },
        template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real-World LoadingIndicator Usage</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem;">
          
          <!-- Project Discovery -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Project Discovery & Search</h3>
            <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1.5rem; border: 1px solid var(--color-divider); margin-bottom: 1rem;">
              <div style="margin-bottom: 1rem; padding: 0.5rem; background: var(--color-raised-bg); border-radius: 0.25rem; border: 1px solid var(--color-divider);">
                <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">🔍 Loading search results for "optimization mods"...</p>
              </div>
              <LoadingIndicator />
            </div>
            <div style="padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Used in:</p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/search/%5BprojectType%5D/index.vue" target="_blank" style="color: var(--color-brand);">Search pages</a> - Project type filtering
              </p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/packages/ui/src/components/search/SearchDropdown.vue" target="_blank" style="color: var(--color-brand);">SearchDropdown</a> - Real-time search
              </p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/index.vue" target="_blank" style="color: var(--color-brand);">Homepage</a> - Featured projects loading
              </p>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Search & discovery interfaces</p>
          </div>

          <!-- Project Pages -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Project Pages & Details</h3>
            <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1.5rem; border: 1px solid var(--color-divider); margin-bottom: 1rem;">
              <div style="margin-bottom: 1rem; padding: 0.5rem; background: var(--color-raised-bg); border-radius: 0.25rem; border: 1px solid var(--color-divider);">
                <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">📦 Loading Sodium project details...</p>
              </div>
              <LoadingIndicator />
            </div>
            <div style="padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Used in:</p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/%5Btype%5D/%5Bid%5D/index.vue" target="_blank" style="color: var(--color-brand);">Project overview</a> - Main project data
              </p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/%5Btype%5D/%5Bid%5D/version/%5Bversion%5D.vue" target="_blank" style="color: var(--color-brand);">Version pages</a> - Version details
              </p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/%5Btype%5D/%5Bid%5D/gallery.vue" target="_blank" style="color: var(--color-brand);">Gallery pages</a> - Media loading
              </p>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Project detail interfaces</p>
          </div>

          <!-- Dashboard & Management -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Dashboard & Management</h3>
            <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1.5rem; border: 1px solid var(--color-divider); margin-bottom: 1rem;">
              <div style="margin-bottom: 1rem; padding: 0.5rem; background: var(--color-raised-bg); border-radius: 0.25rem; border: 1px solid var(--color-divider);">
                <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">⚙️ Loading dashboard analytics...</p>
              </div>
              <LoadingIndicator />
            </div>
            <div style="padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Used in:</p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/dashboard/index.vue" target="_blank" style="color: var(--color-brand);">User dashboard</a> - Project analytics
              </p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/dashboard/notifications/index.vue" target="_blank" style="color: var(--color-brand);">Notifications</a> - Activity feed
              </p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/dashboard/revenue/index.vue" target="_blank" style="color: var(--color-brand);">Revenue tracking</a> - Financial data
              </p>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Creator & admin dashboards</p>
          </div>

          <!-- User Profiles -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">User Profiles & Organizations</h3>
            <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1.5rem; border: 1px solid var(--color-divider); margin-bottom: 1rem;">
              <div style="margin-bottom: 1rem; padding: 0.5rem; background: var(--color-raised-bg); border-radius: 0.25rem; border: 1px solid var(--color-divider);">
                <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">👤 Loading user profile and projects...</p>
              </div>
              <LoadingIndicator />
            </div>
            <div style="padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Used in:</p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/user/%5Bid%5D/index.vue" target="_blank" style="color: var(--color-brand);">User profiles</a> - Profile & projects
              </p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/organization/%5Bid%5D/index.vue" target="_blank" style="color: var(--color-brand);">Organizations</a> - Team profiles
              </p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/collection/%5Bid%5D/index.vue" target="_blank" style="color: var(--color-brand);">Collections</a> - Curated lists
              </p>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Profile & community pages</p>
          </div>

          <!-- Moderation & Reports -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Moderation & Admin</h3>
            <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1.5rem; border: 1px solid var(--color-divider); margin-bottom: 1rem;">
              <div style="margin-bottom: 1rem; padding: 0.5rem; background: var(--color-raised-bg); border-radius: 0.25rem; border: 1px solid var(--color-divider);">
                <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">🛡️ Loading moderation queue...</p>
              </div>
              <LoadingIndicator />
            </div>
            <div style="padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Used in:</p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/moderation/report/index.vue" target="_blank" style="color: var(--color-brand);">Reports queue</a> - Content reports
              </p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/admin/billing/index.vue" target="_blank" style="color: var(--color-brand);">Admin billing</a> - Financial oversight
              </p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/admin/servers/index.vue" target="_blank" style="color: var(--color-brand);">Server monitoring</a> - System status
              </p>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Administrative interfaces</p>
          </div>

          <!-- Settings & Configuration -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Settings & Configuration</h3>
            <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1.5rem; border: 1px solid var(--color-divider); margin-bottom: 1rem;">
              <div style="margin-bottom: 1rem; padding: 0.5rem; background: var(--color-raised-bg); border-radius: 0.25rem; border: 1px solid var(--color-divider);">
                <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">🔧 Loading account settings...</p>
              </div>
              <LoadingIndicator />
            </div>
            <div style="padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Used in:</p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/settings/index.vue" target="_blank" style="color: var(--color-brand);">Account settings</a> - User preferences
              </p>
              <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/settings/billing/index.vue" target="_blank" style="color: var(--color-brand);">Billing settings</a> - Payment methods
              </p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--color-secondary);">
                • <a href="https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/%5Btype%5D/%5Bid%5D/settings/index.vue" target="_blank" style="color: var(--color-brand);">Project settings</a> - Configuration panels
              </p>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Configuration interfaces</p>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Real-world examples of LoadingIndicator usage across the Modrinth platform including search, project pages, dashboards, user profiles, moderation, and settings interfaces.',
            },
        },
    },
}

export const EdgeCases: Story = {
    render: () => ({
        components: { LoadingIndicator },
        template: `
      <div style="padding: 2rem; max-width: 1400px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">LoadingIndicator Edge Cases</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          
          <!-- Extreme Container Sizes -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Extreme Container Sizes</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Tiny container (100px)</p>
                <div style="width: 100px; height: 80px; background: var(--color-bg); border-radius: 0.5rem; padding: 0.5rem; border: 1px solid var(--color-divider); overflow: hidden;">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Ultra-wide container</p>
                <div style="width: 100%; max-width: 800px; height: 120px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Ultra-tall container</p>
                <div style="width: 200px; height: 600px; background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Testing layout extremes</p>
          </div>

          <!-- Constrained Heights -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Constrained Heights</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Very short (60px height)</p>
                <div style="height: 60px; background: var(--color-bg); border-radius: 0.5rem; padding: 0.5rem; border: 1px solid var(--color-divider); overflow: hidden;">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Minimal viable (80px height)</p>
                <div style="height: 80px; background: var(--color-bg); border-radius: 0.5rem; padding: 0.5rem; border: 1px solid var(--color-divider); overflow: hidden;">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">One placeholder only (100px)</p>
                <div style="height: 100px; background: var(--color-bg); border-radius: 0.5rem; padding: 0.5rem; border: 1px solid var(--color-divider); overflow: hidden;">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Height constraint testing</p>
          </div>

          <!-- Overlapping & Positioning -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Overlapping & Positioning</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Fixed positioning</p>
                <div style="position: relative; height: 120px; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider); overflow: hidden;">
                  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; padding: 1rem;">
                    <LoadingIndicator />
                  </div>
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Z-index stacking</p>
                <div style="position: relative; height: 120px; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.1); padding: 1rem; z-index: 10;">
                    <LoadingIndicator />
                  </div>
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Multiple overlaid</p>
                <div style="position: relative; height: 120px; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                  <div style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; opacity: 0.7; padding: 0.5rem;">
                    <LoadingIndicator />
                  </div>
                  <div style="position: absolute; top: 0; right: 0; width: 50%; height: 100%; opacity: 0.7; padding: 0.5rem;">
                    <LoadingIndicator />
                  </div>
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">CSS positioning edge cases</p>
          </div>

          <!-- Performance Stress -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Performance Stress</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Many simultaneous instances</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; height: 150px;">
                  <div style="background: var(--color-bg); border-radius: 0.25rem; padding: 0.5rem; border: 1px solid var(--color-divider);">
                    <LoadingIndicator />
                  </div>
                  <div style="background: var(--color-bg); border-radius: 0.25rem; padding: 0.5rem; border: 1px solid var(--color-divider);">
                    <LoadingIndicator />
                  </div>
                  <div style="background: var(--color-bg); border-radius: 0.25rem; padding: 0.5rem; border: 1px solid var(--color-divider);">
                    <LoadingIndicator />
                  </div>
                  <div style="background: var(--color-bg); border-radius: 0.25rem; padding: 0.5rem; border: 1px solid var(--color-divider);">
                    <LoadingIndicator />
                  </div>
                  <div style="background: var(--color-bg); border-radius: 0.25rem; padding: 0.5rem; border: 1px solid var(--color-divider);">
                    <LoadingIndicator />
                  </div>
                  <div style="background: var(--color-bg); border-radius: 0.25rem; padding: 0.5rem; border: 1px solid var(--color-divider);">
                    <LoadingIndicator />
                  </div>
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Nested loading states</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <div style="background: var(--color-raised-bg); border-radius: 0.25rem; padding: 0.5rem; border: 1px solid var(--color-divider); margin-bottom: 0.5rem;">
                    <LoadingIndicator />
                  </div>
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Animation performance testing</p>
          </div>

          <!-- Browser Compatibility -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Browser Compatibility</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Reduced motion preference</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </div>
                <p style="margin: 0.5rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary);">Note: Animations respect prefers-reduced-motion</p>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">High contrast mode</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 2px solid var(--color-divider); filter: contrast(1.5);">
                  <LoadingIndicator />
                </div>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Print media simulation</p>
                <div style="background: white; color: black; border-radius: 0.5rem; padding: 1rem; border: 1px solid #ccc;">
                  <LoadingIndicator />
                </div>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">Accessibility & compatibility</p>
          </div>

          <!-- Interaction Edge Cases -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Interaction Edge Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Click/touch events</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider); cursor: pointer;" onclick="console.log('Loading indicator clicked')">
                  <LoadingIndicator />
                </div>
                <p style="margin: 0.5rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary);">Click to test event propagation</p>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Focus states</p>
                <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);" tabindex="0">
                  <LoadingIndicator />
                </div>
                <p style="margin: 0.5rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary);">Tab to focus container</p>
              </div>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: var(--color-secondary);">Inside form elements</p>
                <form style="background: var(--color-bg); border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--color-divider);">
                  <LoadingIndicator />
                </form>
              </div>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">User interaction scenarios</p>
          </div>

          <!-- Animation Timing -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 1.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600; color: var(--color-base);">Animation Timing</h3>
            <div style="background: var(--color-bg); border-radius: 0.5rem; padding: 1.5rem; border: 1px solid var(--color-divider); margin-bottom: 1rem;">
              <LoadingIndicator />
            </div>
            <div style="padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Animation Specifications:</p>
              <ul style="margin: 0; padding-left: 1.5rem; color: var(--color-secondary); font-size: 0.75rem; line-height: 1.4;">
                <li>Dots animation: 2s infinite cycle</li>
                <li>Placeholder pop: 4s ease-in-out infinite</li>
                <li>Shimmer effect: 4s ease-in-out infinite</li>
                <li>Stagger delay: 0.3s between placeholders</li>
                <li>Total animation duration: 4s per cycle</li>
              </ul>
            </div>
            <p style="margin: 1rem 0 0 0; font-size: 0.75rem; color: var(--color-secondary); text-align: right;">CSS animation specifications</p>
          </div>

        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Comprehensive edge case testing for LoadingIndicator including extreme container sizes, positioning, performance stress, browser compatibility, interaction scenarios, and animation timing.',
            },
        },
    },
} 