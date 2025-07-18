# 🚀 Intelligent SaaS Website Generator

An advanced, config-driven website generator that intelligently selects and arranges SaaS components based on business requirements, creativity level, and site goals.

## ✨ Features

### 🎯 **Intelligent Component Selection**
- **Business Type Aware**: Prioritizes SaaS-specific components when `businessType === 'saas'`
- **Goal-Driven**: Selects components based on site goals (conversion, trust, engagement, etc.)
- **Creativity-Based**: Varies section count and complexity based on creativity level

### 📊 **Dynamic Section Management**
- **Smart Section Count**: 4-6 sections for low creativity, 8-10 for high creativity
- **Optimal Ordering**: Hero → Features → UseCases → Testimonials → Pricing → FAQ → LeadForm → CTA
- **Conditional Sections**: Adds BrandLogos/Stats only when goal focuses on trust/credibility

### 🔧 **Automatic Variant Selection**
- **Feature-Based**: FeaturesGrid uses 3 columns if feature count > 6, 2 columns otherwise
- **Context-Aware**: Hero background patterns adjust based on creativity level
- **Smart Defaults**: Pricing tiers automatically configure based on complexity needs

### 🏗️ **Extensible Architecture**
- **Future-Ready**: Pre-configured for `smb`, `agency`, `ecom` business types
- **Custom Logic**: Supports business-specific component selection algorithms
- **Component Categories**: Core, optional, and conditional component classification

## 🚀 Quick Start

```typescript
import { generateCompleteWebsite, SiteGenerationConfig } from './generator'

// Create a configuration for your SaaS site
const config: SiteGenerationConfig = {
  businessType: 'saas',
  creativityLevel: 'high',
  goal: 'conversion',
  companyName: 'InnovateApp',
  industry: 'Project Management',
  targetAudience: 'SMB Teams',
  keyFeatures: [
    'Task Management', 
    'Team Collaboration', 
    'Analytics Dashboard', 
    'API Integration'
  ]
}

// Generate the complete website structure
const website = generateCompleteWebsite(config)

console.log('🏗️ Generated Components:', website.structure.components)
console.log('💡 Recommendations:', website.recommendations)
```

## 📋 Configuration Options

### Business Types
- **`saas`**: Full SaaS landing page with pricing, features, testimonials
- **`smb`**: Small business focused with contact and team sections
- **`agency`**: Service-based with use cases and team highlights
- **`ecom`**: E-commerce focused with product features
- **`landing`**: Simple conversion-focused landing page
- **`business`**: Professional corporate website
- **`portfolio`**: Creative showcase site

### Creativity Levels
- **`low`**: Minimal sections (4-6), essential components only
- **`medium`**: Balanced approach (6-9), includes testimonials and use cases
- **`high`**: Full experience (8-12), includes video, team, advanced sections

### Site Goals
- **`conversion`**: Maximizes lead forms and CTA placement
- **`trust`**: Emphasizes testimonials, brand logos, and stats
- **`engagement`**: Includes video content and interactive elements
- **`information`**: Focuses on clear feature presentation
- **`credibility`**: Highlights team, stats, and social proof

## 🎨 SaaS Component Library

### Core Components (Always Available)
- **`HeroSaaS`**: Main value proposition with CTAs
- **`FeaturesGrid`**: Product features in responsive grid
- **`PricingTiers`**: Subscription pricing tables
- **`FAQAccordion`**: Common questions and answers
- **`CTABanner`**: Final conversion element

### Smart Components (Conditionally Added)
- **`Testimonials`**: Social proof (trust/credibility goals)
- **`UseCases`**: Real-world applications (medium+ creativity)
- **`LeadCaptureForm`**: Lead generation (conversion goal)
- **`BrandLogos`**: Trust indicators (trust goal + medium+ creativity)
- **`StatsSection`**: Key metrics (credibility goal + medium+ creativity)

### Enhanced Components (High Creativity)
- **`VideoSection`**: Product demos (high creativity + engagement)
- **`TeamSection`**: About the team (high creativity + trust)
- **`WhyUs`**: Differentiation (medium+ creativity)
- **`NewsletterSignup`**: Engagement building
- **`ContactOptions`**: Multiple contact methods
- **`SocialLinks`**: Social media presence

## 📊 Examples

### High-Conversion SaaS Site
```typescript
const highConversionConfig: SiteGenerationConfig = {
  businessType: 'saas',
  creativityLevel: 'high',
  goal: 'conversion',
  companyName: 'ConvertMax',
  keyFeatures: ['Advanced Analytics', 'A/B Testing', 'Funnel Optimization']
}

// Generates: Hero → Features → UseCases → Video → Pricing → FAQ → LeadForm → CTA
// Total: ~10 sections with conversion optimization
```

### Trust-Focused Enterprise SaaS
```typescript
const trustConfig: SiteGenerationConfig = {
  businessType: 'saas',
  creativityLevel: 'medium',
  goal: 'trust',
  companyName: 'SecureCloud',
  keyFeatures: ['SOC2 Compliance', 'Enterprise SSO', '99.9% Uptime']
}

// Generates: Hero → BrandLogos → Features → Stats → Testimonials → Pricing → FAQ → CTA
// Total: ~8 sections with trust elements
```

### Simple Product Landing
```typescript
const simpleConfig: SiteGenerationConfig = {
  businessType: 'saas',
  creativityLevel: 'low',
  goal: 'information',
  companyName: 'SimpleTools',
  keyFeatures: ['Easy Setup', 'Clean Interface', 'Essential Features']
}

// Generates: Hero → Features → Pricing → FAQ → CTA
// Total: ~5 sections, minimal and focused
```

## 🔧 Advanced Configuration

### Custom Component Logic
```typescript
// Components can include custom selection logic
const customComponent: ComponentConfig = {
  id: 'special-section',
  name: 'SpecialSection',
  category: 'conditional',
  conditions: {
    customLogic: (config) => {
      return config.industry === 'Healthcare' && 
             config.targetAudience?.includes('Enterprise')
    }
  }
}
```

### Automatic Variant Selection
```typescript
// FeaturesGrid automatically adjusts columns based on feature count
const features = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'] // 8 features
// Result: 4-column grid (since > 6 features)

const fewFeatures = ['F1', 'F2', 'F3', 'F4'] // 4 features  
// Result: 2-column grid (since ≤ 4 features)
```

## 🚀 Generated Output Structure

```typescript
{
  config: SiteGenerationConfig,
  structure: {
    businessType: 'saas',
    creativityLevel: 'high',
    goal: 'conversion',
    components: [
      {
        id: 'hero',
        name: 'HeroSaaS',
        category: 'core',
        variants: { backgroundPattern: 'dots' }
      },
      {
        id: 'features', 
        name: 'FeaturesGrid',
        category: 'core',
        variants: { columns: 3 }
      }
      // ... more components
    ],
    totalSections: 10,
    metadata: {
      companyName: 'Your Company',
      industry: 'Technology',
      targetAudience: 'Businesses',
      keyFeatures: ['Feature 1', 'Feature 2']
    }
  },
  recommendations: [
    'Consider A/B testing your pricing section for optimal conversion',
    'Add social proof early in the user journey'
  ]
}
```

## 🎯 Recommendations Engine

The generator includes an intelligent recommendations system that suggests:

- **A/B Testing**: For SaaS pricing sections
- **Social Proof**: When testimonials are missing
- **Video Content**: For better engagement
- **Lead Forms**: When conversion is the goal
- **Creativity Improvements**: When using low creativity settings

## 🔮 Future Extensions

Ready for new business types:
- **`marketplace`**: Multi-vendor platforms
- **`nonprofit`**: Donation and volunteer focused
- **`education`**: Course and learning platforms
- **`healthcare`**: Compliance and trust focused
- **`fintech`**: Security and feature focused

## 📝 Usage Notes

1. **TypeScript Support**: Full type safety with comprehensive interfaces
2. **Extensible Design**: Easy to add new business types and components
3. **Smart Defaults**: Works great with minimal configuration
4. **Recommendation System**: Provides actionable insights for improvement
5. **Backward Compatibility**: Maintains support for legacy template system

---

*🚀 Built for modern SaaS companies that need intelligent, conversion-focused websites with minimal configuration.* 