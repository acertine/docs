import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare01Icon, ComputerTerminal01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Billo Invoicing Help Center",
  description:
    "Comprehensive help center and documentation for Billo Invoicing. Learn how to create invoices, manage clients, track payments, set up recurring invoices, and streamline your invoicing workflow.",
  keywords: [
    "Billo Invoicing help",
    "invoice software documentation",
    "how to create invoices",
    "invoice management guide",
    "client management",
    "payment tracking",
    "recurring invoices",
    "invoice templates",
  ],
  openGraph: {
    title: "Billo Invoicing Help Center - Documentation & Guides",
    description: "Comprehensive help center and documentation for Billo Invoicing. Learn how to create invoices, manage clients, track payments, and streamline your invoicing workflow.",
    url: "https://billoinvoicing.com",
    siteName: "Billo Invoicing Help Center",
    images: [
      {
        url: "/public-og.png",
        width: 1200,
        height: 630,
        alt: "Billo Invoicing Help Center",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billo Invoicing Help Center",
    description: "Comprehensive help center and documentation for Billo Invoicing.",
    images: ["/public-og.png"],
  },
  alternates: {
    canonical: "https://billoinvoicing.com",
  },
};

export default function Home() {
  return (
    <div className="flex sm:min-h-[80.vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      <Link href="https://github.com/billosoftware/api-docs" target="_blank" className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12">
        Follow along on GitHub <HugeiconsIcon icon={LinkSquare01Icon} className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
        Billo Invoicing <span className="text-primary">Help</span>
      </h1>
      <p className="mb-8 md:text-lg text-base  max-w-[1200px] text-muted-foreground text-left sm:text-center">
        The help center is a comprehensive guide on using Billo Invoicing. Whether you&apos;re a new user or an experienced one, we&apos;ve got you covered.
      </p>
      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
        <Link href={`/help${page_routes[0].href}`} className={buttonVariants({ className: "px-6", size: "lg" })}>
          Get Stared
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>
      </div>
      <Script
        type="application/ld+json"
        id="homepage-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Billo Invoicing Help Center",
            url: "https://billoinvoicing.com",
            description: "Comprehensive help center and documentation for Billo Invoicing",
            publisher: {
              "@type": "Organization",
              name: "Billo Software",
              url: "https://billoinvoicing.com",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://billoinvoicing.com/help?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <Script
        type="application/ld+json"
        id="organization-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Billo Software",
            url: "https://billoinvoicing.com",
            logo: "https://billoinvoicing.com/img/billo-media/icon-color-square.png",
            sameAs: ["https://github.com/billosoftware"],
          }),
        }}
      />
    </div>
  );
}
