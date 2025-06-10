import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Avatar from './Avatar.vue'

const meta: Meta<typeof Avatar> = {
    title: 'Foundation/Data Display/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to display user avatars and project icons throughout the application.

\`\`\`vue
<Avatar 
  src="https://example.com/avatar.jpg"
  alt="User avatar"
  size="md"
  :circle="true"
/>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        src: {
            control: 'text',
            description: 'Image source URL',
            table: { category: 'Content' },
        },
        alt: {
            control: 'text',
            description: 'Alternative text for the image',
            table: { category: 'Content' },
        },
        size: {
            control: 'select',
            options: ['xxs', 'xs', 'sm', 'md', 'lg', '2rem', '3rem', '4rem'],
            description: 'Size preset or custom CSS size',
            table: { category: 'Appearance' },
        },
        circle: {
            control: 'boolean',
            description: 'Whether to display as a circle',
            table: { category: 'Appearance' },
        },
        noShadow: {
            control: 'boolean',
            description: 'Whether to disable the shadow',
            table: { category: 'Appearance' },
        },
        raised: {
            control: 'boolean',
            description: 'Whether to use raised background',
            table: { category: 'Appearance' },
        },
        tintBy: {
            control: 'text',
            description: 'String to generate color tint from',
            table: { category: 'Appearance' },
        },
        loading: {
            control: 'select',
            options: ['eager', 'lazy'],
            description: 'Image loading strategy',
            table: { category: 'Performance' },
        },
    },
    args: {
        src: '',
        alt: 'Avatar',
        size: 'md',
        circle: false,
        noShadow: false,
        raised: false,
        loading: 'eager',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { Avatar },
        setup() {
            return { args }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <Avatar v-bind="args" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Use the controls panel to experiment with different sizes, shapes, and properties. When no src is provided, a default Modrinth logo is shown.
          </p>
        </div>
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with Avatar properties and fallback states.',
            },
        },
    },
}

// 5. EDGE CASES STORY
export const EdgeCases: Story = {
    render: () => ({
        components: { Avatar },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Edge Cases & Boundary Conditions</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Invalid URLs and Error States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Invalid URLs and Error States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://invalid-domain-that-does-not-exist.com/avatar.png" alt="Invalid URL" size="lg" tint-by="error-fallback" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">404 Error</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Invalid Domain</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Falls back to tinted logo</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="" alt="" size="lg" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Empty Props</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Empty Src and Alt</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Minimal prop configuration</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Extreme Size Scenarios -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Extreme Size Scenarios</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Tiny avatar" size="0.5rem" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">0.5rem</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Extremely Small</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Below practical visibility</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Large avatar" size="8rem" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">8rem</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Extremely Large</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Performance considerations</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Complex Tint Scenarios -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Complex Tint Scenarios</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="Special chars" size="lg" tint-by="!@#$%^&*()" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Special Chars</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Special Characters</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Non-alphanumeric tint source</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="Unicode tint" size="lg" tint-by="🎮🎯🎨" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Unicode</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Unicode Emojis</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Emoji-based tint generation</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Accessibility Edge Cases -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Accessibility Edge Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Very long descriptive alt text for screen readers" size="lg" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Long Alt</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Long Alt Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Screen reader considerations</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="测试中文 テスト日本語" size="lg" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Multilingual</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">International Alt Text</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Multi-language support</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Complex Property Combinations -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Complex Property Combinations</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://invalid-url.com/image.jpg" alt="Failed with all options" size="xxs" :circle="true" :no-shadow="true" :raised="true" tint-by="complex-fallback" loading="lazy" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">All Props</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">All Properties Combined</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Invalid src with all other props</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Valid src with tint" size="lg" :circle="true" tint-by="should-be-ignored" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Tint + Src</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Valid Src with Tint</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Should ignore tint when src is valid</div>
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
                story: 'Edge cases and boundary conditions for Avatar including invalid URLs, extreme sizes, empty props, complex tint scenarios, accessibility considerations, and complex property combinations.',
            },
        },
    },
}

// 2. ALL VARIANTS STORY
export const AllVariants: Story = {
    render: () => ({
        components: { Avatar },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All Avatar Variants</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Size Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Size Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Extra Extra Small" size="xxs" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">xxs</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Extra Extra Small</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Compact inline contexts</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Extra Small" size="xs" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">xs</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Extra Small</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Small list items and comments</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Small" size="sm" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">sm</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Small</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Standard list contexts</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Medium" size="md" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">md</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Medium</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Default size for most uses</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Large" size="lg" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">lg</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Large</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Profile pages and headers</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Custom Size Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Custom Size Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="2rem Custom" size="2rem" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">2rem</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Custom 2rem</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Precise size control</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="3rem Custom" size="3rem" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">3rem</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Custom 3rem</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Medium custom size</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="4rem Custom" size="4rem" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">4rem</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Custom 4rem</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Large custom displays</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Shape Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Shape Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Square Avatar" size="lg" :circle="false" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Square</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Square Shape</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Project icons and logos</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Circular Avatar" size="lg" :circle="true" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Circle</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Circular Shape</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">User avatars and profiles</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Appearance Options -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Appearance Options</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="With Shadow" size="lg" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Default</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">With Shadow</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Standard appearance with shadow</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="No Shadow" size="lg" :no-shadow="true" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">No Shadow</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">No Shadow</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Flat appearance without shadow</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Raised Background" size="lg" :raised="true" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Raised</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Raised Background</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Enhanced elevation appearance</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tint Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Tint Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="No Tint" size="lg" tint-by="" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">No Tint</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Default Modrinth</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Standard Modrinth logo fallback</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="Project Tint" size="lg" tint-by="minecraft" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Project</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Project Tint</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Color generated from project name</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="User Tint" size="lg" tint-by="user-12345" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">User</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">User Tint</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Color generated from user ID</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Loading Variants -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Loading Strategy Variants</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Eager Loading" size="lg" loading="eager" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Eager</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Eager Loading</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Immediate image loading</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Lazy Loading" size="lg" loading="lazy" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Lazy</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Lazy Loading</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Deferred image loading</div>
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
                story: 'Comprehensive showcase of all Avatar variants including size presets, custom sizes, shapes, appearance options, tint colors, and loading strategies.',
            },
        },
    },
}

// 3. ALL STATES STORY
export const AllStates: Story = {
    render: () => ({
        components: { Avatar },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All Avatar States</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Image Loading States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Image Loading States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Successfully loaded" size="lg" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Success</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Successfully Loaded</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Valid image URL with successful load</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://invalid-url-that-will-fail-to-load.com/avatar.jpg" alt="Failed to load" size="lg" tint-by="fallback-user" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Error</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Failed to Load</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Invalid URL falls back to tinted logo</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="" alt="No source provided" size="lg" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">No Source</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">No Source Provided</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Empty src shows default Modrinth logo</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Fallback States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Fallback States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="Default fallback" size="lg" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Default</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Default Fallback</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Standard Modrinth logo</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="Tinted fallback" size="lg" tint-by="minecraft-project" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Tinted</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Tinted Fallback</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Color-tinted Modrinth logo</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="User tinted" size="lg" tint-by="user-abc123" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">User Tinted</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">User Tinted</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">User-specific color generation</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Background Context States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Background Context States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Normal background" size="lg" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Normal</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Normal Background</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Standard background with shadow</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-raised-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Raised background" size="lg" :raised="true" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Raised</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Raised Background</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Elevated appearance context</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-button-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Button background" size="lg" :no-shadow="true" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Button</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Button Background</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Flat appearance for button contexts</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Size Context States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Size Context States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="List context" size="xs" />
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="List context" size="xs" />
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="List context" size="xs" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">List</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">List Context</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Multiple small avatars in list</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Card context" size="md" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Project Name</span>
                    <span style="font-size: 0.75rem; color: var(--color-secondary);">by Author</span>
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Card Context</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Medium avatar with text content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Profile context" size="4rem" :circle="true" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Profile</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Profile Context</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Large circular avatar for profiles</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Shape Context States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Shape Context States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="User avatar" size="lg" :circle="true" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">User Profile</span>
                    <span style="font-size: 0.75rem; color: var(--color-secondary);">Personal avatar</span>
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">User Context</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Circular for user profiles</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/data/AANobbMI/icon.png" alt="Project icon" size="lg" :circle="false" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Project Name</span>
                    <span style="font-size: 0.75rem; color: var(--color-secondary);">Mod project</span>
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Project Context</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Square for project icons</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Loading Strategy States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Loading Strategy States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Eager loading" size="lg" loading="eager" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Eager</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Eager Loading</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Immediately loaded for above-fold content</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Lazy loading" size="lg" loading="lazy" />
                  <span style="font-size: 0.75rem; color: var(--color-secondary);">Lazy</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Lazy Loading</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Deferred loading for performance</div>
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
                story: 'Comprehensive showcase of all Avatar states including loading success/error states, fallback conditions, background contexts, size contexts, shape contexts, and loading strategies.',
            },
        },
    },
}

// 4. REAL WORLD USAGE STORY
export const RealWorldUsage: Story = {
    render: () => ({
        components: { Avatar },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real World Usage</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Project Cards -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Cards</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/data/AANobbMI/icon.png" alt="Sodium" size="lg" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Sodium</span>
                    <span style="font-size: 0.875rem; color: var(--color-secondary);">A modern rendering engine for Minecraft</span>
                    <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem;">
                      <span style="padding: 0.25rem 0.5rem; background: var(--color-brand); color: white; border-radius: 0.25rem; font-size: 0.75rem;">Mod</span>
                      <span style="padding: 0.25rem 0.5rem; background: var(--color-green); color: white; border-radius: 0.25rem; font-size: 0.75rem;">Client</span>
                    </div>
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Project Card Layout</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Square avatar with project metadata</div>
                  <a href="https://github.com/modrinth/code/search?q=ProjectCard" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 ProjectCard Components</a>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/data/P7dR8mSH/icon.png" alt="Fabric API" size="lg" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Fabric API</span>
                    <span style="font-size: 0.875rem; color: var(--color-secondary);">Essential hooks for modding with Fabric</span>
                    <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem;">
                      <span style="padding: 0.25rem 0.5rem; background: var(--color-orange); color: white; border-radius: 0.25rem; font-size: 0.75rem;">Library</span>
                      <span style="padding: 0.25rem 0.5rem; background: var(--color-purple); color: white; border-radius: 0.25rem; font-size: 0.75rem;">Required</span>
                    </div>
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Browse Page Cards</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Search result project cards</div>
                  <a href="https://github.com/modrinth/code/blob/master/apps/frontend/src/pages/browse.vue" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 Browse Page</a>
                </div>
              </div>
            </div>
          </div>

          <!-- User Profile Components -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">User Profile Components</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="JellySquid" size="4rem" :circle="true" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 1.5rem; font-weight: 600; color: var(--color-base);">JellySquid</span>
                    <span style="font-size: 1rem; color: var(--color-secondary);">Mod Developer</span>
                    <span style="font-size: 0.875rem; color: var(--color-secondary);">Created Sodium, Lithium, and Phosphor</span>
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">User Profile Header</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Large circular user avatar</div>
                  <a href="https://github.com/modrinth/code/search?q=user+profile" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 User Profile Pages</a>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="JellySquid" size="sm" :circle="true" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">JellySquid</span>
                    <span style="font-size: 0.75rem; color: var(--color-secondary);">2 hours ago</span>
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Comment Author</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Small circular avatar in comments</div>
                  <a href="https://github.com/modrinth/code/search?q=comment+author" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 Comment Components</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Team Member Lists -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Team Member Lists</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Project Owner" size="md" :circle="true" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">JellySquid</span>
                    <span style="font-size: 0.75rem; color: var(--color-secondary);">Owner</span>
                  </div>
                  <span style="padding: 0.25rem 0.5rem; background: var(--color-brand); color: white; border-radius: 0.25rem; font-size: 0.75rem;">Admin</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Project Team Owner</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Medium circular with role badge</div>
                  <a href="https://github.com/modrinth/code/search?q=team+member" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 Team Management</a>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <Avatar src="https://cdn.modrinth.com/user/NoriSilverware/avatar" alt="Team Member" size="md" :circle="true" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">NoriSilverware</span>
                    <span style="font-size: 0.75rem; color: var(--color-secondary);">Maintainer</span>
                  </div>
                  <span style="padding: 0.25rem 0.5rem; background: var(--color-green); color: white; border-radius: 0.25rem; font-size: 0.75rem;">Member</span>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Project Team Member</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Standard team member display</div>
                  <a href="https://github.com/modrinth/code/search?q=project+members" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 Project Members</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Header -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Navigation Header</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 2rem;">
                  <div style="display: flex; align-items: center; gap: 1rem;">
                    <Avatar tint-by="modrinth" alt="Modrinth" size="sm" />
                    <span style="font-size: 1.25rem; font-weight: 600; color: var(--color-base);">Modrinth</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 1rem;">
                    <span style="color: var(--color-secondary);">Browse</span>
                    <span style="color: var(--color-secondary);">Library</span>
                    <span style="color: var(--color-secondary);">Plus</span>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar src="https://cdn.modrinth.com/user/yQfCnB9V/avatar" alt="Current User" size="xs" :circle="true" />
                  <span style="font-size: 0.875rem; color: var(--color-base);">JellySquid</span>
                </div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Main Navigation</div>
                <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Brand logo and user avatar in header</div>
                <a href="https://github.com/modrinth/code/search?q=navigation+header" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 Navigation Components</a>
              </div>
            </div>
          </div>

          <!-- Fallback and Loading States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Fallback and Loading States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="Unnamed Project" size="lg" tint-by="project-without-icon" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Without Icon</span>
                    <span style="font-size: 0.875rem; color: var(--color-secondary);">Uses tinted fallback logo</span>
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Missing Project Icon</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Graceful fallback to tinted logo</div>
                  <a href="https://github.com/modrinth/code/search?q=avatar+fallback" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 Avatar Component</a>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <Avatar alt="Anonymous User" size="md" :circle="true" tint-by="anonymous-user" />
                  <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.875rem; font-weight: 500; color: var(--color-base);">Anonymous User</span>
                    <span style="font-size: 0.75rem; color: var(--color-secondary);">No profile picture available</span>
                  </div>
                </div>
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Missing User Avatar</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Default circular fallback</div>
                  <a href="https://github.com/modrinth/code/search?q=user+avatar" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 User Components</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Compact List Displays -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Compact List Displays</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <Avatar src="https://cdn.modrinth.com/data/AANobbMI/icon.png" alt="Sodium" size="xs" />
                  <span style="font-size: 0.875rem; color: var(--color-base);">Sodium</span>
                  <span style="padding: 0.125rem 0.25rem; background: var(--color-green); color: white; border-radius: 0.125rem; font-size: 0.625rem;">UPDATED</span>
                </div>
                <span style="font-size: 0.75rem; color: var(--color-secondary);">2 hours ago</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <Avatar src="https://cdn.modrinth.com/data/P7dR8mSH/icon.png" alt="Fabric API" size="xs" />
                  <span style="font-size: 0.875rem; color: var(--color-base);">Fabric API</span>
                  <span style="padding: 0.125rem 0.25rem; background: var(--color-orange); color: white; border-radius: 0.125rem; font-size: 0.625rem;">DEPENDENCY</span>
                </div>
                <span style="font-size: 0.75rem; color: var(--color-secondary);">1 day ago</span>
              </div>
              <div style="text-align: right; margin-top: 1rem;">
                <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Project Update Lists</div>
                <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 0.5rem;">Compact avatars in notification lists</div>
                <a href="https://github.com/modrinth/code/search?q=project+list" target="_blank" style="font-size: 0.75rem; color: var(--color-brand); text-decoration: none;">🔗 List Components</a>
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
                story: 'Real-world usage examples of Avatar component in project cards, user profiles, team members, navigation, and compact lists with actual Modrinth CDN images and GitHub repository links.',
            },
        },
    },
} 