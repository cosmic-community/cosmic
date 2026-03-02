# Cosmic — Startup Product Website

![Cosmic Startup Website](https://imgix.cosmicjs.com/4b2e7850-2e7b-11f0-a286-f39ab458e062-cosmic-og.png?w=1200&h=300&fit=crop&auto=format,compress)

A beautiful, modern startup product website built with Next.js 16, Tailwind CSS, and Cosmic CMS. Features a dynamic homepage, blog with individual post pages, pricing comparison, team directory, and customer testimonials — all content managed through your Cosmic dashboard.

## Features

- 🏠 **Dynamic Homepage** — Hero, features, pricing, team, testimonials, and blog sections
- 📝 **Full Blog** — Blog listing with individual post pages, author info, and rich content
- 💰 **Pricing Tiers** — Side-by-side plan comparison with featured plan highlighting
- 👥 **Team Directory** — Team member grid with photos, bios, and social links
- ⭐ **Testimonials** — Star-rated customer quotes with avatars and company info
- 🚀 **Features Showcase** — Icon-rich feature grid with descriptions
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Server-Side Rendered** — Fast page loads with Next.js 16 App Router
- 🎨 **Modern Design** — Gradient accents, smooth animations, Inter typography

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=69a5bb01facf688b249f00e6&clone_repository=69a5bc6d361119eec872758f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a startup product website with features, pricing tiers, team members, blog posts, and customer testimonials. Additional details: Pull in the blog posts"

### Code Generation Prompt

> "Build a Next.js application for a company website called 'Cosmic'. The content is managed in Cosmic CMS with the following object types: features, pricing-tiers, team-members, blog-posts, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type. Additional context: Pull in the blog posts"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic CMS](https://www.cosmicjs.com/docs) — Headless content management
- [@cosmicjs/sdk](https://www.npmjs.com/package/@cosmicjs/sdk) — Cosmic JavaScript SDK

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the content models set up

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd cosmic-startup-website

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic credentials

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Cosmic SDK Examples

### Fetching all blog posts
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a single blog post by slug
```typescript
const { object: post } = await cosmic.objects
  .findOne({ type: 'blog-posts', slug: 'my-post-slug' })
  .props(['id', 'title', 'slug', 'metadata', 'content'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses the following Cosmic object types:

| Object Type | Slug | Description |
|---|---|---|
| Features | `features` | Product features with icon, name, description |
| Pricing Tiers | `pricing-tiers` | Plan cards with price, features, CTA |
| Team Members | `team-members` | Staff profiles with headshot, bio, social links |
| Blog Posts | `blog-posts` | Blog articles with featured image, author, content |
| Testimonials | `testimonials` | Customer quotes with rating, avatar, company |

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import on [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->