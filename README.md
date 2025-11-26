# Acertine Flow Documentation

Documentation and blog website for [Acertine Flow](https://flow.acertine.com) - a complete invoice management platform built for modern businesses and freelancers.

## About

This repository contains the documentation site for Acertine Flow, featuring:

- **Help Documentation**: Comprehensive guides covering all features of Acertine Flow
- **Blog Posts**: Updates, announcements, and feature highlights
- **Search**: Algolia-powered search functionality

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with [shadcn/ui](https://ui.shadcn.com/) components
- **Content**: MDX files for documentation and blog posts
- **Search**: Algolia DocSearch
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── blog/              # Blog post pages
│   ├── help/              # Documentation pages
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── markdown/         # MDX components
│   └── ui/               # shadcn/ui components
├── contents/             # Content files
│   ├── blogs/           # Blog post MDX files
│   └── help/            # Documentation MDX files
├── lib/                 # Utility functions
│   ├── markdown.ts      # MDX processing
│   └── routes-config.ts # Documentation routes
└── styles/              # Global styles
```

## Content Management

### Adding Blog Posts

Create a new MDX file in `contents/blogs/` with the format `YYYYMMDD-slug.mdx`:

```mdx
---
title: "Your Blog Post Title"
description: "A brief description"
date: DD-MM-YYYY
authors:
  - avatar: "https://example.com/avatar.png"
    handle: username
    username: Name
    handleUrl: "https://github.com/username"
cover: "/img/posts/image.png"
---

Your blog content here...
```

### Adding Documentation

Create a new MDX file in `contents/help/[category]/[subcategory]/index.mdx`:

```mdx
---
title: "Documentation Title"
description: "Brief description"
---

Your documentation content...
```

Update `lib/routes-config.ts` to add the new route to the navigation.

## Features

- 📚 Comprehensive help documentation
- 📝 Blog posts and announcements
- 🔍 Algolia-powered search
- 🌓 Dark/light theme support
- 📱 Responsive design
- ♿ Accessibility features (dyslexic font option)
- 🔗 Table of contents for long articles
- 📄 Breadcrumb navigation

## License

See [LICENSE](LICENSE) file for details.

## Links

- **Website**: [flow.acertine.com](https://flow.acertine.com)
- **Help Center**: [flow.acertine.com/help](https://flow.acertine.com/help)
- **Support**: support@acertine.com
