# Adding More Aceternity UI Components

This guide shows you exactly how to add any component from [Aceternity UI](https://ui.aceternity.com/) to your template.

## 🚀 Quick Process

### 1. Browse Available Components
Visit [https://ui.aceternity.com/components](https://ui.aceternity.com/components) and pick any component you want to add.

### 2. Copy the Component Code
Each component page has a "Copy Code" button. Copy the component code.

### 3. Create the Component File
Create a new file in `components/aceternity/` with the component name:
```bash
# Example for adding Aurora Background
touch components/aceternity/aurora-background.tsx
```

### 4. Paste and Adjust
Paste the code and make these adjustments:
- Add `"use client";` at the top if it uses hooks or interactions
- Import `cn` utility: `import { cn } from "@/lib/utils";`
- Replace any `className` concatenations with `cn()` function

### 5. Add CSS Animations (if needed)
If the component needs custom CSS animations, add them to `app/globals.css`:
```css
/* Add new animations at the bottom */
@keyframes your-animation {
  /* ... */
}

.animate-your-animation {
  animation: your-animation 2s ease infinite;
}
```

### 6. Export the Component
Add the export to `components/aceternity/index.ts`:
```typescript
export { YourComponent } from "./your-component";
```

### 7. Use in Your Pages
```tsx
import { YourComponent } from "@/components/aceternity";

// Or import directly
import { YourComponent } from "@/components/aceternity/your-component";
```

## 🎨 Components Already Added

We've already added these popular components:

- ✅ **Spotlight** - Dramatic spotlight effect for hero sections
- ✅ **Moving Border** - Animated gradient borders for buttons
- ✅ **Background Beams** - Animated beam backgrounds
- ✅ **Card Hover Effect** - Interactive card hover animations
- ✅ **Text Generate Effect** - Text appears with stagger animations
- ✅ **Meteors** - Falling meteor animations

## 🔥 Popular Components to Add Next

Here are some popular Aceternity components you might want to add:

### 1. Aurora Background
Beautiful northern lights background effect
```bash
# Component file
components/aceternity/aurora-background.tsx
```

### 2. Floating Dock
MacOS-style floating dock navigation
```bash
# Component file
components/aceternity/floating-dock.tsx
```

### 3. 3D Card Effect
Cards with 3D tilt effects on hover
```bash
# Component file
components/aceternity/3d-card-effect.tsx
```

### 4. Wavy Background
Animated wavy background patterns
```bash
# Component file
components/aceternity/wavy-background.tsx
```

### 5. Infinite Moving Cards
Continuous scrolling card carousel
```bash
# Component file
components/aceternity/infinite-moving-cards.tsx
```

## 📝 Example: Adding Aurora Background

Here's a complete example of adding the Aurora Background component:

### Step 1: Create the file
```bash
touch components/aceternity/aurora-background.tsx
```

### Step 2: Add the component code
```tsx
"use client";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
```

### Step 3: Add CSS animation to globals.css
```css
@keyframes aurora {
  from {
    background-position: 50% 50%, 50% 50%;
  }
  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.animate-aurora {
  animation: aurora 60s linear infinite;
}
```

### Step 4: Export the component
Add to `components/aceternity/index.ts`:
```typescript
export { AuroraBackground } from "./aurora-background";
```

### Step 5: Use the component
```tsx
import { AuroraBackground } from "@/components/aceternity";

export default function Page() {
  return (
    <AuroraBackground>
      <div className="relative z-10">
        <h1>Your content here</h1>
      </div>
    </AuroraBackground>
  );
}
```

## 🎯 Tips for Success

1. **Always test the build** after adding a new component: `npm run build`
2. **Check for CSS conflicts** - some components may need custom CSS
3. **Use TypeScript properly** - define interfaces for component props
4. **Follow the existing pattern** - look at the components we've already added
5. **Add proper client directives** - use `"use client"` for interactive components

## 🐛 Troubleshooting

### Build Errors
- Make sure all imports are correct
- Check for missing dependencies
- Ensure CSS animations are properly defined

### Animation Issues
- Verify CSS animations are added to `globals.css`
- Check for conflicting class names
- Make sure Framer Motion is imported if needed

### TypeScript Errors
- Define proper interfaces for component props
- Use proper React types (`React.ReactNode`, etc.)
- Import types correctly

## 🚀 Need More Help?

- Check the [Aceternity UI Documentation](https://ui.aceternity.com/docs)
- Look at our existing components for reference
- Test your components on the `/components` page

Happy building! 🎨 