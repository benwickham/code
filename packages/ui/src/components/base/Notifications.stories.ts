import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Notifications from './Notifications.vue'
import Button from './Button.vue'
import { ref } from 'vue'

const meta: Meta<typeof Notifications> = {
    title: 'Foundation/Feedback/Notifications',
    component: Notifications,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
## Example usage

This component is used to display toast notifications throughout the application.

\`\`\`vue
<Notifications ref="notifications" :sidebar="false" />

// To add a notification:
notifications.value.addNotification({
  title: 'Success!',
  text: 'Operation completed successfully',
  type: 'success'
})
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        sidebar: {
            control: 'boolean',
            description: 'Whether to adjust position for sidebar layout',
            table: { category: 'Layout' },
        },
    },
    args: {
        sidebar: false,
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: (args) => ({
        components: { Notifications, Button },
        setup() {
            const notificationsRef = ref()

            const addSuccessNotification = () => {
                notificationsRef.value?.addNotification({
                    title: 'Success!',
                    text: 'Operation completed successfully',
                    type: 'success'
                })
            }

            const addErrorNotification = () => {
                notificationsRef.value?.addNotification({
                    title: 'Error!',
                    text: 'Something went wrong',
                    type: 'error'
                })
            }

            const addWarningNotification = () => {
                notificationsRef.value?.addNotification({
                    title: 'Warning!',
                    text: 'Please check your input',
                    type: 'warn'
                })
            }

            const addInfoNotification = () => {
                notificationsRef.value?.addNotification({
                    title: 'Info',
                    text: 'Here is some information',
                    type: 'info'
                })
            }

            return {
                args,
                notificationsRef,
                addSuccessNotification,
                addErrorNotification,
                addWarningNotification,
                addInfoNotification
            }
        },
        template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
            <Button @click="addSuccessNotification">Add Success</Button>
            <Button @click="addErrorNotification">Add Error</Button>
            <Button @click="addWarningNotification">Add Warning</Button>
            <Button @click="addInfoNotification">Add Info</Button>
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); text-align: center; line-height: 1.5;">
            Click the buttons to add different types of notifications. They will appear in the bottom-right corner and auto-dismiss after 30 seconds.
          </p>
        </div>
        <Notifications ref="notificationsRef" v-bind="args" />
      </div>
    `,
    }),
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground for experimenting with different notification types and behaviors.',
            },
        },
    },
} 