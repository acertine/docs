import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";
import { getAllBlogsFrontmatter } from "@/lib/markdown";
import { getAllChilds } from "@/lib/markdown";
import { formatDate2, stringToDate } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://flow.acertine.com",
  },
};

export default async function Home() {
  const gettingStartedPages = await getAllChilds("getting-started");
  const allBlogs = (await getAllBlogsFrontmatter()).sort((a, b) => stringToDate(b.date).getTime() - stringToDate(a.date).getTime());
  const latestBlogs = allBlogs.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 sm:py-12 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="relative flex flex-col items-center text-center sm:py-20 py-12 px-4 max-w-5xl mx-auto">
          {/* GitHub Link Badge */}
          <Link
            href="https://github.com/acertine/docs"
            target="_blank"
            className="group mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/80 backdrop-blur-sm hover:bg-background transition-all hover:scale-105 text-sm font-medium"
          >
            <HugeiconsIcon icon={LinkSquare01Icon} className="w-4 h-4" />
            <span>Follow along on GitHub</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className="w-0 group-hover:w-4 invisible group-hover:visible opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 transition-all duration-300 ease-out"
              style={{ transitionProperty: "opacity, transform, width" }}
            />
          </Link>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Acertine </span>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Help</span>
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Help Center
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed font-light">
            Comprehensive documentation and guides for Acertine products. <span className="text-foreground/80">Everything you need to succeed,</span> whether you&apos;re just getting started or
            looking to master advanced features.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/blog"
              className={buttonVariants({
                variant: "link",
                size: "lg",
              })}
            >
              Explore Blog
            </Link>
            <Link
              href={`/flow-help${page_routes[0].href}`}
              className={buttonVariants({
                variant: "default",
                size: "lg",
              })}
            >
              Get Started
              <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats or Quick Links */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">{page_routes.length}+</span>
              <span>Help Articles</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">{allBlogs.length}+</span>
              <span>Blog Posts</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">100%</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      {gettingStartedPages.length > 0 && (
        <section className="px-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Getting Started</h2>
              <p className="text-muted-foreground">Popular guides to help you get up and running</p>
            </div>
            <Link href={`/flow-help/getting-started/introduction`} className="text-sm text-primary hover:underline hidden sm:flex items-center gap-1">
              View all <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {gettingStartedPages.map((page) => (
              <Link key={page.href} href={page.href} className="group flex flex-col gap-3 p-6 border rounded-lg hover:border-primary/50 transition-colors hover:shadow-md">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{page.title}</h3>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                {page.description && <p className="text-sm text-muted-foreground line-clamp-2">{page.description}</p>}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Latest Blog Posts Section */}
      {latestBlogs.length > 0 && (
        <section className="px-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Latest Updates</h2>
              <p className="text-muted-foreground">Stay up to date with the latest news and features</p>
            </div>
            <Link href="/blog" className="text-sm text-primary hover:underline hidden sm:flex items-center gap-1">
              View all <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {latestBlogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group flex flex-col gap-3 border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-md">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image src={blog.cover} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{blog.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <p className="text-xs text-muted-foreground">{formatDate2(blog.date)}</p>
                    {blog.authors && blog.authors.length > 0 && (
                      <div className="flex items-center -space-x-2">
                        {blog.authors.slice(0, 3).map((author, index) => (
                          <Avatar key={author.username} className={`w-6 h-6 border-2 border-background ${index !== 0 ? "-ml-2" : ""}`}>
                            <AvatarImage src={author.avatar} alt={author.username} />
                            <AvatarFallback className="text-xs">{author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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
