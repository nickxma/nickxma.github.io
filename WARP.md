# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a simple personal website/portfolio for nickxma, hosted on GitHub Pages. The site is a static HTML page with minimal styling, showcasing work, projects, and contact information.

## Architecture

**Simple Static Website Structure:**
- `index.html` - Main landing page with personal information, work links, and contact details
- `styles.css` - Minimal CSS styling using monospace fonts for a terminal-like aesthetic
- `favicon/` - Directory containing various favicon formats and web manifest files
- `.gitignore` - Basic Git ignore file (currently only ignoring .DS_Store)

**Hosting:** GitHub Pages automatically serves the site from the main branch at nickxma.github.io

## Development Commands

### Local Development Server
```bash
# Start local development server (Python 3)
python3 -m http.server 8000

# Access at http://localhost:8000
```

### Git Operations
```bash
# Check status and recent changes
git --no-pager status
git --no-pager log --oneline -10

# Standard workflow for updates
git add .
git commit -m "Your commit message"
git push origin main
```

### Testing Changes
```bash
# Validate HTML structure (if html-validator is available)
html-validator index.html

# Check for broken links (if available)
linkchecker http://localhost:8000
```

## Content Structure

The main content is organized in a nested list format:
- **work** - Current professional activities (Formula, Ethereum validator, Rocket Pool DAO, LLM content creation)
- **projects** - Personal projects (both require email access)
- **get in touch** - Contact methods (Telegram, ENS domain, email, LinkedIn)

## Design Philosophy

- **Minimalist aesthetic** with monospace font (Menlo, Monaco, Courier New)
- **Terminal-inspired styling** with simple black text on white background
- **Clean HTML structure** without JavaScript dependencies
- **Mobile-friendly** with viewport meta tag
- **Comprehensive favicon support** across different devices and platforms

## Deployment

Changes are automatically deployed to GitHub Pages when pushed to the main branch. The site is accessible at https://nickxma.github.io

## Development Notes

- All external links open in new tabs/windows (`target="_blank"`)
- Favicon files include comprehensive format support (ICO, PNG, SVG, Web Manifest)
- CSS uses progressive fallback for monospace fonts
- No build process required - direct HTML/CSS editing
- Repository includes GitHub token in remote URL (be careful when sharing git output)
