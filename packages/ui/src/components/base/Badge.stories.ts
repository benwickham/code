import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Badge from './Badge.vue'

const meta: Meta<typeof Badge> = {
  title: 'Foundation/Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Example usage

This component is used in [project cards](https://github.com/modrinth/code/blob/main/packages/ui/src/components/base/ProjectCard.vue#L24) to show project status, and in [member management](https://github.com/modrinth/code/blob/main/apps/frontend/src/pages/organization/%5Bid%5D/settings/members.vue#L79) to display team member acceptance status.

\`\`\`vue
<Badge :type="project.status" />
<Badge v-if="member.accepted" type="accepted" />
<Badge v-else type="pending" />
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
        ],
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        // User roles
        'admin', 'moderator', 'creator',
        // Project statuses  
        'approved', 'approved-general', 'unlisted', 'withheld', 'private', 'scheduled', 'draft', 'archived', 'rejected', 'processing',
        // Team member statuses
        'accepted', 'pending',
        // Transaction statuses
        'processed', 'failed', 'returned',
        // Report status
        'closed',
        // Custom
        'custom-type'
      ],
      description: 'Badge type determining icon and default color',
      table: {
        category: 'Content',
        type: { summary: 'string' },
      },
    },
    color: {
      control: 'select',
      options: [undefined, 'red', 'orange', 'green', 'blue', 'purple', 'gray'],
      description: 'Override default color (optional)',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined (auto-determined)' },
      },
    },
  },
  args: {
    type: 'admin',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ===== HELPER FUNCTIONS =====
const badgeGroups = [
  {
    title: 'User Roles',
    color: 'var(--color-purple)',
    badges: [
      { type: 'admin', description: 'Modrinth team members' },
      { type: 'moderator', description: 'Community moderators' },
      { type: 'creator', description: 'Project creators' }
    ]
  },
  {
    title: 'Project Status',
    color: 'var(--color-blue)',
    badges: [
      { type: 'approved', description: 'Public & searchable' },
      { type: 'unlisted', description: 'Hidden from search' },
      { type: 'private', description: 'Team only access' },
      { type: 'draft', description: 'Work in progress' },
      { type: 'archived', description: 'No longer maintained' },
      { type: 'withheld', description: 'Temporarily hidden' },
      { type: 'scheduled', description: 'Scheduled for release' }
    ]
  },
  {
    title: 'Review Process',
    color: 'var(--color-orange)',
    badges: [
      { type: 'pending', description: 'Awaiting review' },
      { type: 'processing', description: 'Under review' },
      { type: 'approved-general', description: 'Approved' },
      { type: 'rejected', description: 'Declined' }
    ]
  },
  {
    title: 'Transactions & Reports',
    color: 'var(--color-green)',
    badges: [
      { type: 'processed', description: 'Payment completed' },
      { type: 'failed', description: 'Payment failed' },
      { type: 'returned', description: 'Payment returned' },
      { type: 'closed', description: 'Report resolved' }
    ]
  }
]

const createBadgeGrid = (badges: typeof badgeGroups) => `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
    ${badges.map(group => `
      <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
        <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">${group.title}</h3>
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          ${group.badges.map(badge => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
              <Badge type="${badge.type}" />
              <div style="text-align: right; flex: 1; margin-left: 1rem;">
                <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem; text-transform: capitalize;">${badge.type.replace('-', ' ')}</div>
                <div style="font-size: 0.75rem; color: var(--color-secondary);">${badge.description}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  </div>
`

// 1. PLAYGROUND STORY (Always first)
export const Playground: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <Badge v-bind="args" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Use the controls panel to experiment with different badge types and color overrides. Test all 20+ predefined types and custom colors.
          </p>
        </div>
      </div>
    `,
  }),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Interactive playground for experimenting with all badge types and color combinations.',
      },
    },
  },
}

// 2. ALL BADGE TYPES
export const AllTypes: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return { badgeGroups }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All Badge Types</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          <div v-for="group in badgeGroups" :key="group.title" style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">{{ group.title }}</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div v-for="badge in group.badges" :key="badge.type" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Badge :type="badge.type" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem; text-transform: capitalize;">{{ badge.type.replace('-', ' ') }}</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">{{ badge.description }}</div>
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
        story: 'Complete showcase of all 20+ badge types organized by category with semantic meanings and use cases.',
      },
    },
  },
}

// 4. REAL WORLD USAGE
export const RealWorldUsage: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Real World Usage</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 2.5rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">User Profile</h3>
            <div style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--color-bg); border-radius: 0.375rem; border: 1px solid var(--color-divider);">
              <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-brand); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">
                JD
              </div>
              <div style="flex: 1;">
                <div style="font-weight: 600; margin-bottom: 0.25rem; color: var(--color-base);">John Doe</div>
                <div style="display: flex; gap: 0.5rem;">
                  <Badge type="admin" />
                  <Badge type="creator" />
                </div>
              </div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Project Card</h3>
            <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.375rem; border: 1px solid var(--color-divider);">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem;">
                <div style="flex: 1;">
                  <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; color: var(--color-base);">Awesome Mod</h4>
                  <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <Badge type="approved" />
                    <Badge type="processing" />
                  </div>
                </div>
              </div>
              <p style="margin: 0; color: var(--color-secondary); font-size: 0.875rem;">
                A fantastic mod with new features. Listed and under review for latest update.
              </p>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Transaction List</h3>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--color-bg); border-radius: 0.375rem; border: 1px solid var(--color-divider);">
                <span style="font-size: 0.875rem; color: var(--color-base);">Payment #1234</span>
                <Badge type="processed" />
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--color-bg); border-radius: 0.375rem; border: 1px solid var(--color-divider);">
                <span style="font-size: 0.875rem; color: var(--color-base);">Payment #1235</span>
                <Badge type="pending" />
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--color-bg); border-radius: 0.375rem; border: 1px solid var(--color-divider);">
                <span style="font-size: 0.875rem; color: var(--color-base);">Payment #1236</span>
                <Badge type="failed" />
              </div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Team Management</h3>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: var(--color-bg); border-radius: 0.375rem; border: 1px solid var(--color-divider);">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-orange); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.75rem;">
                  AM
                </div>
                <div style="flex: 1;">
                  <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base); font-size: 0.875rem;">Alice Manager</div>
                  <Badge type="moderator" />
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: var(--color-bg); border-radius: 0.375rem; border: 1px solid var(--color-divider);">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-blue); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.75rem;">
                  BD
                </div>
                <div style="flex: 1;">
                  <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base); font-size: 0.875rem;">Bob Developer</div>
                  <Badge type="creator" />
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
        story: 'Real-world usage examples showing badges in user profiles, project cards, transaction lists, and team management interfaces.',
      },
    },
  },
}

// 3. CUSTOM COLORS
export const CustomColors: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Custom Color Overrides</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Default Colors</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Badge type="custom-type" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Auto-determined</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Semantic color by type</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Status Colors</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Badge type="custom-type" color="green" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Green</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Success, approved, active</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Badge type="custom-type" color="red" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Red</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Error, rejected, critical</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Badge type="custom-type" color="orange" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Orange</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Warning, pending, review</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Brand Colors</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Badge type="custom-type" color="blue" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Blue</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Information, links, neutral</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Badge type="custom-type" color="purple" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Purple</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Special features, premium</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <Badge type="custom-type" color="gray" />
                <div style="text-align: right; flex: 1; margin-left: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.25rem;">Gray</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary);">Neutral, inactive, disabled</div>
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
        story: 'Custom color overrides for badges when you need specific branding, categorization, or semantic meaning beyond the default type colors.',
      },
    },
  },
}

// 3. ALL STATES STORY
export const AllStates: Story = {
  render: () => ({
    components: { Badge },
    setup() {
      return { badgeGroups }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">All Badge States</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Active vs Inactive States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Active States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Active Project States</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Visible and accessible to users</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="approved" />
                  <Badge type="approved-general" />
                  <Badge type="unlisted" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Active User Roles</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Current platform permissions</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="admin" />
                  <Badge type="moderator" />
                  <Badge type="creator" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Active Transactions</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Completed payment states</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="processed" />
                  <Badge type="accepted" />
                  <Badge type="closed" />
                </div>
              </div>
            </div>
          </div>

          <!-- Inactive States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Inactive States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Hidden Project States</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Not accessible or restricted</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="private" />
                  <Badge type="archived" />
                  <Badge type="withheld" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Draft & Rejected States</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Work in progress or declined</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="draft" />
                  <Badge type="rejected" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Failed States</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Unsuccessful operations</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="failed" />
                  <Badge type="returned" />
                </div>
              </div>
            </div>
          </div>

          <!-- Pending & Processing States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Transitional States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Waiting States</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Awaiting action or approval</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="pending" />
                  <Badge type="scheduled" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Processing States</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Currently being reviewed</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="processing" />
                </div>
              </div>
            </div>
          </div>

          <!-- Color Override States -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Color Override States</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Default vs Custom Colors</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Same type with different colors</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                  <Badge type="custom-type" />
                  <Badge type="custom-type" color="red" />
                  <Badge type="custom-type" color="green" />
                </div>
                <div style="font-size: 0.75rem; color: var(--color-secondary);">
                  Same content, different semantic meanings
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Context-based Overrides</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Type maintains semantic but color adapts</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                  <Badge type="admin" />
                  <Badge type="admin" color="purple" />
                  <Badge type="admin" color="gray" />
                </div>
                <div style="font-size: 0.75rem; color: var(--color-secondary);">
                  Admin role in different contexts
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
        story: 'Demonstrates all possible states of badges including active/inactive states, transitional states, and color override variations.',
      },
    },
  },
}

// 5. EDGE CASES STORY
export const EdgeCases: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Badge Edge Cases</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2.5rem;">
          
          <!-- Invalid & Missing Props -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Invalid & Missing Props</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Unknown Badge Types</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Graceful handling of invalid types</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="nonexistent-type" />
                  <Badge type="invalid_badge" />
                  <Badge type="unknown-status" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Invalid Color Overrides</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Non-standard color values</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="admin" color="invalid-color" />
                  <Badge type="admin" color="pink" />
                  <Badge type="admin" color="" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Empty & Null Values</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Edge case prop values</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="" />
                  <Badge />
                </div>
              </div>
            </div>
          </div>

          <!-- Special Characters & Content -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Special Characters & Content</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Special Character Types</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Non-alphanumeric badge types</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="type-with-dashes" />
                  <Badge type="type_with_underscores" />
                  <Badge type="type.with.dots" />
                  <Badge type="type@symbol" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Unicode & International</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Non-ASCII characters in types</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="управляющий" />
                  <Badge type="管理员" />
                  <Badge type="مدير" />
                  <Badge type="emoji🎮type" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Long Type Names</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Extremely long badge type strings</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="extremely-long-badge-type-name-that-exceeds-normal-length-expectations" />
                  <Badge type="very_very_very_long_badge_type_with_underscores_and_detailed_description" />
                </div>
              </div>
            </div>
          </div>

          <!-- Case Sensitivity & Formatting -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Case Sensitivity & Formatting</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Case Variations</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Different capitalization patterns</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="admin" />
                  <Badge type="ADMIN" />
                  <Badge type="Admin" />
                  <Badge type="aDmIn" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Whitespace Handling</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Spaces and whitespace in types</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type=" admin " />
                  <Badge type="admin user" />
                  <Badge type="admin  double  space" />
                  <Badge type="admin	tab" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Numeric Types</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Numeric values as badge types</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="123" />
                  <Badge type="0" />
                  <Badge type="-1" />
                  <Badge type="3.14" />
                </div>
              </div>
            </div>
          </div>

          <!-- Display & Layout Edge Cases -->
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <h3 style="margin: 0 0 1.75rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">Display & Layout Edge Cases</h3>
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Nested Context</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Badges in various container contexts</div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; background: var(--color-brand); border-radius: 0.25rem;">
                  <span style="color: white; font-size: 0.875rem;">Dark background:</span>
                  <Badge type="admin" />
                  <Badge type="approved" />
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Multiple Badge Groups</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">Large collections of badges</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.25rem; max-height: 4rem; overflow: hidden;">
                  <Badge type="admin" />
                  <Badge type="moderator" />
                  <Badge type="creator" />
                  <Badge type="approved" />
                  <Badge type="pending" />
                  <Badge type="processed" />
                  <Badge type="accepted" />
                  <Badge type="closed" />
                  <Badge type="draft" />
                  <Badge type="archived" />
                </div>
                <div style="font-size: 0.75rem; color: var(--color-secondary); margin-top: 0.5rem;">
                  +10 more badges (overflow handling)
                </div>
              </div>
              <div style="padding: 1rem; background: var(--color-bg); border-radius: 0.5rem; border: 1px solid var(--color-divider);">
                <div style="margin-bottom: 1rem;">
                  <div style="font-weight: 500; font-size: 0.875rem; color: var(--color-base); margin-bottom: 0.5rem;">Accessibility Context</div>
                  <div style="font-size: 0.75rem; color: var(--color-secondary); margin-bottom: 1rem;">High contrast and screen reader scenarios</div>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <Badge type="admin" color="gray" />
                  <Badge type="moderator" color="gray" />
                  <Badge type="creator" color="gray" />
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
        story: 'Edge cases and stress testing for the Badge component including invalid props, special characters, case sensitivity, and complex display scenarios.',
      },
    },
  },
}



