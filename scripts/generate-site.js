#!/usr/bin/env node

/**
 * Site Generator CLI
 * 
 * This script demonstrates the site generation capabilities and provides
 * guidance on using the comprehensive component libraries.
 */

console.log('\n🚀 SaaSternity Site Generator\n');

console.log('📋 Available Component Libraries:');
console.log('\n🎨 Aceternity UI Components (48 available):');
console.log('  • Background Effects: BackgroundBeams, AuroraBackground, Meteors, Sparkles, etc.');
console.log('  • Card Effects: HoverEffect, CardStack, EvervaultCard, WobbleCard, etc.');
console.log('  • Text Effects: TextGenerateEffect, TypewriterEffect, FlipWords, etc.');
console.log('  • Navigation: FloatingNav, FloatingDock, Sidebar, Tabs, etc.');
console.log('  • Advanced: GoogleGeminiEffect, TracingBeam, MacbookScroll, etc.');

console.log('\n🏢 SaaS Components (15 available):');
console.log('  • HeroSaaS, FeaturesGrid, PricingTiers, Testimonials');
console.log('  • LeadCaptureForm, NewsletterSignup, CTABanner');
console.log('  • WhyUs, BrandLogos, VideoSection, StatsSection');
console.log('  • UseCases, TeamSection, ContactOptions, SocialLinks');

console.log('\n🏪 SMB Components (15 available):');
console.log('  • HeroSMB, AboutUs, ServicesList, ContactCard');
console.log('  • LeadForm, Gallery, ServiceAreaMap, StatsBlock');
console.log('  • Guarantees, ProcessSteps, TeamGrid, SocialProof');
console.log('  • NewsletterCapture, Testimonials, FAQ, CTABanner');

console.log('\n🛠️ How to Use:');
console.log('\n1. 📁 Import components in your pages:');
console.log('   import { HeroSaaS, PricingTiers } from "@/components/ui/saas"');
console.log('   import { Spotlight, MovingBorder } from "@/components/aceternity"');

console.log('\n2. 🎨 Mix and match for unique designs:');
console.log('   • Use Aceternity components for stunning visual effects');
console.log('   • Use SaaS/SMB components for complete sections');
console.log('   • Combine both for maximum impact');

console.log('\n3. 🚀 Build process:');
console.log('   npm run dev     # Development with hot reload');
console.log('   npm run build   # Production build');
console.log('   npm run start   # Run production build');

console.log('\n4. 📖 View all components:');
console.log('   Visit /components page to see live demos');

console.log('\n5. 🎯 Quick start templates:');
console.log('   • Landing Page: Hero + Features + Testimonials + CTA');
console.log('   • SaaS Site: Hero + Features + Pricing + FAQ + Lead Form');
console.log('   • Business Site: Hero + About + Services + Contact');
console.log('   • Portfolio: Hero + Gallery + About + Contact');

console.log('\n💡 Pro Tips:');
console.log('  • Start with /app/page.tsx as your main template');
console.log('  • Use the /components showcase to pick effects');
console.log('  • Each component has TypeScript types for easy integration');
console.log('  • Test performance with `npm run build` before deploying');

console.log('\n✨ Component Discovery:');
console.log('  • Check /components/aceternity/index.ts for all Aceternity components');
console.log('  • Check /components/ui/saas/index.ts for SaaS components');
console.log('  • Check /components/ui/smb/index.ts for SMB components');

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'saas':
    console.log('\n🏢 SaaS Website Recommendations:');
    console.log('  Core: HeroSaaS + FeaturesGrid + PricingTiers + CTABanner');
    console.log('  Effects: Spotlight + MovingBorder + TextGenerateEffect');
    console.log('  Trust: Testimonials + BrandLogos + StatsSection');
    console.log('  Convert: LeadCaptureForm + WhyUs + VideoSection');
    break;
  case 'smb':
    console.log('\n🏪 SMB Website Recommendations:');
    console.log('  Core: HeroSMB + ServicesList + ContactCard + CTABanner');
    console.log('  Effects: BackgroundBeams + HoverEffect + Meteors');
    console.log('  Trust: Testimonials + Gallery + Guarantees + SocialProof');
    console.log('  Local: ServiceAreaMap + ProcessSteps + TeamGrid');
    break;
  case 'components':
    console.log('\n📦 Available Component Categories:');
    console.log('  • aceternity/: 48 animated UI components');
    console.log('  • ui/saas/: 15 SaaS-specific sections');
    console.log('  • ui/smb/: 15 SMB-specific sections');
    console.log('  • ui/: Core shadcn/ui components');
    console.log('  • layout/: Header, footer, navigation');
    break;
  default:
    console.log('\n🎮 Available Commands:');
    console.log('  npm run generate:site saas        # SaaS recommendations');
    console.log('  npm run generate:site smb         # SMB recommendations');
    console.log('  npm run generate:site components  # Component overview');
}

console.log('\n🚀 Happy building! Your creative toolkit is ready.\n'); 