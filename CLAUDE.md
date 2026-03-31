# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Artus Framework Specification** documentation site - a Nextra-based documentation website for the Artus Node.js enterprise framework. The specification describes how to build enterprise Node.js frameworks for Web, RPC, Serverless, and other scenarios.

- **Documentation Language**: Chinese (中文) - all content is written in Chinese and should not be translated
- **Site URL**: https://artusjs.org
- **Repository**: https://github.com/artusjs/spec

## Common Commands

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Serve production build locally
pnpm start
```

### Linting and Formatting

```bash
# Format all files with Prettier
pnpm prettier

# Lint Markdown files
pnpm lint:md
```

### Post-build

```bash
# Generate sitemap (runs automatically after build)
pnpm postbuild
```

## Architecture

### Framework Stack

- **Next.js 14** - React framework
- **Nextra 2** - Documentation site generator (theme: nextra-theme-docs)
- **Tailwind CSS** - Utility-first CSS framework
- **pnpm** - Package manager

### Key Files and Their Purposes

| File                     | Purpose                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `next.config.js`         | Next.js config with Nextra plugin wrapper                    |
| `theme.config.jsx`       | Nextra theme configuration (navbar, footer, SEO, edit links) |
| `tailwind.config.js`     | Tailwind CSS configuration                                   |
| `postcss.config.js`      | PostCSS configuration for Tailwind                           |
| `.prettierrc.js`         | Prettier formatting rules                                    |
| `.markdownlint.json`     | Markdown linting rules (MD013 disabled for long lines)       |
| `next-sitemap.config.js` | Sitemap generation config                                    |
| `pages/_app.mdx`         | Custom App component with medium-zoom image support          |

### Content Structure

Documentation content lives in `pages/` and follows Nextra's file-based routing:

```
pages/
├── index.mdx                    # Homepage with Hero/Features components
├── _app.mdx                     # Custom App (image zoom functionality)
├── core/                        # Core specification docs
│   ├── 1.introduction.md
│   ├── 2.loader.md
│   ├── 3.plugin.mdx
│   ├── 4.pipeline.mdx
│   ├── 5.exception.md
│   └── v1/                      # Versioned specs
├── ecosystem/                   # Ecosystem documentation
│   ├── artus-cli/               # CLI tool docs
│   │   ├── 1.quickstart.mdx
│   │   ├── 2.introduction.mdx
│   │   ├── advance/
│   │   └── plugins/
│   └── artusx/                  # ArtusX framework docs
│       ├── 1.quickstart.mdx
│       ├── 2.introduction.mdx
│       ├── 3.exception.mdx
│       ├── libs/
│       └── plugins/
├── tutorials/                   # Tutorial content
├── community/                   # Community guidelines
│   ├── 1.error_code.md
│   ├── 2.package.md
│   ├── 3.fundamental.md
│   └── 4.convention.md          # Format conventions (important!)
├── api/                         # API routes (OG image generation)
└── assets/                      # Static assets for docs
```

### Custom Components

Located in `components/`:

- `hero/` - Homepage hero section component
- `features/` - Homepage features grid component
- `table.tsx` - Reusable table component for MDX

### Static Assets

- `public/logo/` - Logo files (nodejs-logo.svg, nodejs.svg)
- `public/og.png` - Open Graph image for social sharing

## Content Guidelines

### Markdown Conventions

Refer to `pages/community/4.convention.md` for detailed formatting conventions. Key points:

- Use `.md` for plain Markdown, `.mdx` for JSX-embedded content
- Frontmatter supported for Nextra metadata
- Code blocks should specify language for syntax highlighting

### Linting Rules

- **Prettier**: 100 char print width, 2-space tabs, single quotes, LF line endings
- **Markdownlint**: Standard rules with MD013 (line length) disabled

### Image Handling

Images in documentation content automatically get medium-zoom functionality (click to zoom) via the custom `_app.mdx` component.

### Navigation Structure

Nextra automatically generates navigation from file structure. The order is determined by:

1. Frontmatter `title` for display names
2. File/directory names for sorting (hence the numeric prefixes like `1.`, `2.`)

## Important Notes

- **Language**: All documentation content is in Chinese. Do not translate to other languages.
- **Package Manager**: This project uses `pnpm`. Do not use `npm` or `yarn`.
- **Git Hooks**: Husky is configured with lint-staged to run Prettier on commits.
- **Site Generation**: Sitemap and robots.txt are auto-generated during build.
