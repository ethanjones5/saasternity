interface SiteFooterProps {
  siteName?: string;
  className?: string;
}

export function SiteFooter({ 
  siteName = "SaaSternity",
  className 
}: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`border-t bg-background ${className || ""}`}>
      <div className="container mx-auto py-8 px-4">
        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} {siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 