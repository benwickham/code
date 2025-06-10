# Storybook Standards & Guidelines - INCREMENTAL IMPLEMENTATION

## 🎯 **OVERVIEW**

This is the **single source of truth** for creating high-quality, maintainable Storybook stories across all components in the Modrinth UI library. These guidelines ensure uniformity, excellent developer experience, and comprehensive documentation.

**Updated based on successful implementation experience using the incremental approach.**

## 🚀 **IMPLEMENTATION APPROACH - LESSONS LEARNED**

### **Key Discovery: Incremental Implementation Strategy**
During implementation, we discovered that creating comprehensive 300+ line story files at once hits token limits and is inefficient. The proven solution is:

#### **Phase 1: Basic Structure Implementation**
- Create meta configuration + single Playground story for each component
- Focus on establishing consistent structure across all components
- Provides immediate value while avoiding token limits

#### **Phase 2: Incremental Story Addition**
- Add remaining stories one at a time using edit_file tool
- AllVariants → AllStates → RealWorldUsage → EdgeCases
- Each edit is focused and manageable

#### **Why This Works:**
- ✅ **Avoids token limit issues** - No more failed large file generations
- ✅ **Provides immediate value** - Basic playground stories are immediately useful
- ✅ **Establishes consistency** - All components follow same structure
- ✅ **Enables parallel work** - Multiple components can be worked on simultaneously
- ✅ **Creates foundation** - Sets up structure for comprehensive stories later

## 🎨 **VISUAL DESIGN STANDARDS**

### **Layout Configuration**

**CRITICAL**: All component stories MUST use `layout: 'fullscreen'` to ensure the background extends to the full edges of the component render area.

```typescript
const meta: Meta<typeof Component> = {
  title: 'Foundation/Category/ComponentName',
  component: Component,
  parameters: {
    layout: 'fullscreen', // REQUIRED - ensures full-canvas background
    docs: {
      // ... other configuration
    },
  },
  // ... rest of configuration
}
```

**❌ NEVER use `layout: 'centered'`** - This causes the background to only wrap the component instead of filling the entire canvas area.

### **Individual Component Containers**

**CRITICAL**: For component showcase sections, use individual containers with right-aligned descriptions. This pattern was implemented in Badge.stories.ts and must be applied to ALL component stories:

```css
/* Container for each component */
display: flex; 
align-items: center; 
justify-content: space-between; 
padding: 1rem; 
background: var(--color-bg); 
border-radius: 0.5rem; 
border: 1px solid var(--color-divider);

/* Right-aligned text content */
text-align: right; 
flex: 1; 
margin-left: 1rem;

/* Typography hierarchy */
font-weight: 500; 
font-size: 0.875rem; 
color: var(--color-base); 
margin-bottom: 0.25rem; /* Title */

font-size: 0.75rem; 
color: var(--color-secondary); /* Description */
```

### **Card-Based Layout System**

```css
/* Main container */
padding: 2rem; 
max-width: 1200px; 
margin: 0 auto;

/* Grid layout */
display: grid; 
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
gap: 2.5rem;

/* Individual cards */
border: 1px solid var(--color-divider); 
border-radius: 0.75rem; 
padding: 2rem; 
background: var(--color-raised-bg); 
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

/* Card headers */
margin: 0 0 1.75rem 0; 
font-size: 1.125rem; 
font-weight: 600; 
color: var(--color-base);
```

### **Spacing System**

- **Card gaps**: 2.5rem between cards
- **Card padding**: 2rem internal padding
- **Header margins**: 1.75rem bottom margin
- **Component gaps**: 1.25rem between individual components
- **Minimum card width**: 400px for consistent sizing

## 📖 **STORY STRUCTURE - INCREMENTAL APPROACH**

### **Phase 1: Basic Structure (Required for ALL components)**

#### **Meta Configuration Template**
```typescript
const meta: Meta<typeof Component> = {
  title: 'Foundation/Category/ComponentName', // or Components/Category or Specialized/Category
  component: Component,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Example usage

This component is used in [specific area](https://github.com/modrinth/code/blob/main/path/to/file.vue#L123) for [purpose].

\`\`\`vue
<ComponentName 
  prop="actual-value-from-codebase"
  :anotherProp="realVariable"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    // Comprehensive argTypes with proper categorization
    prop1: {
      control: 'appropriate-control',
      description: 'Clear description',
      table: { category: 'Content|Appearance|Behavior|State' },
    },
  },
  args: {
    // Sensible defaults
  },
  tags: ['autodocs'],
}
```

#### **Playground Story Template**
```typescript
export const Playground: Story = {
  render: (args) => ({
    components: { Component },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <h2 style="margin: 0 0 2.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--color-base);">Interactive Playground</h2>
        <div style="border: 1px solid var(--color-divider); border-radius: 0.75rem; padding: 2.5rem; background: var(--color-raised-bg); text-align: center; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
          <div style="margin-bottom: 2rem; display: flex; justify-content: center;">
            <Component v-bind="args" />
          </div>
          <p style="margin: 0; font-size: 0.875rem; color: var(--color-secondary); max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Use the controls panel to experiment with different component configurations.
          </p>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for experimenting with component properties.',
      },
    },
  },
}
```

### **Phase 2: Additional Stories (varies by component tier)**

#### **Foundation Components (Priority 1): 4 additional stories**
1. **AllVariants** - All visual variants organized by category
2. **AllStates** - Different interaction and display states
3. **RealWorldUsage** - Practical examples from actual codebase
4. **EdgeCases** - Boundary conditions and unusual scenarios

#### **Components Tier (Priority 2): 2 additional stories**
1. **AllVariants** - All visual variants organized by category
2. **RealWorldUsage** - Practical examples from actual codebase

#### **Specialized Tier (Priority 3): 1 additional story**
1. **RealWorldUsage** - Practical examples from actual codebase

## 🏗️ **COMPONENT ORGANIZATION**

### **Title Naming Convention**

```
Foundation/Category/ComponentName
Components/Category/ComponentName  
Specialized/Category/ComponentName
```

**Examples:**
- `Foundation/Actions/Button`
- `Foundation/Form/DropdownSelect`
- `Components/Project/ProjectCard`
- `Specialized/Servers/ServerManagement`

## 📝 **DOCUMENTATION STANDARDS**

### **Component Description Template**

```markdown
## Example usage

This component is used in [specific area](https://github.com/modrinth/code/blob/main/path/to/file.vue#L123) for [purpose].

```vue
<ComponentName 
  prop="actual-value-from-codebase"
  :anotherProp="realVariable"
/>
```
```

## ✅ **QUALITY CHECKLIST**

### **Phase 1: Basic Structure Checklist**
For each basic story file, verify:

#### **Meta Configuration**
- [ ] **Title follows naming convention** - Foundation/Category/Component format
- [ ] **Layout set to 'fullscreen'** - Background extends to full canvas edges
- [ ] **Component description includes real usage** - GitHub links and actual examples
- [ ] **ArgTypes are comprehensive** - All props documented with proper categories
- [ ] **Default args are sensible** - Good starting values for playground

#### **Playground Story**
- [ ] **Follows visual standards** - Card-based layout with proper spacing
- [ ] **Container structure correct** - max-width: 1200px, centered, proper padding
- [ ] **Card styling applied** - Border, border-radius, background, box-shadow
- [ ] **Typography hierarchy** - h2 heading with proper font sizing
- [ ] **Interactive description** - Clear explanation of controls usage

#### **Technical Standards**
- [ ] **No accessibility violations** - Story passes a11y tests
- [ ] **Story loads without errors** - No console errors or warnings
- [ ] **Real-world examples** - Actual codebase usage in documentation
- [ ] **Vue syntax highlighting** - Code blocks use proper syntax highlighting

### **Phase 2: Additional Stories Checklist**
For each additional story, verify:

#### **Visual Standards**
- [ ] **Individual containers** - Uses justify-content: space-between layout
- [ ] **Component on left, description on right** - Proper layout structure
- [ ] **Right-aligned text** - text-align: right for descriptions
- [ ] **Typography hierarchy** - 0.875rem title, 0.75rem description
- [ ] **Individual background containers** - Proper borders and styling

#### **Content Standards**
- [ ] **Real usage examples** - GitHub links to actual implementation
- [ ] **Semantic descriptions** - Clear, helpful descriptions for each variant
- [ ] **Consistent naming** - Proper categorization and organization

## 📊 **IMPLEMENTATION STATUS TRACKING**

### ✅ **Completed Components (Comprehensive Stories)**
- Badge.stories.ts (Reference implementation - 5 comprehensive stories)
- Button.stories.ts (Reference implementation - 5 comprehensive stories)
- Card.stories.ts (Reference implementation - 5 comprehensive stories)
- DropdownSelect.stories.ts (Reference implementation - 5 comprehensive stories)

### ✅ **Completed Components (Basic Structure)**
- ButtonStyled.stories.ts ✅
- Modal.stories.ts ✅
- Checkbox.stories.ts ✅
- LoadingIndicator.stories.ts ✅
- ProgressBar.stories.ts ✅
- SmartClickable.stories.ts ✅
- Toggle.stories.ts ✅
- SimpleBadge.stories.ts ✅
- Avatar.stories.ts ✅
- Chips.stories.ts ✅
- FileInput.stories.ts ✅
- ManySelect.stories.ts ✅
- SearchFilter.stories.ts ✅
- PopoutMenu.stories.ts ✅
- Breadcrumbs.stories.ts ✅
- Notifications.stories.ts ✅
- AutoLink.stories.ts ✅
- CopyCode.stories.ts ✅
- Pagination.stories.ts ✅

### 🔄 **Remaining Phase 1 Target (Basic Structure)**
1. Tooltip.stories.ts (or alternative component)

### 🎯 **Phase 2 Targets (Additional Stories)**
- ButtonStyled: Add AllVariants, AllStates, RealWorldUsage, EdgeCases
- Modal: Add AllStates, RealWorldUsage, EdgeCases (has AllVariants)
- Checkbox: Add AllVariants, AllStates, RealWorldUsage, EdgeCases
- LoadingIndicator: Add AllVariants, AllStates, RealWorldUsage, EdgeCases
- ProgressBar: Add AllVariants, AllStates, RealWorldUsage, EdgeCases

## 📚 **REFERENCE IMPLEMENTATION**

The **Badge.stories.ts** file serves as the reference implementation for all visual styling decisions. Any deviations should be considered bugs and fixed immediately.

**Key patterns to follow:**
- Card-based layout system
- Individual component containers with right-aligned descriptions
- Proper spacing and typography hierarchy
- Comprehensive argTypes categorization
- Real-world usage examples with GitHub links

## 🎯 **SUCCESS METRICS**

### **Phase 1 Success Criteria:**
- ✅ All Foundation components have basic story structure (19/20 complete - 95%)
- ✅ All stories follow established visual standards
- ✅ All stories use proper organization and naming
- ✅ Zero accessibility violations across all playground stories
- ✅ Consistent argTypes and documentation patterns

**PHASE 1 NEARLY COMPLETE! 🎉** Only Tooltip component remaining.

### **Phase 2 Success Criteria:**
- All Foundation components have comprehensive stories
- All stories pass accessibility tests
- Real-world examples are practical and copyable
- Documentation is comprehensive and helpful

---

**This document reflects the proven incremental implementation approach and serves as the single source of truth for component story standards.**
