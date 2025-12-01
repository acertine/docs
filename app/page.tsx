import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare01Icon, ComputerTerminal01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acertine Docs",
  description: "Comprehensive documentation for Acertine. Learn how to use Acertine to its full potential.",
  keywords: [
    "Acertine docs",
    "acertine documentation",
    "acertine help",
    "acertine support",
    "acertine blog",
    "acertine news",
    "acertine updates",
    "acertine releases",
    "acertine features",
    "acertine integrations",
  ],
  openGraph: {
    title: "Acertine Docs - Documentation & Guides",
    description: "Comprehensive documentation for Acertine. Learn how to use Acertine to its full potential.",
    url: "https://docs.acertine.com",
    siteName: "Acertine Docs",
    images: [
      {
        url: "/public-og.png",
        width: 1200,
        height: 630,
        alt: "Acertine Docs",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acertine Docs",
    description: "Comprehensive help center and documentation for Acertine Flow.",
    images: ["/public-og.png"],
  },
  alternates: {
    canonical: "https://flow.acertine.com",
  },
};

export default function Home() {
  return (
    <div className="flex sm:min-h-[80.vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      <Link href="https://github.com/acertine/docs" target="_blank" className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12">
        Follow along on GitHub <HugeiconsIcon icon={LinkSquare01Icon} className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
        Acertine <span className="text-primary">Docs</span>
      </h1>
      <p className="mb-8 md:text-lg text-base  max-w-[1200px] text-muted-foreground text-left sm:text-center">
        The docs are a comprehensive guide on using Acertine products. Whether you&apos;re a new user or an experienced one, we&apos;ve got you covered.
      </p>
      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>
        <Link href={`/flow-help${page_routes[0].href}`} className={buttonVariants({ variant: "default", className: "px-6", size: "lg" })}>
          Get Started
        </Link>
      </div>
      <Script
        type="application/ld+json"
        id="homepage-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Acertine Docs",
            url: "https://docs.acertine.com",
            description: "Comprehensive documentation for Acertine",
            publisher: {
              "@type": "Organization",
              name: "Acertine Ltd",
              url: "https://docs.acertine.com",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://docs.acertine.com/help?q={search_term_string}",
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
            name: "Acertine Ltd",
            url: "https://flow.acertine.com",
            logo: "https://docs.acertine.com/img/acertine/light.svg",
            sameAs: ["https://github.com/acertine"],
          }),
        }}
      />
    </div>
  );
}
