import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, Space_Grotesk, Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";
import { Libre_Baskerville } from "next/font/google";
import { Figtree } from "next/font/google";
import Script from "next/script";
import { FaviconTheme } from "@/components/favicon-theme";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-default-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flow.acertine.com"),
  title: {
    default: "Acertine Docs - Documentation & Guides",
    template: "%s | Acertine Docs",
  },
  description: "Comprehensive documentation for Acertine. Learn how to use Acertine to its full potential.",
  keywords: [
    "Acertine",
    "invoice software",
    "invoicing help",
    "invoice documentation",
    "invoice management",
    "client management",
    "payment tracking",
    "recurring invoices",
    "invoice templates",
    "CIS invoices",
    "construction industry scheme",
    "Stripe integration",
    "online invoicing",
    "acertine flow",
    "flow invoicing",
    "flow documentation",
    "flow help",
    "flow support",
    "flow blog",
    "flow news",
    "flow updates",
    "flow releases",
    "flow features",
    "flow integrations",
  ],
  authors: [{ name: "Acertine Ltd" }],
  creator: "Acertine Ltd",
  publisher: "Acertine Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://docs.acertine.com",
    siteName: "Acertine Docs",
    title: "Acertine Docs - Documentation & Guides",
    description: "Comprehensive documentation for Acertine. Learn how to use Acertine to its full potential.",
    images: [
      {
        url: "/public-og.png",
        width: 1200,
        height: 630,
        alt: "Acertine Docs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acertine Docs - Documentation & Guides",
    description: "Comprehensive documentation for Acertine.",
    images: ["/public-og.png"],
    creator: "@acertine",
  },
  alternates: {
    canonical: "https://docs.acertine.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script async strategy="afterInteractive" id="google-analytics" src="https://www.googletagmanager.com/gtag/js?id=G-P05MZVJ5H7" />
        <Script id="google-analytics2" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          
          gtag("config", "G-P05MZVJ5H7");
        `}
        </Script>
        <meta name="apple-mobile-web-app-title" content="Acertine" />

        <meta name="theme-color" content="#009966" />
        <meta name="algolia-site-verification" content="1D4273021539BADC" />
      </head>
      <body className={` ${inter.variable} ${figtree.variable} `} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <FaviconTheme />
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
