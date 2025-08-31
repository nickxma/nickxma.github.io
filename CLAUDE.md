# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Nick's personal website hosted on GitHub Pages at nickxma.github.io. It's a minimal static HTML site showcasing work, projects, and contact information with a terminal-inspired aesthetic.

## Architecture

**Simple Static Structure:**
- `index.html` - Main page with nested list structure: work, project, connect sections
- `styles.css` - Terminal-style CSS using monospace fonts (Menlo, Monaco, Courier New)
- `favicon/` - Complete favicon set with multiple formats and web manifest
- No build process, JavaScript framework, or package.json required

**Hosting:** GitHub Pages serves directly from main branch

## Development Commands

### Local Development
```bash
# Start local server for testing
python3 -m http.server 8000
# Access at http://localhost:8000
```

### Deployment
```bash
# Standard workflow - changes auto-deploy to GitHub Pages
git add .
git commit -m "Description of changes"
git push origin main
```

## Content Structure

The site uses a nested list hierarchy:
- **work** - Professional activities (PayPal Crypto, Formula Body Works)  
- **project** - Personal projects (Mindfulness Wiki, Rocket Pool mini pool operator)
- **connect** - Contact methods (ENS domain, email, Telegram)

All external links use `target="_blank"` to open in new tabs.

## Design Philosophy

- Monospace font family for terminal aesthetic
- Minimal black/white color scheme  
- Clean HTML without JavaScript dependencies
- Mobile viewport support
- Progressive list styling (disc > circle > square for nested levels)

## Key Files

- `index.html:1-39` - Complete site structure and content
- `styles.css:1-52` - All styling including nested list hierarchy
- `WARP.md` - Similar guidance file for Warp terminal (reference for development commands)