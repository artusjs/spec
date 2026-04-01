# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Artus Framework Specification** documentation site - a Rspress-based documentation website for the Artus Node.js enterprise framework. The specification describes how to build enterprise Node.js frameworks for Web, RPC, Serverless, and other scenarios.

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

# Preview production build locally
pnpm preview
```

### Linting and Formatting

```bash
# Format all files with Prettier
pnpm prettier

# Lint Markdown files
pnpm lint:md
```

## Architecture

### Framework Stack

- **Rspress** - Static site generator for documentation (built on Rsbuild/React)
- **pnpm** - Package manager
- **Husky** - Git hooks manager
- **lint-staged** - Run linters on staged files

### Key Files

| File                 | Purpose                                                |
| -------------------- | ------------------------------------------------------ |
| `rspress.config.ts`  | Rspress configuration (theme, nav, sidebar, plugins)   |
| `package.json`       | Scripts and dependencies                               |
| `.prettierrc.js`     | Prettier formatting rules                              |
| `.markdownlint.json` | Markdown linting rules (MD013 disabled for long lines) |
| `.husky/pre-commit`  | Pre-commit hook running lint-staged                    |

### Content Structure

Documentation content lives in `docs/` directory:

```
docs/
├── index.mdx                    # Homepage (Rspress hero frontmatter format)
├── public/logo/                 # Static assets (logo files)
├── core/                        # Core specification docs
│   ├── 1.introduction.md
│   ├── 2.loader.mdx
│   ├── 3.plugin.mdx
│   ├── 4.pipeline.mdx
│   ├── 5.exception.mdx
│   └── v1/                      # Versioned specs (framework, trigger)
├── ecosystem/                   # Ecosystem documentation
│   ├── artus-cli/               # CLI tool docs
│   └── artusx/                  # ArtusX framework docs
├── tutorials/                   # Tutorial content
└── community/                   # Community guidelines
    ├── 1.error_code.md
    ├── 2.package.md
    ├── 3.fundamental.md
    └── 4.convention.md          # Format conventions (important!)
```

### Navigation Configuration

The sidebar and navigation are **manually configured** in `rspress.config.ts` under `themeConfig.nav` and `themeConfig.sidebar`, not auto-generated from file structure. When adding new pages:

1. Add the file in the appropriate `docs/` subdirectory
2. Update `rspress.config.ts` to include the new page in the nav or sidebar

### Plugins

- `@rspress/plugin-sitemap` - Generates sitemap.xml
- `@rspress/plugin-llms` - Generates llms.txt for AI consumption

## Content Guidelines

### Markdown Conventions

Refer to `docs/community/4.convention.md` for detailed formatting conventions. Key points:

- Use `.md` for plain Markdown, `.mdx` for JSX-embedded content
- Frontmatter supported for Rspress metadata (title, description)
- Homepage uses special frontmatter format with `pageType: home`, `hero`, and `features`

### Linting Rules

- **Prettier**: 100 char print width, 2-space tabs, single quotes, LF line endings
- **Markdownlint**: Standard rules with MD013 (line length) disabled

### Git Hooks

Husky is configured with lint-staged to run Prettier on commits for all files, and markdownlint for docs files.

## Important Notes

- **Language**: All documentation content is in Chinese. Do not translate to other languages.
- **Package Manager**: This project uses `pnpm`. Do not use `npm` or `yarn`.
- **No Test Suite**: This is a documentation site with no test commands.
