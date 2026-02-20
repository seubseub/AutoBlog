# ToolVerdict - AI Tool Review Platform

**ToolVerdict** is a specialized blog platform for reviewing and comparing the latest AI tools. Built with Next.js 15, TailwindCSS, and Markdown-based content management.

## 🚀 Features

- **Modern UI**: Clean, professional design with Indigo/Purple AI-focused theme
- **Dynamic Routing**: Automatic generation of post pages, category filters, and tag clouds
- **SEO Optimized**: Metadata management for each review and automatic sitemap generation
- **AdSense Ready**: Integrated AdSense slots (4 positions) for monetization
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Markdown Content**: Simple YAML frontmatter + Markdown for easy content management
- **RSS Feed**: Automatic RSS feed generation for subscribers
- **Admin Dashboard**: Lightweight review interface to manage posts

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router, SSG/ISR)
- **Styling**: TailwindCSS v4
- **Content**: Markdown with gray-matter + remark/remark-html
- **Deployment**: Vercel
- **Languages**: TypeScript

## 📋 Categories

- **Writing AI**: ChatGPT, Claude, Jasper, Copysmith
- **Image AI**: Midjourney, DALL-E, Runway, Stable Diffusion
- **Coding AI**: GitHub Copilot, Codeium, Tabnine
- **Productivity AI**: Automation and workflow optimization tools
- **AI Comparison**: Head-to-head comparisons of popular AI tools

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/toolverdict.git
cd toolverdict
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

Add new AI tool reviews by creating markdown files in `public/content/posts/`:

```markdown
---
title: Tool Name - Review or Comparison
description: Brief description of the review
category: Writing AI | Image AI | Coding AI | Productivity AI | AI Comparison
tags: [Tool1, Tool2, Feature]
image: /images/tool.jpg
publishedAt: 2026-02-20
published: true
---

# Review Title

Your review content here...

## Pros
- Advantage 1
- Advantage 2

## Cons
- Disadvantage 1
```

## 💰 Monetization

- **Google AdSense**: 4 strategic ad placements
- **Publisher ID**: `ca-pub-5998647153718815`
- **Ad Positions**:
  1. Featured Post header
  2. Post list middle
  3. Post content middle
  4. Sidebar sticky

## 🌐 Deployment

Deploy to Vercel with one click:

```bash
npm install -g vercel
vercel
```

Or deploy manually:

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on every push

**Live URL**: https://toolverdict.vercel.app

## 📊 Admin Dashboard

Access the admin panel at `/admin` to:
- View all posts (published and drafts)
- Check publication status
- Edit post metadata
- Approve or reject submissions

## 🔄 API Routes

- `/feed.xml` - RSS Feed
- `/sitemap.xml` - XML Sitemap
- `/categories/[category]` - Category pages
- `/tags/[tag]` - Tag pages

## 📈 SEO

- Dynamic metadata for every page
- BlogPosting schema markup
- Automatic sitemap generation
- RSS feed for search engines
- Open Graph meta tags

## 🎨 Customization

### Update Branding

Edit `app/layout.tsx` for:
- Site title
- Meta description
- AdSense publisher ID

Edit `app/components/Header.tsx` for:
- Logo/site name
- Navigation links

Edit `tailwind.config.ts` for:
- Color theme (Indigo 600 primary)

## 📄 License

MIT License - feel free to use for commercial projects

## 👨‍💻 Contributing

Contributions are welcome! Please create a pull request with your improvements.

## 📧 Support

For issues or questions, please open a GitHub issue.

---

Built with ❤️ using Next.js and TailwindCSS
