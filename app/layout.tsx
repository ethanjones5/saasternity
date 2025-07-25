import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const lexend = Lexend({ 
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: {
    default: "Eva Build & Design - Premier Home Contractor in Toronto",
    template: "%s | Eva Build & Design"
  },
  description: "Eva Build & Design transforms homes and commercial spaces in Toronto through expert interior renovations, hardscaping, and artificial grass installations. Licensed contractor since 2016.",
  keywords: ["home renovation", "interior design", "hardscaping", "artificial grass", "Toronto contractor", "design-build", "home improvement"],
  authors: [{ name: "Eva Build & Design" }],
  creator: "Eva Build & Design",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://evabuilddesign.com",
    title: "Eva Build & Design - Premier Home Contractor in Toronto",
    description: "Transform your space with Toronto's trusted design-build contractor. Interior renovations, hardscaping, and artificial grass installations.",
    siteName: "Eva Build & Design",
    images: [
      {
        url: "/EvaDesignPhotos/Portfolio/Home Renovation.jpg",
        width: 1200,
        height: 630,
        alt: "Eva Build & Design - Home Renovation Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Build & Design - Premier Home Contractor in Toronto",
    description: "Transform your space with Toronto's trusted design-build contractor.",
    images: ["/EvaDesignPhotos/Portfolio/Home Renovation.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
