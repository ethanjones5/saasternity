import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface SiteShellProps {
  children: React.ReactNode;
  headerProps?: React.ComponentProps<typeof SiteHeader>;
}

export function SiteShell({ children, headerProps }: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader {...headerProps} />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
} 