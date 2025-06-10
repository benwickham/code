# Storybook Component Organization - INCREMENTAL IMPLEMENTATION APPROACH

## 📁 **REVISED STORYBOOK ORGANIZATION STRUCTURE**

This document provides the complete file tree structure for organizing all components and documentation in Storybook, following the **incremental implementation approach** discovered during development.

## 🚀 **IMPLEMENTATION APPROACH - LESSONS LEARNED**

### **Key Discovery: Incremental Implementation**
During implementation, we discovered that creating comprehensive 300+ line story files at once hits token limits. The solution is:

1. **Phase 1: Basic Structure** - Create meta + single Playground story for all components
2. **Phase 2: Add Stories Incrementally** - Add remaining stories one at a time using edit_file
3. **Phase 3: Polish & Optimize** - Refine and enhance existing stories

### **Why This Works:**
- ✅ Avoids token limit issues
- ✅ Provides immediate value with basic playground stories  
- ✅ Establishes consistent structure across all components
- ✅ Creates foundation for comprehensive stories later
- ✅ Enables parallel work on multiple components

## 📄 **TOP-LEVEL DOCUMENTATION** (No prefix - appears first)
```
📄 Introduction
📄 Getting Started  
📄 Changelog
```

## 🎨 **DESIGN SYSTEM DOCUMENTATION**
```
Design System/
├── 📄 Overview
├── 🎨 Colors ✅ (move existing)
├── 📝 Typography  
├── 📏 Spacing
├── 🎯 Icons
└── 🎨 Themes
```

## 📋 **GUIDELINES DOCUMENTATION**
```
Guidelines/
├── 📄 Accessibility ✅ (move existing)
├── 📄 Writing Style
├── 📄 Component Usage
└── 📄 Best Practices
```

## 🧩 **COMPONENT CATEGORIES**

### **Foundation Tier** (Priority 1 - Incremental Implementation)

#### **PHASE 1: BASIC STRUCTURE STATUS**
```
Foundation/
├── Actions/
│   ├── Button ✅ COMPLETED (5 comprehensive stories)
│   ├── ButtonStyled ✅ COMPLETED (basic structure)
│   ├── SmartClickable ✅ COMPLETED (basic structure)
│   └── Toggle ✅ COMPLETED (basic structure)
├── Data Display/
│   ├── Badge ✅ COMPLETED (5 comprehensive stories)
│   ├── SimpleBadge ✅ COMPLETED (basic structure)
│   ├── Avatar ✅ COMPLETED (basic structure)
│   ├── Chips ✅ COMPLETED (basic structure)
│   └── Tooltip 🔄 NEEDS BASIC STRUCTURE (or alternative)
├── Inputs/
│   ├── DropdownSelect ✅ COMPLETED (5 comprehensive stories)
│   ├── Checkbox ✅ COMPLETED (basic structure)
│   ├── FileInput ✅ COMPLETED (basic structure)
│   ├── ManySelect ✅ COMPLETED (basic structure)
│   └── SearchFilter ✅ COMPLETED (basic structure)
├── Layout/
│   ├── Card ✅ COMPLETED (5 comprehensive stories)
│   ├── Modal ✅ COMPLETED (basic structure)
│   ├── PopoutMenu ✅ COMPLETED (basic structure)
│   └── Breadcrumbs ✅ COMPLETED (basic structure)
├── Feedback/
│   ├── LoadingIndicator ✅ COMPLETED (basic structure)
│   ├── ProgressBar ✅ COMPLETED (basic structure)
│   └── Notifications ✅ COMPLETED (basic structure)
└── Utilities/
    ├── AutoLink ✅ COMPLETED (basic structure)
    ├── CopyCode ✅ COMPLETED (basic structure)
    └── Pagination ✅ COMPLETED (basic structure)
```

#### **PHASE 2: COMPREHENSIVE STORIES STATUS**
```
Foundation Components Needing 4 Additional Stories:
├── ButtonStyled (needs: AllVariants, AllStates, RealWorldUsage, EdgeCases)
├── Checkbox (needs: AllVariants, AllStates, RealWorldUsage, EdgeCases)
├── Modal (needs: AllStates, RealWorldUsage, EdgeCases) - has AllVariants
├── LoadingIndicator (needs: AllVariants, AllStates, RealWorldUsage, EdgeCases)
└── ProgressBar (needs: AllVariants, AllStates, RealWorldUsage, EdgeCases)
```

### **Components Tier** (Priority 2 - Future Implementation)
```
Components/
├── Project/
│   ├── ProjectCard 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/base/ProjectCard.vue
│   │   📁 apps/frontend/src/components/ui/ProjectCard.vue
│   │   📁 apps/app-frontend/src/components/ui/ProjectCard.vue
│   ├── VersionCard 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found (version functionality in various files)
│   ├── DependencyCard 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ProjectHeader 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/project/ProjectHeader.vue
│   ├── ProjectStatusBadge 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── NewProjectCard 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/project/NewProjectCard.vue
│   ├── ProjectGallery 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ProjectSidebar 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ProjectMember 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── ProjectTeamMember 🔄 PHASE 3 - BASIC STRUCTURE
│       ❌ No standalone component found
├── Search/
│   ├── SearchDropdown 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/search/SearchDropdown.vue
│   ├── FilterBar 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── SortDropdown 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── Categories 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/search/Categories.vue
│   │   📁 apps/frontend/src/components/ui/search/Categories.vue
│   ├── BrowseFiltersPanel 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── SearchResultCard 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── SearchPagination 🔄 PHASE 3 - BASIC STRUCTURE
│       ❌ No standalone component found
├── Content/
│   ├── ContentListPanel 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── MarkdownEditor 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/base/MarkdownEditor.vue
│   ├── ImageGallery 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── FileViewer 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── CodeBlock 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ContentRenderer 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── MediaUpload 🔄 PHASE 3 - BASIC STRUCTURE
│       ❌ No standalone component found
├── Navigation/
│   ├── NavBar 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No single NavBar component found (navigation components scattered)
│   │   📁 packages/ui/src/components/nav/NavRow.vue
│   │   📁 apps/frontend/src/components/ui/NavRow.vue
│   │   📁 packages/ui/src/components/nav/NavStack.vue
│   │   📁 packages/ui/src/components/nav/NavItem.vue
│   │   📁 apps/app-frontend/src/components/ui/NavTabs.vue
│   ├── SidebarNav 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── TabNavigation 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 apps/app-frontend/src/components/ui/NavTabs.vue
│   ├── NavRow 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/nav/NavRow.vue
│   │   📁 apps/frontend/src/components/ui/NavRow.vue
│   ├── NavItem 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/nav/NavItem.vue
│   ├── PagewideBanner 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── MobileNav 🔄 PHASE 3 - BASIC STRUCTURE
│       ❌ No standalone component found
├── Version/
│   ├── VersionChannelIndicator 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/version/VersionChannelIndicator.vue
│   ├── VersionSummary 🔄 PHASE 3 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/version/VersionSummary.vue
│   ├── VersionHistory 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── VersionComparison 🔄 PHASE 3 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── VersionSelector 🔄 PHASE 3 - BASIC STRUCTURE
│       ❌ No standalone component found
└── Brand/
    ├── AnimatedLogo 🔄 PHASE 3 - BASIC STRUCTURE
    │   ❌ No standalone component found
    ├── LogoAsset 🔄 PHASE 3 - BASIC STRUCTURE
    │   ❌ No standalone component found
    ├── BrandHeader 🔄 PHASE 3 - BASIC STRUCTURE
    │   ❌ No standalone component found
    ├── TextLogo 🔄 PHASE 3 - BASIC STRUCTURE
    │   ❌ No standalone component found
    └── BrandFooter 🔄 PHASE 3 - BASIC STRUCTURE
        ❌ No standalone component found
```

### **Specialized Tier** (Priority 3 - Future Implementation)
```
Specialized/
├── Changelog/
│   ├── ChangelogEntry 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ChangelogRenderer 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ChangelogFilter 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── ChangelogTimeline 🔄 PHASE 5 - BASIC STRUCTURE
│       ❌ No standalone component found
├── Servers/
│   ├── ServerBackupCard 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ServerStatusIndicator 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ServerManagementPanel 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ServerConfigForm 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ServerMetrics 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ServerLogs 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── ServerActions 🔄 PHASE 5 - BASIC STRUCTURE
│       ❌ No standalone component found
├── Billing/
│   ├── PricingCard 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── PaymentForm 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── InvoiceDisplay 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── SubscriptionStatus 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── PaymentHistory 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── BillingSettings 🔄 PHASE 5 - BASIC STRUCTURE
│       ❌ No standalone component found
├── Charts/
│   ├── Chart 🔄 PHASE 5 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/chart/Chart.vue
│   │   📁 apps/frontend/src/components/ui/charts/Chart.client.vue
│   ├── AnalyticsGraph 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── MetricsDisplay 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── CompactChart 🔄 PHASE 5 - BASIC STRUCTURE
│   │   📁 packages/ui/src/components/chart/CompactChart.vue
│   │   📁 apps/frontend/src/components/ui/charts/CompactChart.client.vue
│   ├── RevenueChart 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found (part of ChartDisplay)
│   └── UsageChart 🔄 PHASE 5 - BASIC STRUCTURE
│       ❌ No standalone component found
├── Settings/
│   ├── ThemeSelector 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── NotificationSettings 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── AccountSettings 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── PrivacySettings 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── SecuritySettings 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── IntegrationSettings 🔄 PHASE 5 - BASIC STRUCTURE
│       ❌ No standalone component found
├── Moderation/
│   ├── ReportForm 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── ModerationQueue 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   ├── UserActions 🔄 PHASE 5 - BASIC STRUCTURE
│   │   ❌ No standalone component found
│   └── ContentFlags 🔄 PHASE 5 - BASIC STRUCTURE
│       ❌ No standalone component found
└── Admin/
    ├── AdminDashboard 🔄 PHASE 5 - BASIC STRUCTURE
    │   ❌ No standalone component found
    ├── UserManagement 🔄 PHASE 5 - BASIC STRUCTURE
    │   ❌ No standalone component found
    ├── SystemStatus 🔄 PHASE 5 - BASIC STRUCTURE
    │   ❌ No standalone component found
    └── AdminTools 🔄 PHASE 5 - BASIC STRUCTURE
        ❌ No standalone component found
```

## 📊 **IMPLEMENTATION PROGRESS TRACKING**

### **Current Status:**
- **Foundation Basic Structure:** 19/20 completed (95%) - Only Tooltip remaining
- **Foundation Comprehensive:** 4/20 completed (20%)
- **Components Basic Structure:** 0/35 completed (0%)
- **Specialized Basic Structure:** 0/30 completed (0%)

### **Phase 1 NEARLY COMPLETE! 🎉**
**Outstanding Foundation Components:**
1. **Tooltip** - Create basic structure (or alternative component)

---

## 📋 **COMPONENT FILE LOCATION SUMMARY**

### **✅ Components Found in Codebase:**

**Foundation Tier (Existing Components):**
- **ProjectCard**: 3 locations (packages/ui, apps/frontend, apps/app-frontend)
- **SearchDropdown**: packages/ui/src/components/search/SearchDropdown.vue
- **Categories**: 2 locations (packages/ui, apps/frontend)
- **MarkdownEditor**: packages/ui/src/components/base/MarkdownEditor.vue
- **ProjectHeader**: packages/ui/src/components/project/ProjectHeader.vue

**Components Tier (Existing Components):**
- **NewProjectCard**: packages/ui/src/components/project/NewProjectCard.vue
- **NavRow**: 2 locations (packages/ui, apps/frontend)
- **NavItem**: packages/ui/src/components/nav/NavItem.vue
- **NavTabs**: apps/app-frontend/src/components/ui/NavTabs.vue
- **NavStack**: packages/ui/src/components/nav/NavStack.vue
- **VersionChannelIndicator**: packages/ui/src/components/version/VersionChannelIndicator.vue
- **VersionSummary**: packages/ui/src/components/version/VersionSummary.vue

**Specialized Tier (Existing Components):**
- **Chart**: 2 locations (packages/ui, apps/frontend)
- **CompactChart**: 2 locations (packages/ui, apps/frontend)

### **❌ Components NOT Found (Need Creation):**
- **Tooltip** (Foundation)
- **VersionCard** (Components)
- **DependencyCard** (Components)
- **ProjectStatusBadge** (Components)
- Most Specialized tier components (Changelog, Servers, Billing, Settings, Moderation, Admin)

### **🎯 Priority for Storybook Implementation:**
1. **Start with existing components** that have clear file locations
2. **Focus on Foundation tier** components first (ProjectCard, SearchDropdown, Categories, MarkdownEditor)
3. **Create missing Foundation components** (Tooltip alternative)
4. **Move to Components tier** with existing files (ProjectHeader, NewProjectCard, Navigation components)
5. **Defer Specialized tier** until basic structure is complete

### **Ready for Phase 2 (Comprehensive Stories):**
All these components need 4 additional stories (AllVariants, AllStates, RealWorldUsage, EdgeCases):
1. **ButtonStyled** ✅ Ready for comprehensive stories
2. **SmartClickable** ✅ Ready for comprehensive stories
3. **Toggle** ✅ Ready for comprehensive stories
4. **SimpleBadge** ✅ Ready for comprehensive stories
5. **Avatar** ✅ Ready for comprehensive stories
6. **Chips** ✅ Ready for comprehensive stories
7. **Checkbox** ✅ Ready for comprehensive stories
8. **FileInput** ✅ Ready for comprehensive stories
9. **ManySelect** ✅ Ready for comprehensive stories
10. **SearchFilter** ✅ Ready for comprehensive stories
11. **Modal** ✅ Ready for comprehensive stories
12. **PopoutMenu** ✅ Ready for comprehensive stories
13. **Breadcrumbs** ✅ Ready for comprehensive stories
14. **LoadingIndicator** ✅ Ready for comprehensive stories
15. **ProgressBar** ✅ Ready for comprehensive stories
16. **Notifications** ✅ Ready for comprehensive stories
17. **AutoLink** ✅ Ready for comprehensive stories
18. **CopyCode** ✅ Ready for comprehensive stories
19. **Pagination** ✅ Ready for comprehensive stories

### **Phase 2 Targets (After Phase 1 Complete):**
- Add 4 additional stories to each Foundation component
- Focus on AllVariants, AllStates, RealWorldUsage, EdgeCases
- Use incremental edit_file approach

## 🎯 **IMPLEMENTATION STRATEGY**

### **Basic Structure Template:**
Each basic structure should include:
- ✅ Meta configuration with proper title and argTypes
- ✅ Single Playground story following style guidelines
- ✅ Proper layout: 'fullscreen' configuration
- ✅ Basic documentation and usage examples
- ✅ Comprehensive argTypes with proper categorization

### **Quality Standards:**
- Follow Badge.stories.ts as reference implementation
- Use established visual standards from storybook-standards.md
- Ensure proper Foundation/Category/Component organization
- Include real-world usage examples in documentation

This organization provides a clear, scalable structure that balances comprehensive coverage with practical implementation priorities using the proven incremental approach. 