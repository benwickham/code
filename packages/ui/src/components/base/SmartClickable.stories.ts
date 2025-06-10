import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SmartClickable from './SmartClickable.vue'
import Button from './Button.vue'

const meta: Meta<typeof SmartClickable> = {
  title: 'Foundation/Actions/SmartClickable',
  component: SmartClickable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Example usage

This component is used to create layered clickable areas where content can have hover effects while maintaining proper click targets.

\`\`\`vue
<SmartClickable>
  <template #clickable>
    <Button>Click me</Button>
  </template>
  <div class="smart-clickable:underline-on-hover">
    Content that gets effects on hover
  </div>
</SmartClickable>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    default: {
      description: 'Default slot content that receives hover effects',
      table: { category: 'Content' },
    },
    clickable: {
      description: 'Clickable slot for the interactive element',
      table: { category: 'Content' },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => ({
    components: { SmartClickable, Button },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <SmartClickable>
            <template #clickable>
              <Button>Click me</Button>
            </template>
            <div style="padding: 1rem; border: 1px solid var(--color-divider); border-radius: 0.5rem; background: var(--color-bg);" class="smart-clickable:underline-on-hover">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1rem; font-weight: 600;">Content with hover effects</h3>
              <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">This content will get underlined when the button is hovered.</p>
            </div>
          </SmartClickable>
          <p style="margin: 2rem 0 0 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Hover over the button to see the content effects. The SmartClickable component creates layered interactive areas.
          </p>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground showing SmartClickable with hover effects on content.',
      },
    },
  },
}

// 2. ALL VARIANTS STORY
export const AllVariants: Story = {
  render: () => ({
    components: { SmartClickable, Button },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All SmartClickable Variants</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Button Clickables -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Button Clickables</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button>Primary Action</Button>
                  </template>
                  <div class="smart-clickable:underline-on-hover" style="padding: 0.5rem; border-radius: 0.25rem;">
                    <strong>Card Title</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">Hover to see underline effect</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Button + Content</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Button with hover-affected content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button color="brand">Download</Button>
                  </template>
                  <div class="smart-clickable:scale-on-hover" style="padding: 0.5rem; transition: transform 0.2s;">
                    <strong>Project Name</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">Hover to see scale effect</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Branded Button</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Brand button with scale effect</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Link Clickables -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Link Clickables</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <a href="#" style="color: var(--color-brand); text-decoration: none;">View Details →</a>
                  </template>
                  <div class="smart-clickable:highlight-on-hover" style="padding: 0.5rem;">
                    <strong>Article Title</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">Click link to navigate</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Text Link</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Simple text link with content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <a href="#" style="display: inline-block; padding: 0.5rem 1rem; background: var(--color-brand); color: white; text-decoration: none; border-radius: 0.25rem;">
                      Open Project
                    </a>
                  </template>
                  <div class="smart-clickable:fade-on-hover" style="padding: 0.5rem; transition: opacity 0.2s;">
                    <strong>Project Card</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">Styled link button</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Styled Link</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Link styled as button</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Icon Clickables -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Icon Clickables</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <button style="background: none; border: none; cursor: pointer; padding: 0.5rem;">
                      ⚙️
                    </button>
                  </template>
                  <div class="smart-clickable:glow-on-hover" style="padding: 0.5rem;">
                    <strong>Settings Panel</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">Click gear to configure</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Icon Button</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Icon-only clickable element</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <div style="cursor: pointer; padding: 0.5rem; border-radius: 50%; background: var(--color-brand); color: white; width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center;">
                      +
                    </div>
                  </template>
                  <div class="smart-clickable:bounce-on-hover" style="padding: 0.5rem;">
                    <strong>Add Item</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">Click plus to add</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Custom Icon</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Custom styled clickable icon</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Complex Content -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Complex Content</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button size="small">Action</Button>
                  </template>
                  <div style="padding: 0.5rem;">
                    <div class="smart-clickable:underline-on-hover" style="font-weight: 600; margin-bottom: 0.25rem;">
                      Multi-element Content
                    </div>
                    <div class="smart-clickable:fade-on-hover" style="color: var(--color-secondary); font-size: 0.875rem; margin-bottom: 0.25rem;">
                      Multiple elements with different effects
                    </div>
                    <div class="smart-clickable:scale-on-hover" style="font-size: 0.75rem; color: var(--color-brand);">
                      Each can have its own hover behavior
                    </div>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Multi-Element</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Multiple content elements with different effects</div>
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
        story: 'Comprehensive showcase of all SmartClickable variants including different clickable elements (buttons, links, icons) and various content combinations with hover effects.',
      },
    },
  },
}

// 3. ALL STATES STORY
export const AllStates: Story = {
  render: () => ({
    components: { SmartClickable, Button },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All SmartClickable States</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Interactive States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Interactive States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button>Normal State</Button>
                  </template>
                  <div class="smart-clickable:underline-on-hover" style="padding: 0.5rem;">
                    <strong>Normal Content</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">Default interactive state</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Normal</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Default state with hover effects</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button disabled>Disabled State</Button>
                  </template>
                  <div style="padding: 0.5rem; opacity: 0.6;">
                    <strong>Disabled Content</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">No hover effects when disabled</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Disabled</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Disabled clickable with reduced opacity</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hover Effect States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Hover Effect States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button>Hover for Underline</Button>
                  </template>
                  <div class="smart-clickable:underline-on-hover" style="padding: 0.5rem;">
                    <strong>Underline Effect</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">Text gets underlined on hover</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Underline Effect</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Content gets underlined on hover</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button>Hover for Scale</Button>
                  </template>
                  <div class="smart-clickable:scale-on-hover" style="padding: 0.5rem; transition: transform 0.2s;">
                    <strong>Scale Effect</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">Content scales on hover</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Scale Effect</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Content scales up on hover</div>
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
        story: 'Demonstration of SmartClickable in different states including normal, disabled, and various hover effect states.',
      },
    },
  },
}

// 4. REAL WORLD USAGE STORY
export const RealWorldUsage: Story = {
  render: () => ({
    components: { SmartClickable, Button },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real World Usage Examples</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Project Cards -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Cards</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button color="brand">Download</Button>
                  </template>
                  <div style="padding: 0.75rem; border: 1px solid var(--color-divider); border-radius: 0.5rem; background: var(--color-raised-bg);">
                    <div class="smart-clickable:underline-on-hover" style="font-weight: 600; margin-bottom: 0.5rem;">
                      Awesome Mod v1.2.3
                    </div>
                    <div style="color: var(--color-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                      A fantastic mod that enhances gameplay
                    </div>
                    <div style="font-size: 0.75rem; color: var(--color-brand);">
                      1.2M downloads • Updated 2 days ago
                    </div>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Mod Card</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Project card with download action</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Items -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Navigation Items</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <a href="#" style="color: var(--color-brand); text-decoration: none; font-weight: 500;">
                      View Project →
                    </a>
                  </template>
                  <div style="padding: 0.5rem;">
                    <div class="smart-clickable:underline-on-hover" style="font-weight: 600; margin-bottom: 0.25rem;">
                      Project Navigation
                    </div>
                    <div style="color: var(--color-secondary); font-size: 0.875rem;">
                      Click link to navigate to project page
                    </div>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Link Navigation</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Navigation with content hover effects</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Panels -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Action Panels</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <button style="background: none; border: none; cursor: pointer; padding: 0.5rem; border-radius: 0.25rem; background: var(--color-button-bg);">
                      ⚙️ Settings
                    </button>
                  </template>
                  <div style="padding: 0.75rem; border: 1px solid var(--color-divider); border-radius: 0.5rem;">
                    <div class="smart-clickable:underline-on-hover" style="font-weight: 600; margin-bottom: 0.25rem;">
                      Instance Settings
                    </div>
                    <div style="color: var(--color-secondary); font-size: 0.875rem;">
                      Configure your game instance settings
                    </div>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Settings Panel</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Settings access with content preview</div>
                </div>
              </div>
            </div>
          </div>

          <!-- List Items -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">List Items</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button size="small">Select</Button>
                  </template>
                  <div style="padding: 0.5rem;">
                    <div class="smart-clickable:underline-on-hover" style="font-weight: 600; margin-bottom: 0.25rem;">
                      Minecraft 1.20.1
                    </div>
                    <div style="color: var(--color-secondary); font-size: 0.875rem;">
                      Latest stable version
                    </div>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Version Selection</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Selectable list item with hover effects</div>
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
        story: 'Real-world usage examples showing how SmartClickable is used in project cards, navigation items, action panels, and list items throughout the Modrinth interface.',
      },
    },
  },
}

// 5. EDGE CASES STORY
export const EdgeCases: Story = {
  render: () => ({
    components: { SmartClickable, Button },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Edge Cases & Boundary Conditions</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Empty Content -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Empty Content</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button>Action</Button>
                  </template>
                  <div style="padding: 1rem; min-height: 2rem; border: 1px dashed var(--color-divider); border-radius: 0.25rem;">
                    <!-- Empty content area -->
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">No Content</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">SmartClickable with empty content slot</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <!-- Empty clickable slot -->
                  </template>
                  <div style="padding: 0.5rem;">
                    <strong>Content without clickable</strong><br/>
                    <span style="color: var(--color-secondary); font-size: 0.875rem;">No clickable element provided</span>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">No Clickable</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Content without clickable element</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Nested SmartClickables -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Nested Components</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button>Outer Action</Button>
                  </template>
                  <div style="padding: 0.5rem; border: 1px solid var(--color-divider); border-radius: 0.25rem;">
                    <div class="smart-clickable:underline-on-hover" style="margin-bottom: 0.5rem;">
                      <strong>Outer Content</strong>
                    </div>
                    <SmartClickable>
                      <template #clickable>
                        <Button size="small">Inner Action</Button>
                      </template>
                      <div class="smart-clickable:scale-on-hover" style="padding: 0.25rem; background: var(--color-bg); border-radius: 0.25rem;">
                        Inner content with different effect
                      </div>
                    </SmartClickable>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Nested Components</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">SmartClickable inside SmartClickable</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Complex CSS Classes -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Complex CSS Classes</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <Button>Hover Me</Button>
                  </template>
                  <div style="padding: 0.5rem;">
                    <div class="smart-clickable:underline-on-hover smart-clickable:scale-on-hover smart-clickable:fade-on-hover" style="transition: all 0.2s;">
                      <strong>Multiple Effects</strong><br/>
                      <span style="color: var(--color-secondary); font-size: 0.875rem;">
                        This element has multiple smart-clickable classes
                      </span>
                    </div>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Multiple Classes</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Element with multiple smart-clickable effects</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Accessibility Considerations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Accessibility Considerations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <SmartClickable>
                  <template #clickable>
                    <button 
                      aria-label="Download project file" 
                      title="Download project file"
                      style="background: var(--color-brand); color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;"
                    >
                      📥 Download
                    </button>
                  </template>
                  <div style="padding: 0.5rem;">
                    <div class="smart-clickable:underline-on-hover" style="font-weight: 600; margin-bottom: 0.25rem;">
                      Accessible Button
                    </div>
                    <div style="color: var(--color-secondary); font-size: 0.875rem;">
                      Button with proper ARIA labels and title
                    </div>
                  </div>
                </SmartClickable>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">ARIA Labels</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Proper accessibility attributes</div>
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
        story: 'Edge cases and boundary conditions for SmartClickable including empty content, nested components, complex CSS classes, and accessibility considerations.',
      },
    },
  },
} 