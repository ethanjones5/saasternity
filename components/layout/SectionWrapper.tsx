import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "7xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  as?: keyof JSX.IntrinsicElements;
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md", 
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
};

const paddingClasses = {
  none: "",
  sm: "py-8 px-4",
  md: "py-12 px-4",
  lg: "py-16 px-4", 
  xl: "py-20 px-4",
};

export function SectionWrapper({ 
  children,
  id,
  className,
  containerClassName,
  maxWidth = "6xl",
  padding = "lg",
  as: Component = "section"
}: SectionWrapperProps) {
  return (
    <Component 
      id={id}
      className={cn("w-full", className)}
    >
      <div className={cn(
        "container mx-auto",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        containerClassName
      )}>
        {children}
      </div>
    </Component>
  );
} 