/**
 * Shared utilities for Storybook stories
 * Reduces duplication and ensures consistency across component stories
 */

// ===== LAYOUT HELPERS =====
export const createStoryContainer = (title: string, description?: string) => `
  <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
    <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">${title}</h2>
    ${description ? `<p style="margin: 0 0 1.5rem 0; color: var(--color-secondary);">${description}</p>` : ''}
`

export const createSection = (title: string, content: string, description?: string) => `
  <div style="border: 1px solid var(--color-divider); border-radius: 0.5rem; padding: 1.5rem; background: var(--color-raised-bg);">
    <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; font-weight: 600; color: var(--color-base);">${title}</h3>
    ${description ? `<p style="margin: 0 0 1rem 0; font-size: 0.875rem; color: var(--color-secondary);">${description}</p>` : ''}
    ${content}
  </div>
`

export const createPlaygroundContainer = (componentSlot: string, description: string) => `
  <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
    <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
    <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
      <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
        ${componentSlot}
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
        ${description}
      </p>
    </div>
  </div>
`

// ===== GRID LAYOUTS =====
export const createGrid = (columns = 'repeat(auto-fit, minmax(300px, 1fr))', gap = '1.5rem') =>
  `display: grid; grid-template-columns: ${columns}; gap: ${gap};`

export const createFlexRow = (gap = '0.75rem', wrap = true) =>
  `display: flex; gap: ${gap}; ${wrap ? 'flex-wrap: wrap;' : ''}`

// ===== COMMON STYLES =====
export const cardStyle = `
  border: 1px solid var(--color-divider); 
  border-radius: 0.5rem; 
  padding: 1.5rem; 
  background: var(--color-raised-bg);
`

export const sectionHeaderStyle = `
  margin: 0 0 1rem 0; 
  font-size: 1.125rem; 
  font-weight: 600; 
  color: var(--color-base);
`

export const descriptionStyle = `
  margin: 0; 
  font-size: 0.875rem; 
  color: var(--color-secondary);
`

// ===== COMPONENT SPECIFIC HELPERS =====
export const createVariantShowcase = (variants: Array<{ name: string, props: Record<string, any>, description?: string }>) => {
  return variants.map(variant => `
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div style="min-width: 120px;">
        <!-- Component with variant props goes here -->
      </div>
      <div style="flex: 1;">
        <div style="font-weight: 500; margin-bottom: 0.25rem; color: var(--color-base);">${variant.name}</div>
        ${variant.description ? `<div style="font-size: 0.875rem; color: var(--color-secondary);">${variant.description}</div>` : ''}
      </div>
    </div>
  `).join('')
}

// ===== STORY PARAMETERS =====
export const fullscreenLayout = {
  layout: 'fullscreen' as const,
}

export const centeredLayout = {
  layout: 'centered' as const,
}

export const createStoryParameters = (description: string, layout: 'fullscreen' | 'centered' = 'fullscreen') => ({
  layout,
  docs: {
    description: {
      story: description,
    },
  },
})

// ===== ACCESSIBILITY HELPERS =====
export const commonA11yConfig = {
  a11y: {
    config: {
      rules: [
        { id: 'color-contrast', enabled: true },
        { id: 'focus-visible', enabled: true },
        { id: 'button-name', enabled: true },
      ],
    },
  },
}

// ===== ARGTYPE HELPERS =====
export const createSelectArgType = (
  options: string[],
  description: string,
  category: string = 'Appearance',
  defaultValue?: string
) => ({
  control: 'select' as const,
  options,
  description,
  table: {
    category,
    type: { summary: 'string' },
    ...(defaultValue && { defaultValue: { summary: defaultValue } }),
  },
})

export const createBooleanArgType = (
  description: string,
  category: string = 'Appearance',
  defaultValue: boolean = false
) => ({
  control: 'boolean' as const,
  description,
  table: {
    category,
    type: { summary: 'boolean' },
    defaultValue: { summary: defaultValue.toString() },
  },
})

export const createTextArgType = (
  description: string,
  category: string = 'Content'
) => ({
  control: 'text' as const,
  description,
  table: {
    category,
    type: { summary: 'string' },
  },
}) 