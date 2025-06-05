# Storybook Implementation for Modrinth UI

## 🎯 Objective
Create a fully automated Storybook setup for the Modrinth UI component library with generated stories for 80+ components.

## 📝 **Instructions for Cursor AI Agent**
**IMPORTANT:** As you complete each step below, update the red circle (🔴) to a green checkmark (✅) next to the step title. This document should serve as a living progress tracker of your work.

**Example:**
- Before: `### 🔴 STEP 1: Environment Verification`
- After: `### ✅ STEP 1: Environment Verification`

Keep all checkboxes and success criteria updated as you work through the plan.

## ⚡ Quick Start Commands
```bash
# Navigate to UI package
cd packages/ui

# Install and setup Storybook
npx storybook@latest init --type vue3 --builder vite --yes --package-manager pnpm

# Install additional addons and required dependencies
pnpm add -D @storybook/addon-a11y @storybook/addon-viewport @storybook/addon-interactions @storybook/test @vue/compiler-sfc

# Run Storybook
pnpm storybook
```

## 📋 Execution Checklist

### ✅ STEP 1: Environment Verification
**Prerequisites Check:**
- [x] Verify Node.js 20+ installed: `node --version` ✅ v22.13.1
- [x] Verify pnpm 9.15.0 installed: `pnpm --version` ✅ 9.15.0  
- [x] Verify in monorepo root: `ls -la` (should see packages/ directory) ✅ packages/ directory found
- [x] Verify UI package exists: `ls packages/ui/src/components/` ✅ Components directory contains multiple subdirectories

**Success Criteria:** All checks pass, components directory contains Vue files ✅ **COMPLETED**

---

### 🔴 STEP 2: Core Storybook Installation
**Commands to Execute:**
```bash
cd packages/ui
npx storybook@latest init --type vue3 --builder vite --yes --package-manager pnpm
pnpm add -D @storybook/addon-a11y @storybook/addon-viewport @storybook/addon-interactions @storybook/test @vue/compiler-sfc
```

**Files to Verify Created:**
- [ ] `.storybook/` directory exists
- [ ] `.storybook/main.ts` exists
- [ ] `.storybook/preview.ts` exists
- [ ] `package.json` updated with storybook scripts

**Success Criteria:** `pnpm storybook` command runs without errors

---

### 🔴 STEP 3: Update Package.json Scripts
**File:** `packages/ui/package.json`
**Action:** Add these scripts to existing scripts section:
```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "storybook:build": "storybook build",
    "storybook:generate": "node scripts/generate-stories.mjs",
    "storybook:analyze": "node scripts/analyze-components.mjs"
  }
}
```

**Validation:** `pnpm run storybook --help` should work

---

### 🔴 STEP 4: Configure Storybook Main Config
**File:** `packages/ui/.storybook/main.ts`
**Action:** Replace entire contents with:

```typescript
import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta', // 👈 Enhanced prop extraction
    },
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@modrinth/assets': path.resolve(__dirname, '../../assets'),
          '@modrinth/utils': path.resolve(__dirname, '../../utils'),
          '@': path.resolve(__dirname, '../src'),
        },
      },
      define: {
        global: 'globalThis',
      },
    })
  },
  docs: {
    autodocs: true,
  },
}

export default config
```

**Validation:** File saves without syntax errors

---

### 🔴 STEP 5: Configure Storybook Preview
**File:** `packages/ui/.storybook/preview.ts`
**Action:** Replace entire contents with:

```typescript
import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import FloatingVue from 'floating-vue'
import { createI18n } from '@vintl/vintl'

// Import styles
import 'floating-vue/dist/style.css'
import 'vue-multiselect/dist/vue-multiselect.css'

// Import locale data (adjust path if needed based on your locale structure)
import enUS from '../src/locales/en-US/index.json'

setup((app) => {
  // Setup floating-vue
  app.use(FloatingVue)
  
  // Setup i18n
  const i18n = createI18n({
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
      'en-US': enUS,
    },
  })
  app.use(i18n)
  
  // Mock router
  app.component('RouterLink', {
    props: ['to'],
    template: '<a @click.prevent><slot /></a>',
  })
  
  app.config.globalProperties.$router = {
    push: () => {},
    replace: () => {},
    go: () => {},
    back: () => {},
    forward: () => {},
  }
  
  app.config.globalProperties.$route = {
    path: '/',
    query: {},
    params: {},
    meta: {},
  }
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1200px', height: '800px' } },
      },
    },
  },
}

export default preview
```

**Validation:** No TypeScript errors in file

---

### 🔴 STEP 6: Test Basic Storybook Setup
**Commands:**
```bash
cd packages/ui
pnpm storybook
```

**Success Criteria:**
- [ ] Storybook starts on http://localhost:6006
- [ ] No console errors
- [ ] Default example stories load
- [ ] Can navigate between stories

**If errors:** Check import paths and dependencies before proceeding

---

### 🔴 STEP 7: Create Scripts Directory and Component Analyzer
**Directory:** Create `packages/ui/scripts/` if it doesn't exist
**File:** `packages/ui/scripts/analyze-components.mjs`
**Action:** Create file with exact contents:

```javascript
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse, compileScript } from '@vue/compiler-sfc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const COMPONENTS_DIR = path.join(__dirname, '../src/components')
const INDEX_FILE = path.join(__dirname, '../src/components/index.ts')

async function analyzeComponents() {
  const indexContent = fs.readFileSync(INDEX_FILE, 'utf-8')
  const componentExports = []

  // Parse component exports
  const exportRegex = /export\s*{\s*default\s+as\s+(\w+)\s*}\s*from\s*['"]([^'"]+)['"]/g
  let match

  while ((match = exportRegex.exec(indexContent)) !== null) {
    const [, componentName, importPath] = match
    const relativePath = importPath.replace('./', '')
    const fullPath = path.join(COMPONENTS_DIR, relativePath + (relativePath.endsWith('.vue') ? '' : '.vue'))
    
    componentExports.push({
      name: componentName,
      path: importPath,
      fullPath,
    })
  }

  // Analyze each component
  const analyzedComponents = []

  for (const component of componentExports) {
    try {
      if (!fs.existsSync(component.fullPath)) {
        console.warn(`Component file not found: ${component.fullPath}`)
        continue
      }

      const componentContent = fs.readFileSync(component.fullPath, 'utf-8')
      const { descriptor } = parse(componentContent)

      const analysis = {
        name: component.name,
        path: component.path,
        props: extractProps(descriptor, componentContent),
        slots: extractSlots(descriptor.template?.content || ''),
        emits: extractEmits(descriptor.scriptSetup?.content || ''),
        category: categorizeComponent(component.path),
        hasComplexDeps: checkComplexDependencies(componentContent),
      }

      analyzedComponents.push(analysis)
    } catch (error) {
      console.error(`Failed to analyze ${component.name}:`, error.message)
    }
  }

  return analyzedComponents
}

function extractProps(descriptor, componentContent) {
  const props = []
  
  if (descriptor.scriptSetup) {
    try {
      const compiled = compileScript(descriptor, {
        id: 'temp',
        inlineTemplate: false,
      })
      
      // Extract props from compiled script
      const propsMatch = compiled.content.match(/defineProps<{([^}]+)}>/s)
      if (propsMatch) {
        const propsContent = propsMatch[1]
        const propRegex = /(\w+)(?:\?)?:\s*([^,;\n]+)/g
        let propMatch
        
        while ((propMatch = propRegex.exec(propsContent)) !== null) {
          const [, name, type] = propMatch
          props.push({ 
            name, 
            type: type.trim().replace(/\s*\|.*/, ''), // Simple type extraction
            required: !propsMatch[0].includes(`${name}?:`)
          })
        }
      }
    } catch (error) {
      console.warn(`Failed to compile script for ${descriptor.filename}:`, error.message)
    }
  }
  
  return props
}

function extractSlots(templateContent) {
  const slotRegex = /<slot[^>]*name=['"]([^'"]+)['"]/g
  const slots = ['default'] // Always include default slot
  let match

  while ((match = slotRegex.exec(templateContent)) !== null) {
    slots.push(match[1])
  }

  return [...new Set(slots)]
}

function extractEmits(scriptContent) {
  const emitRegex = /defineEmits\s*(?:<[^>]*>)?\s*\(\s*\[([^\]]+)\]/
  const emits = []
  const match = emitRegex.exec(scriptContent)

  if (match) {
    const emitList = match[1].split(',').map(e => e.trim().replace(/['"]/g, ''))
    emits.push(...emitList)
  }

  return emits
}

function categorizeComponent(componentPath) {
  const categories = {
    '/base/': 'Base',
    '/modal/': 'Modals',
    '/nav/': 'Navigation',
    '/project/': 'Project',
    '/search/': 'Search',
    '/chart/': 'Charts',
    '/billing/': 'Billing',
    '/settings/': 'Settings',
    '/servers/': 'Servers',
    '/version/': 'Version',
    '/changelog/': 'Changelog',
    '/content/': 'Content',
    '/brand/': 'Brand',
  }
  
  for (const [path, category] of Object.entries(categories)) {
    if (componentPath.includes(path)) return category
  }
  
  return 'Other'
}

function checkComplexDependencies(content) {
  const complexDeps = [
    '@codemirror', 'ApexCharts', 'markdown-it', 'floating-vue',
    'vue-multiselect', 'vue-select', 'qrcode', 'Stripe'
  ]

  return complexDeps.some(dep => content.includes(dep))
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  analyzeComponents().then(components => {
    console.log(JSON.stringify(components, null, 2))
    console.log(`\nTotal components: ${components.length}`)
  })
}

export { analyzeComponents }
```

**Validation Command:**
```bash
cd packages/ui
node scripts/analyze-components.mjs
```

**Success Criteria:** Should output JSON list of components with props analyzed

---

### 🔴 STEP 8: Create Story Generator Script
**File:** `packages/ui/scripts/generate-stories.mjs`
**Action:** Create file with exact contents:

```javascript
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { analyzeComponents } from './analyze-components.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const STORY_TEMPLATES = {
  base: `import type { Meta, StoryObj } from '@storybook/vue3'
import {{componentName}} from '{{componentPath}}'

const meta: Meta<typeof {{componentName}}> = {
  title: '{{category}}/{{componentName}}',
  component: {{componentName}},
  parameters: {
    layout: 'centered',
  },
  argTypes: {
{{argTypes}}
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
{{defaultArgs}}
  },
}
{{additionalStories}}`,

  complex: `import type { Meta, StoryObj } from '@storybook/vue3'
import {{componentName}} from '{{componentPath}}'

const meta: Meta<typeof {{componentName}}> = {
  title: '{{category}}/{{componentName}}',
  component: {{componentName}},
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Component with complex dependencies - may require additional setup.',
      },
    },
  },
  decorators: [
    () => ({
      template: '<div style="min-height: 200px; width: 100%;"><story /></div>',
    }),
  ],
  argTypes: {
{{argTypes}}
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
{{defaultArgs}}
  },
}

export const Interactive: Story = {
  args: {
{{interactiveArgs}}
  },
}`
}

async function generateStories() {
  const components = await analyzeComponents()
  let generated = 0
  let skipped = 0
  let failed = 0

  for (const component of components) {
    try {
      // Calculate story path
      const componentDir = path.dirname(
        path.join(__dirname, '../src/components', component.path.replace('./', ''))
      )
      const storyPath = path.join(componentDir, `${component.name}.stories.ts`)

      // Skip if exists (unless forced)
      if (fs.existsSync(storyPath) && !process.argv.includes('--force')) {
        console.log(`⏭️  Skip: ${component.name} (exists)`)
        skipped++
        continue
      }

      // Generate story content
      const template = component.hasComplexDeps ? STORY_TEMPLATES.complex : STORY_TEMPLATES.base
      const storyContent = generateStoryContent(component, template)

      // Ensure directory exists
      fs.mkdirSync(path.dirname(storyPath), { recursive: true })

      // Write story file
      fs.writeFileSync(storyPath, storyContent)
      console.log(`✅ Generated: ${component.name}`)
      generated++

    } catch (error) {
      console.error(`❌ Failed: ${component.name} - ${error.message}`)
      failed++
    }
  }

  console.log(`\n📊 Summary: ${generated} generated, ${skipped} skipped, ${failed} failed`)
}

function generateStoryContent(component, template) {
  const argTypes = generateArgTypes(component.props)
  const defaultArgs = generateDefaultArgs(component.props)
  const interactiveArgs = generateInteractiveArgs(component.props)
  const additionalStories = generateAdditionalStories(component)

  return template
    .replace(/{{componentName}}/g, component.name)
    .replace(/{{componentPath}}/g, component.path)
    .replace(/{{category}}/g, component.category)
    .replace(/{{argTypes}}/g, argTypes)
    .replace(/{{defaultArgs}}/g, defaultArgs)
    .replace(/{{interactiveArgs}}/g, interactiveArgs)
    .replace(/{{additionalStories}}/g, additionalStories)
}

function generateArgTypes(props) {
  if (props.length === 0) return ''
  
  return props.map(prop => {
    const control = getControlForType(prop.type)
    return `    ${prop.name}: {
      control: '${control}',
      description: '${prop.name} prop',
    },`
  }).join('\n')
}

function generateDefaultArgs(props) {
  if (props.length === 0) return ''
  
  return props.map(prop => {
    const defaultValue = getDefaultValue(prop.type, prop.name)
    return `    ${prop.name}: ${defaultValue},`
  }).join('\n')
}

function generateInteractiveArgs(props) {
  if (props.length === 0) return ''
  
  return props.map(prop => {
    const interactiveValue = getInteractiveValue(prop.type, prop.name)
    return `    ${prop.name}: ${interactiveValue},`
  }).join('\n')
}

function getControlForType(type) {
  const controlMap = {
    'string': 'text',
    'String': 'text',
    'boolean': 'boolean',
    'Boolean': 'boolean',
    'number': 'number',
    'Number': 'number',
    'Array': 'object',
    'Object': 'object',
    'Function': 'action',
  }
  
  const baseType = type.split('<')[0].trim()
  return controlMap[baseType] || 'text'
}

function getDefaultValue(type, propName) {
  // Name-based defaults
  if (propName === 'color') return "'default'"
  if (propName === 'size') return "'medium'"
  if (propName.includes('disabled')) return 'false'
  if (propName.includes('loading')) return 'false'
  if (propName.includes('modelValue')) return "''"

  // Type-based defaults
  const typeMap = {
    'string': "''",
    'String': "''",
    'boolean': 'false',
    'Boolean': 'false',
    'number': '0',
    'Number': '0',
    'Array': '[]',
    'Object': '{}',
    'Function': '() => {}',
  }
  
  const baseType = type.split('<')[0].trim()
  return typeMap[baseType] || "''"
}

function getInteractiveValue(type, propName) {
  if (propName.includes('disabled')) return 'true'
  if (propName.includes('loading')) return 'true'
  if (propName.includes('large')) return 'true'
  if (propName === 'color') return "'primary'"

  return getDefaultValue(type, propName)
}

function generateAdditionalStories(component) {
  const stories = []

  // Color variants
  if (component.props.some(p => p.name === 'color')) {
    stories.push(`
export const ColorVariants: Story = {
  render: () => ({
    components: { ${component.name} },
    template: \`
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <${component.name} color="default">Default</${component.name}>
        <${component.name} color="primary">Primary</${component.name}>
        <${component.name} color="danger">Danger</${component.name}>
        <${component.name} color="green">Success</${component.name}>
      </div>
    \`,
  }),
}`)
  }

  // Size variants
  if (component.props.some(p => p.name === 'size' || p.name === 'large')) {
    stories.push(`
export const SizeVariants: Story = {
  render: () => ({
    components: { ${component.name} },
    template: \`
      <div style="display: flex; gap: 1rem; align-items: center;">
        <${component.name}>Normal</${component.name}>
        <${component.name} large>Large</${component.name}>
      </div>
    \`,
  }),
}`)
  }

  return stories.join('\n')
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateStories()
}
```

**Validation Command:**
```bash
cd packages/ui
node scripts/generate-stories.mjs
```

**Success Criteria:** Should generate `.stories.ts` files in component directories

---

### 🔴 STEP 9: Generate All Component Stories
**Command:**
```bash
cd packages/ui
pnpm storybook:generate
```

**Success Criteria:**
- [ ] Multiple `.stories.ts` files created
- [ ] No generation errors
- [ ] Stories can be found by running `find src -name "*.stories.ts"`

---

### 🔴 STEP 10: Test Generated Stories
**Commands:**
```bash
cd packages/ui
pnpm storybook
```

**Manual Testing Checklist:**
- [ ] Storybook loads without errors
- [ ] Can see generated component categories in sidebar
- [ ] At least 5 different components render correctly
- [ ] Controls work (try changing props)
- [ ] No console errors in browser

**If Issues:** Check specific failing components and adjust templates

---

### 🔴 STEP 11: Monorepo Integration
**File:** Root `package.json` (add to scripts section)
```json
{
  "scripts": {
    "storybook": "pnpm --filter=@modrinth/ui storybook",
    "storybook:build": "pnpm --filter=@modrinth/ui storybook:build",
    "storybook:generate": "pnpm --filter=@modrinth/ui storybook:generate"
  }
}
```

**File:** `turbo.json` (add to tasks section)
```json
{
  "tasks": {
    "storybook": {
      "cache": false,
      "persistent": true,
      "dependsOn": ["^build"]
    },
    "storybook:build": {
      "dependsOn": ["^build"],
      "outputs": ["storybook-static/**"]
    }
  }
}
```

**Validation:** Run from root: `pnpm storybook`

---

### 🔴 STEP 12: Production Build Test
**Commands:**
```bash
cd packages/ui
pnpm storybook:build
```

**Success Criteria:**
- [ ] Build completes without errors
- [ ] `storybook-static/` directory created
- [ ] `storybook-static/index.html` exists and opens in browser

---

### 🔴 STEP 13: Optional CI/CD Setup
**File:** `.github/workflows/storybook.yml`
```yaml
name: Storybook

on:
  push:
    branches: [main]
    paths: ['packages/ui/**']
  pull_request:
    paths: ['packages/ui/**']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install pnpm
        run: |
          corepack enable
          corepack prepare --activate

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build Storybook
        run: pnpm storybook:build

      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: storybook-static
          path: packages/ui/storybook-static
```

---

## 🚨 Common Issues & Fixes

### Module Resolution Errors
```bash
# Add to packages/ui/package.json if needed
{
  "type": "module"
}
```

### Import Path Issues
Check that alias paths in `.storybook/main.ts` are absolute:
```javascript
'@modrinth/assets': path.resolve(__dirname, '../../assets')
```

### Vue Component Parsing Errors
Install missing dependency and ensure vue-component-meta is available:
```bash
pnpm add -D @vue/compiler-sfc vue-component-meta
```

If you get docgen errors, fallback to basic mode in main.ts:
```typescript
// Change from:
docgen: 'vue-component-meta'
// To:
// docgen: 'vue-docgen-api' // fallback option
```

## 🎯 Final Success Criteria

**You're done when:**
1. ✅ `pnpm storybook` runs without errors
2. ✅ Can see 50+ component stories in sidebar
3. ✅ Components render correctly with working controls
4. ✅ `pnpm storybook:build` creates deployable static site
5. ✅ Scripts work from monorepo root

**📝 Remember:** Update each step's red circle (🔴) to green checkmark (✅) as you complete them!

**Expected Output:** Professional component library documentation with 80+ automatically generated stories