import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import { defineComponent, h, ref } from 'vue'

// Import Tailwind CSS directives first
import './tailwind.css'

// Import Modrinth design system styles
import '@modrinth/assets/omorphia.scss'

// Add global styles for Storybook
const globalStyles = `
  body {
    margin: 0 !important;
    padding: 0 !important;
    background-color: var(--color-bg) !important;
    color: var(--color-base) !important;
    transition: background-color 0.2s ease, color 0.2s ease !important;
  }
  
  #storybook-root {
    margin: 0 !important;
    padding: 0 !important;
  }
`

// Inject global styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.textContent = globalStyles
  document.head.appendChild(styleElement)
}

// Import locale data for mocking
import enUSLocale from '../src/locales/en-US/index.json'

// Import and configure floating-vue
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

// Setup global mocks and utilities
setup((app) => {
  // Configure floating-vue with the same theme as the main app
  app.use(FloatingVue, {
    themes: {
      'ribbit-popout': {
        $extend: 'dropdown',
        placement: 'bottom-end',
        instantMove: true,
        distance: 8,
      },
    },
  })
  // Mock i18n translate function
  const mockTranslate = (key: string, params?: Record<string, any>) => {
    // Try to get the translation from the locale file
    const keys = key.split('.')
    let value: any = enUSLocale

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to key if not found
        return key
      }
    }

    // Handle parameter substitution
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey] || match
      })
    }

    return value || key
  }

  // Mock formatMessage function for @vintl/vintl
  const mockFormatMessage = (message: any, params?: Record<string, any>) => {
    // Handle message objects from defineMessages
    if (typeof message === 'object' && message.defaultMessage) {
      let text = message.defaultMessage
      if (params) {
        text = text.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
          return params[paramKey] || match
        })
      }
      return text
    }

    // Handle string keys
    if (typeof message === 'string') {
      return mockTranslate(message, params)
    }

    // Fallback
    return message?.id || message?.defaultMessage || 'Missing translation'
  }

  // Mock capitalizeString utility function
  const capitalizeString = (str: string) => {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  // Provide global mocks
  app.provide('$t', mockTranslate)
  app.provide('capitalizeString', capitalizeString)

  // Mock @vintl/vintl controller
  const mockVIntlController = {
    locale: ref('en-US'),
    messages: ref(enUSLocale),
    formatMessage: mockFormatMessage
  }

  app.provide('__vintl_controller', mockVIntlController)

  // Global properties for components that might use them
  app.config.globalProperties.$t = mockTranslate
  app.config.globalProperties.capitalizeString = capitalizeString

  // Mock router-link component
  app.component('router-link', defineComponent({
    name: 'MockRouterLink',
    props: {
      to: [String, Object],
      external: Boolean,
      class: String,
      style: [String, Object]
    },
    setup(props, { slots }) {
      return () => {
        const tag = props.external ? 'a' : 'span'
        const attrs = props.external && typeof props.to === 'string'
          ? { href: props.to, target: '_blank', rel: 'noopener noreferrer' }
          : {}

        return h(tag, {
          ...attrs,
          class: props.class,
          style: props.style,
          onClick: (e: Event) => {
            if (!props.external) {
              e.preventDefault()
              console.log('Router navigation to:', props.to)
            }
          }
        }, slots.default?.())
      }
    }
  }))

  // Mock useVIntl composable globally
  app.config.globalProperties.useVIntl = () => ({
    formatMessage: mockFormatMessage,
    locale: ref('en-US'),
    messages: ref(enUSLocale)
  })

  // Mock defineMessages function globally
  app.config.globalProperties.defineMessages = (messages: any) => messages
})

// Create global mocks for imports
globalThis.useVIntl = () => ({
  formatMessage: (message: any, params?: Record<string, any>) => {
    if (typeof message === 'object' && message.defaultMessage) {
      let text = message.defaultMessage
      if (params) {
        text = text.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
          return params[paramKey] || match
        })
      }
      return text
    }
    return message?.id || message?.defaultMessage || 'Missing translation'
  },
  locale: 'en-US',
  messages: enUSLocale
})

globalThis.defineMessages = (messages: any) => messages

// Theme decorator
const withTheme = (story: any, context: any) => {
  const theme = context.globals.theme || 'light'

  return {
    components: { story },
    setup() {
      // Apply theme class to document elements for global CSS variable inheritance
      const html = document.documentElement
      const body = document.body

      // Remove all theme classes
      const themeClasses = ['light-mode', 'dark-mode', 'oled-mode', 'retro-mode']
      themeClasses.forEach(cls => {
        html.classList.remove(cls)
        body.classList.remove(cls)
      })

      // Add the current theme class
      const themeClass = `${theme}-mode`
      html.classList.add(themeClass)
      body.classList.add(themeClass)

      return { theme }
    },
    template: `
      <div 
        :class="theme + '-mode'" 
        :data-theme="theme"
        style="width: 100%; background-color: var(--color-bg); color: var(--color-base); transition: all 0.2s ease; margin: -1rem; padding: 1rem; box-sizing: content-box;"
      >
        <div style="padding: 1rem;">
          <story />
        </div>
      </div>
    `
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we're using our theme system
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'oled', title: 'OLED' },
          { value: 'retro', title: 'Retro' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
}

export default preview
