import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta: Meta = {
    title: 'Foundations/Colors',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'The Modrinth color system provides a consistent, accessible foundation for all visual design decisions. Our colors are designed to work harmoniously across light and dark themes while maintaining excellent contrast ratios.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const AllColors: Story = {
    render: () => ({
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <!-- Design Principles -->
        <div style="margin-bottom: 3rem;">
          <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Design Principles</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
            <div style="padding: 1.5rem; background: var(--color-raised-bg); border: 1px solid var(--color-divider); border-radius: 0.5rem;">
              <h3 style="margin: 0 0 0.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Accessibility First</h3>
              <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); line-height: 1.5;">
                All color combinations meet WCAG 2.1 AA contrast requirements (4.5:1 for normal text, 3:1 for large text). 
                Critical information is never conveyed through color alone.
              </p>
            </div>
            <div style="padding: 1.5rem; background: var(--color-raised-bg); border: 1px solid var(--color-divider); border-radius: 0.5rem;">
              <h3 style="margin: 0 0 0.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Semantic Meaning</h3>
              <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); line-height: 1.5;">
                Colors carry consistent meaning: Green for success, Red for errors, Orange for warnings, 
                Blue for information, Purple for special features.
              </p>
            </div>
            <div style="padding: 1.5rem; background: var(--color-raised-bg); border: 1px solid var(--color-divider); border-radius: 0.5rem;">
              <h3 style="margin: 0 0 0.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Theme Adaptability</h3>
              <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); line-height: 1.5;">
                All colors automatically adapt between light and dark themes using CSS custom properties, 
                ensuring optimal contrast and readability.
              </p>
            </div>
          </div>
        </div>

        <!-- Brand Colors -->
        <div style="margin-bottom: 3rem;">
          <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Brand Colors</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
            <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Brand Primary</h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-brand);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Brand</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-brand)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-brand-highlight);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Brand Highlight</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-brand-highlight)</code>
                  </div>
                </div>
              </div>
              <p style="margin: 1rem 0 0 0; font-size: 0.875rem; color: var(--color-secondary);">
                Primary brand color used for main actions, links, and brand identity elements.
              </p>
            </div>
          </div>
        </div>

        <!-- Semantic Colors -->
        <div style="margin-bottom: 3rem;">
          <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Semantic Colors</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
            
            <!-- Success / Green -->
            <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-green);">Success / Green</h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-green);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Green</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-green)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-green-highlight);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Green Highlight</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-green-highlight)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-green-bg);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Green Background</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-green-bg)</code>
                  </div>
                </div>
              </div>
              <p style="margin: 1rem 0 0 0; font-size: 0.875rem; color: var(--color-secondary);">
                Used for success states, confirmations, and positive feedback.
              </p>
            </div>

            <!-- Danger / Red -->
            <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-red);">Danger / Red</h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-red);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Red</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-red)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-red-highlight);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Red Highlight</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-red-highlight)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-red-bg);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Red Background</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-red-bg)</code>
                  </div>
                </div>
              </div>
              <p style="margin: 1rem 0 0 0; font-size: 0.875rem; color: var(--color-secondary);">
                Used for errors, destructive actions, and critical warnings.
              </p>
            </div>

            <!-- Warning / Orange -->
            <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-orange);">Warning / Orange</h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-orange);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Orange</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-orange)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-orange-highlight);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Orange Highlight</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-orange-highlight)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-orange-bg);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Orange Background</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-orange-bg)</code>
                  </div>
                </div>
              </div>
              <p style="margin: 1rem 0 0 0; font-size: 0.875rem; color: var(--color-secondary);">
                Used for warnings, pending states, and caution indicators.
              </p>
            </div>

            <!-- Info / Blue -->
            <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-blue);">Info / Blue</h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-blue);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Blue</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-blue)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-blue-highlight);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Blue Highlight</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-blue-highlight)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-blue-bg);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Blue Background</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-blue-bg)</code>
                  </div>
                </div>
              </div>
              <p style="margin: 1rem 0 0 0; font-size: 0.875rem; color: var(--color-secondary);">
                Used for informational content, links, and neutral actions.
              </p>
            </div>

            <!-- Special / Purple -->
            <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-purple);">Special / Purple</h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-purple);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Purple</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-purple)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-purple-highlight);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Purple Highlight</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-purple-highlight)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-purple-bg);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Purple Background</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-purple-bg)</code>
                  </div>
                </div>
              </div>
              <p style="margin: 1rem 0 0 0; font-size: 0.875rem; color: var(--color-secondary);">
                Used for special features, premium content, and unique elements.
              </p>
            </div>

            <!-- Neutral / Gray -->
            <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-gray);">Neutral / Gray</h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-gray);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Gray</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-gray)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-gray-highlight);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Gray Highlight</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-gray-highlight)</code>
                  </div>
                </div>
              </div>
              <p style="margin: 1rem 0 0 0; font-size: 0.875rem; color: var(--color-secondary);">
                Used for neutral elements, disabled states, and subtle accents.
              </p>
            </div>
          </div>
        </div>

        <!-- Text & Background Colors -->
        <div style="margin-bottom: 3rem;">
          <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Text & Background Colors</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
            
            <!-- Text Colors -->
            <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Text Hierarchy</h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-base);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Primary Text</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-base)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-secondary);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Secondary Text</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-secondary)</code>
                  </div>
                </div>
              </div>
            </div>

            <!-- Background Colors -->
            <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Surface Hierarchy</h3>
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-bg);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Background</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-bg)</code>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div style="width: 3rem; height: 3rem; border-radius: 0.25rem; border: 1px solid var(--color-divider); background-color: var(--color-raised-bg);"></div>
                  <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">Raised Background</div>
                    <code style="font-size: 0.875rem; color: var(--color-secondary); font-family: monospace;">var(--color-raised-bg)</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Usage Guidelines -->
        <div style="margin-bottom: 3rem;">
          <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Usage Guidelines</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div style="padding: 1.5rem; background: var(--color-green-bg); border: 1px solid var(--color-green); border-radius: 0.5rem;">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-green);">Do's</h3>
              <ul style="margin: 0; padding-left: 1.25rem; color: var(--color-base); line-height: 1.6;">
                <li><strong>Use semantic colors</strong> for their intended purpose (green for success, red for errors)</li>
                <li><strong>Test contrast ratios</strong> when creating custom color combinations</li>
                <li><strong>Use CSS custom properties</strong> instead of hardcoded hex values</li>
                <li><strong>Consider both themes</strong> when designing new components</li>
                <li><strong>Provide alternative indicators</strong> beyond color (icons, text, patterns)</li>
              </ul>
            </div>
            
            <div style="padding: 1.5rem; background: var(--color-red-bg); border: 1px solid var(--color-red); border-radius: 0.5rem;">
              <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-red);">Don'ts</h3>
              <ul style="margin: 0; padding-left: 1.25rem; color: var(--color-base); line-height: 1.6;">
                <li><strong>Don't use color alone</strong> to convey critical information</li>
                <li><strong>Don't hardcode colors</strong> - always use design tokens</li>
                <li><strong>Don't create new colors</strong> without considering the existing palette</li>
                <li><strong>Don't assume color perception</strong> - ensure accessibility for colorblind users</li>
                <li><strong>Don't use brand colors</strong> for semantic states</li>
              </ul>
            </div>
          </div>

          <div style="padding: 1.5rem; background: var(--color-raised-bg); border: 1px solid var(--color-divider); border-radius: 0.5rem;">
            <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">CSS Usage Example</h3>
            <pre style="margin: 0; padding: 1rem; background: var(--color-bg); border-radius: 0.25rem; overflow-x: auto; font-family: monospace; font-size: 0.875rem; color: var(--color-base);"><code>/* Component styling with theme-aware colors */
.status-card {
  background-color: var(--color-raised-bg);
  border: 1px solid var(--color-divider);
  color: var(--color-base);
}

.status-card.success {
  background-color: var(--color-green-bg);
  border-color: var(--color-green);
  color: var(--color-green);
}

.status-card.error {
  background-color: var(--color-red-bg);
  border-color: var(--color-red);
  color: var(--color-red);
}</code></pre>
          </div>
        </div>
      </div>
    `,
    }),
}
