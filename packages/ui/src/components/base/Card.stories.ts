import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Card from './Card.vue'
import Button from './Button.vue'
import Badge from './Badge.vue'
import {
  createStoryParameters,
  createTextArgType,
  commonA11yConfig
} from './story-utils'

// Icons for examples
import { HeartIcon, DownloadIcon, ShareIcon, ExternalIcon } from '@modrinth/assets'

const meta: Meta<typeof Card> = {
  title: 'Foundation/Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Example usage

This component is used in [version pages](https://github.com/modrinth/code/blob/main/apps/app-frontend/src/pages/project/Version.vue#L103) for metadata display, and in [charts](https://github.com/modrinth/code/blob/main/packages/ui/src/components/chart/CompactChart.vue#L5) for data visualization containers.

\`\`\`vue
<Card class="metadata-card">
  <h3 class="card-title">Metadata</h3>
  <div class="metadata">
    <div class="metadata-item">
      <span class="metadata-label">Release Channel</span>
      <Badge :type="version.version_type" />
    </div>
  </div>
</Card>
\`\`\`
        `,
      },
    },
    ...commonA11yConfig,
  },
  argTypes: {
    // ===== CONTENT =====
    default: createTextArgType('Card content (slot)', 'Content'),
  },
  args: {
    default: 'Card content',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ===== HELPER FUNCTIONS =====
const cardContentTypes = [
  {
    title: 'Simple Text',
    description: 'Basic text content in a card container. Perfect for basic information display.',
    content: `
      <div style="padding: 1rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: var(--color-base);">Basic Card</h4>
        <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
          Simple text content in a card container. Perfect for basic information display.
        </p>
      </div>
    `
  },
  {
    title: 'With Actions',
    description: 'Card with interactive elements like buttons and actions.',
    content: `
      <div style="padding: 1rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: var(--color-base);">Interactive Card</h4>
        <p style="margin: 0 0 1rem 0; color: var(--color-secondary); font-size: 0.875rem;">
          Card with interactive elements like buttons and actions.
        </p>
        <div style="display: flex; gap: 0.5rem;">
          <Button color="brand" size="sm">Primary</Button>
          <Button color="gray" size="sm">Secondary</Button>
        </div>
      </div>
    `
  },
  {
    title: 'With Badges',
    description: 'Card with status indicators and badges for quick information.',
    content: `
      <div style="padding: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
          <h4 style="margin: 0; color: var(--color-base);">Status Card</h4>
          <Badge type="approved" />
        </div>
        <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
          Card with status indicators and badges for quick information.
        </p>
      </div>
    `
  },
  {
    title: 'Rich Content',
    description: 'Complex card with avatar, metadata, and multiple content sections.',
    content: `
      <div style="padding: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-brand); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">
            AM
          </div>
          <div>
            <h4 style="margin: 0; color: var(--color-base); font-size: 0.875rem;">Awesome Mod</h4>
            <p style="margin: 0; color: var(--color-secondary); font-size: 0.75rem;">by ModAuthor</p>
          </div>
        </div>
        <p style="margin: 0 0 0.75rem 0; color: var(--color-secondary); font-size: 0.875rem;">
          Complex card with avatar, metadata, and multiple content sections.
        </p>
        <div style="display: flex; gap: 0.5rem;">
          <Badge type="approved" />
          <Badge type="creator" />
        </div>
      </div>
    `
  }
]

// 1. PLAYGROUND STORY (Always first)
export const Playground: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <div style="max-width: 400px;">
              <Card>
                <div style="padding: 1rem;">
                  <h3 style="margin: 0 0 0.5rem 0; color: var(--color-base);">Sample Card</h3>
                  <p style="margin: 0; color: var(--color-secondary);">This is a sample card to demonstrate the card component styling and layout.</p>
                </div>
              </Card>
            </div>
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            The Card component provides a consistent container for grouping related content with proper spacing and visual hierarchy.
          </p>
        </div>
      </div>
    `,
  }),
  ...createStoryParameters('Interactive playground for experimenting with the Card component.', 'fullscreen'),
}

// 2. CONTENT TYPES
export const ContentTypes: Story = {
  render: () => ({
    components: { Card, Button, Badge },
    setup() {
      return { cardContentTypes }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Content Types</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div v-for="contentType in cardContentTypes" :key="contentType.title" style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">{{ contentType.title }}</h3>
            <div style="margin-bottom: 1.5rem;">
              <Card v-html="contentType.content" />
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary);">
              {{ contentType.description }}
            </p>
          </div>
        </div>
      </div>
    `,
  }),
  ...createStoryParameters('Different content types that can be displayed within cards: simple text, interactive elements, badges, and rich content.', 'fullscreen'),
}

// 3. LAYOUT PATTERNS
export const LayoutPatterns: Story = {
  render: () => ({
    components: { Card, Button, Badge },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Layout Patterns</h2>
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Grid Layout</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
              <Card>
                <div style="padding: 1rem; text-align: center;">
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--color-base);">Card 1</h4>
                  <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">Grid item</p>
                </div>
              </Card>
              <Card>
                <div style="padding: 1rem; text-align: center;">
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--color-base);">Card 2</h4>
                  <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">Grid item</p>
                </div>
              </Card>
              <Card>
                <div style="padding: 1rem; text-align: center;">
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--color-base);">Card 3</h4>
                  <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">Grid item</p>
                </div>
              </Card>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">List Layout</h3>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <Card>
                <div style="padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <h4 style="margin: 0 0 0.25rem 0; color: var(--color-base);">List Item 1</h4>
                    <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">Description text</p>
                  </div>
                  <Badge type="approved" />
                </div>
              </Card>
              <Card>
                <div style="padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <h4 style="margin: 0 0 0.25rem 0; color: var(--color-base);">List Item 2</h4>
                    <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">Description text</p>
                  </div>
                  <Badge type="pending" />
                </div>
              </Card>
              <Card>
                <div style="padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <h4 style="margin: 0 0 0.25rem 0; color: var(--color-base);">List Item 3</h4>
                    <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">Description text</p>
                  </div>
                  <Badge type="rejected" />
                </div>
              </Card>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Nested Cards</h3>
            <Card>
              <div style="padding: 1.5rem;">
                <h4 style="margin: 0 0 1rem 0; color: var(--color-base);">Parent Card</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <Card>
                    <div style="padding: 1rem;">
                      <h5 style="margin: 0 0 0.5rem 0; color: var(--color-base); font-size: 0.875rem;">Nested Card 1</h5>
                      <p style="margin: 0; color: var(--color-secondary); font-size: 0.75rem;">Nested content</p>
                    </div>
                  </Card>
                  <Card>
                    <div style="padding: 1rem;">
                      <h5 style="margin: 0 0 0.5rem 0; color: var(--color-base); font-size: 0.875rem;">Nested Card 2</h5>
                      <p style="margin: 0; color: var(--color-secondary); font-size: 0.75rem;">Nested content</p>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    `,
  }),
  ...createStoryParameters('Common layout patterns using cards: grid layouts, list layouts, and nested card structures.', 'fullscreen'),
}

// 4. REAL WORLD USAGE
export const RealWorldUsage: Story = {
  render: () => ({
    components: { Card, Button, Badge },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real World Usage</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Card</h3>
            <Card>
              <div style="padding: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                  <div style="width: 48px; height: 48px; border-radius: 0.5rem; background: var(--color-brand); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                    AM
                  </div>
                  <div style="flex: 1;">
                    <h4 style="margin: 0 0 0.25rem 0; color: var(--color-base);">Awesome Mod</h4>
                    <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">by ModAuthor</p>
                  </div>
                  <Badge type="approved" />
                </div>
                <p style="margin: 0 0 1rem 0; color: var(--color-secondary); font-size: 0.875rem;">
                  A fantastic mod that adds new features to your Minecraft experience. Compatible with the latest versions.
                </p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                  <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: var(--color-secondary);">
                    <span>1.2M downloads</span>
                    <span>Updated 2 days ago</span>
                  </div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                  <Button color="brand" size="sm">Download</Button>
                  <Button color="gray" size="sm">View Details</Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">User Profile</h3>
            <Card>
              <div style="padding: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                  <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--color-orange); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.25rem;">
                    JD
                  </div>
                  <div style="flex: 1;">
                    <h4 style="margin: 0 0 0.25rem 0; color: var(--color-base);">John Doe</h4>
                    <p style="margin: 0 0 0.5rem 0; color: var(--color-secondary); font-size: 0.875rem;">john.doe@example.com</p>
                    <div style="display: flex; gap: 0.5rem;">
                      <Badge type="admin" />
                      <Badge type="creator" />
                    </div>
                  </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: var(--color-bg); border-radius: 0.375rem;">
                  <div style="text-align: center;">
                    <div style="font-weight: 600; color: var(--color-base);">23</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Projects</div>
                  </div>
                  <div style="text-align: center;">
                    <div style="font-weight: 600; color: var(--color-base);">5.2M</div>
                    <div style="font-size: 0.75rem; color: var(--color-secondary);">Downloads</div>
                  </div>
                </div>
                <Button color="brand" size="sm" style="width: 100%;">View Profile</Button>
              </div>
            </Card>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Settings Panel</h3>
      <Card>
              <div style="padding: 1.5rem;">
                <h4 style="margin: 0 0 1rem 0; color: var(--color-base);">Project Settings</h4>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--color-bg); border-radius: 0.375rem;">
                    <div>
                      <div style="font-weight: 500; color: var(--color-base); margin-bottom: 0.25rem;">Visibility</div>
                      <div style="font-size: 0.875rem; color: var(--color-secondary);">Control who can see your project</div>
                    </div>
                    <Badge type="approved" />
                  </div>
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--color-bg); border-radius: 0.375rem;">
                    <div>
                      <div style="font-weight: 500; color: var(--color-base); margin-bottom: 0.25rem;">Comments</div>
                      <div style="font-size: 0.875rem; color: var(--color-secondary);">Allow users to comment</div>
                    </div>
                    <Badge type="approved" />
                  </div>
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--color-bg); border-radius: 0.375rem;">
                    <div>
                      <div style="font-weight: 500; color: var(--color-base); margin-bottom: 0.25rem;">Analytics</div>
                      <div style="font-size: 0.875rem; color: var(--color-secondary);">Track download statistics</div>
                    </div>
                    <Badge type="pending" />
                  </div>
                </div>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--color-divider);">
                  <Button color="brand" size="sm">Save Changes</Button>
                </div>
              </div>
      </Card>
          </div>
        </div>
      </div>
    `,
  }),
  ...createStoryParameters('Real-world usage examples showing cards in project listings, user profiles, and settings panels.', 'fullscreen'),
}

