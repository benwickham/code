import type { StorybookConfig } from '@storybook/vue3-vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.mdx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.(tsx?|jsx?)$/],
          include: [resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    defaultName: 'Overview',
  },
  typescript: {
    check: false,
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || []

    // Add Vue plugin for .vue file support
    config.plugins.push(vue())

    // Configure PostCSS with Tailwind CSS
    config.css = config.css || {}
    config.css.postcss = {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }

    // Add SVG component support
    config.plugins.push(svgLoader({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }))

    // Add virtual module plugin for @vintl/vintl mocking
    config.plugins.push({
      name: 'virtual-vintl',
      resolveId(id) {
        if (id === '@vintl/vintl') {
          return id
        }
      },
      load(id) {
        if (id === '@vintl/vintl') {
          return `
            export const useVIntl = () => ({
              formatMessage: (descriptor, values) => {
                if (typeof descriptor === 'string') return descriptor
                if (descriptor?.defaultMessage) return descriptor.defaultMessage
                if (descriptor?.id) return descriptor.id
                return 'Missing translation'
              }
            })
            export const defineMessages = (messages) => messages
            export default { useVIntl, defineMessages }
          `
        }
      },
    })

    // Configure aliases for workspace packages
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@modrinth/assets': resolve(__dirname, '../../../packages/assets'),
      '@modrinth/utils': resolve(__dirname, '../../../packages/utils'),
      '@': resolve(__dirname, '../src'),
    }

    return config
  },
}

export default config