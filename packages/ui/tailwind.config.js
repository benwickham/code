/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './.storybook/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                icon: 'var(--color-base)',
                // Text
                primary: 'var(--color-base)',
                contrast: 'var(--color-contrast)',
                secondary: 'var(--color-secondary)',
                inactive: 'var(--color-text-inactive)',
                dark: 'var(--color-text-dark)',
                inverted: 'var(--color-text-inverted)',
                heading: 'var(--color-heading)',
                red: 'var(--color-red)',
                orange: 'var(--color-orange)',
                purple: 'var(--color-purple)',
                bg: {
                    DEFAULT: 'var(--color-bg)',
                    red: 'var(--color-red-bg)',
                    orange: 'var(--color-orange-bg)',
                    green: 'var(--color-green-bg)',
                    blue: 'var(--color-blue-bg)',
                    purple: 'var(--color-purple-bg)',
                    raised: 'var(--color-raised-bg)',
                },
                highlight: {
                    DEFAULT: 'var(--color-brand-highlight)',
                    red: 'var(--color-red-highlight)',
                    orange: 'var(--color-orange-highlight)',
                    green: 'var(--color-green-highlight)',
                    blue: 'var(--color-blue-highlight)',
                    purple: 'var(--color-purple-highlight)',
                },
                divider: {
                    DEFAULT: 'var(--color-divider)',
                    dark: 'var(--color-divider-dark)',
                },
                brand: {
                    DEFAULT: 'var(--color-brand)',
                    red: 'var(--color-red)',
                    orange: 'var(--color-orange)',
                    green: 'var(--color-green)',
                    blue: 'var(--color-blue)',
                    purple: 'var(--color-purple)',
                    highlight: 'var(--color-brand-highlight)',
                    shadow: 'var(--color-brand-shadow)',
                    inverted: 'var(--color-accent-contrast)',
                },
                button: {
                    bg: 'var(--color-button-bg)',
                    text: 'var(--color-button-text)',
                    bgHover: 'var(--color-button-bg-hover)',
                    textHover: 'var(--color-button-text-hover)',
                    bgActive: 'var(--color-button-bg-active)',
                    textActive: 'var(--color-button-text-active)',
                    border: 'var(--color-button-border)',
                    bgSelected: 'var(--color-button-bg-selected)',
                    textSelected: 'var(--color-button-text-selected)',
                },
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
} 