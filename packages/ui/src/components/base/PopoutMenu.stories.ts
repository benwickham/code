import type { Meta, StoryObj } from '@storybook/vue3-vite'
import PopoutMenu from './PopoutMenu.vue'
import Button from './Button.vue'
import { MoreHorizontalIcon } from '@modrinth/assets'

const meta: Meta<typeof PopoutMenu> = {
  title: 'Foundation/Layout/PopoutMenu',
  component: PopoutMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Example usage

This component is used to create dropdown menus with proper focus management throughout the application.

\`\`\`vue
<PopoutMenu tooltip="More options">
  <MoreHorizontalIcon />
  <template #menu>
    <Button>Option 1</Button>
    <Button>Option 2</Button>
    <Button>Option 3</Button>
  </template>
</PopoutMenu>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    dropdownId: {
      control: 'text',
      description: 'Unique identifier for the dropdown',
      table: { category: 'Content' },
    },
    dropdownClass: {
      control: 'text',
      description: 'CSS class for the dropdown',
      table: { category: 'Appearance' },
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip text for the trigger button',
      table: { category: 'Content' },
    },
    default: {
      description: 'Default slot for the trigger content',
      table: { category: 'Content' },
    },
    menu: {
      description: 'Menu slot for the dropdown content',
      table: { category: 'Content' },
    },
  },
  args: {
    tooltip: 'More options',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => ({
    components: { PopoutMenu, Button, MoreHorizontalIcon },
    setup() {
      const handleEdit = () => alert('Edit clicked!')
      const handleShare = () => alert('Share clicked!')
      const handleDelete = () => alert('Delete clicked!')
      return { args, handleEdit, handleShare, handleDelete }
    },
    template: `
      <div>
        <style>
          .popout-menu-content {
            display: flex;
            flex-direction: column;
            min-width: 150px;
            gap: var(--gap-xs);
          }
          
          .menu-button {
            width: 100%;
            justify-content: flex-start;
            padding: var(--gap-sm) var(--gap-md);
            border-radius: var(--radius-sm);
            transition: background-color 0.2s ease;
          }
        </style>
        <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
          <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
          <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
            <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
              <PopoutMenu v-bind="args" class="btn">
                <MoreHorizontalIcon class="w-5 h-5" />
                <template #menu>
                  <div class="popout-menu-content">
                    <Button @click="handleEdit" transparent class="menu-button">
                      <span>Edit</span>
                    </Button>
                    <Button @click="handleShare" transparent class="menu-button">
                      <span>Share</span>
                    </Button>
                    <Button @click="handleDelete" transparent color="red" class="menu-button">
                      <span>Delete</span>
                    </Button>
                  </div>
                </template>
              </PopoutMenu>
            </div>
            <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
              Click the menu button to see the dropdown. Use the controls panel to experiment with different properties.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for experimenting with PopoutMenu dropdown functionality.',
      },
    },
  },
} 