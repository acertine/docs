import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getCompiledDocsForSlug, getDocFrontmatter } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import Script from "next/script";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getCompiledDocsForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] py-10 mx-auto">
        <div className="w-full mx-auto">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <h1 className="sm:text-3xl text-2xl !-mt-0.5">{res.frontmatter.title}</h1>
            <p className="-mt-4 text-muted-foreground sm:text-[16.5px] text-[14.5px]">{res.frontmatter.description}</p>
            <div>{res.content}</div>
            <Pagination pathname={pathName} />
          </Typography>
        </div>
      </div>

      <Toc path={pathName} />
      <Script
        type="application/ld+json"
        id="article-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: res.frontmatter.title,
            description: res.frontmatter.description,
            url: `https://flow.acertine.com/help/${pathName}`,
            publisher: {
              "@type": "Organization",
              name: "Acertine Software",
              url: "https://flow.acertine.com",
              logo: {
                "@type": "ImageObject",
                url: "https://flow.acertine.com/img/billo-media/icon-color-square.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://flow.acertine.com/help/${pathName}`,
            },
          }),
        }}
      />
      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Help",
                item: "https://flow.acertine.com/help",
              },
              ...slug.map((path, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: path
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" "),
                item: `https://flow.acertine.com/help/${slug.slice(0, index + 1).join("/")}`,
              })),
            ],
          }),
        }}
      />
    </div>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getDocFrontmatter(pathName);
  if (!res) return {};
  const { title, description } = res;

  const url = `https://flow.acertine.com/help/${pathName}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Acertine Flow Help`,
      description,
      url,
      siteName: "Acertine Flow Help",
      type: "article",
      images: [
        {
          url: "/public-og.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Acertine Flow Help`,
      description,
      images: ["/public-og.png"],
    },
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
