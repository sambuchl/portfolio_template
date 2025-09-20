# Minimalist portfolio & blog template

A lightweight, mobile-first portfolio inspired by the calm typography and centered column layout of Sam Altman’s Posthaven blog. It now pairs Bootstrap 5 utilities with a tiny layer of custom CSS so you can tweak spacing and typography without rebuilding the design system.

## What’s inside

- **`index.html`** – landing page with an intro, selected work highlights, recent writing, and a contact call-to-action.
- **`blog.html`** – archive view for essays and updates with a narrow reading column.
- **`post.html`** – sample long-form article page using the same minimal typography.
- **`styles.css`** – light overrides that sit on top of Bootstrap for letter spacing, article rhythm, and accent styling.

All content blocks include `<!-- #UPDATE: ... -->` comments (hidden from the UI) so you can quickly spot which text, links, or metadata to personalize.

## Getting started

1. Search for `#UPDATE` in the HTML files and replace the placeholder copy (site title, hero text, projects, posts, contact links) with your own content.
2. Update the `mailto:` links and the Formspree action in `index.html`, or swap the form for your preferred tool.
3. Customize colors, fonts, or spacing by editing the CSS custom properties and utility helpers near the top of `styles.css`.
4. Drop the files onto any static host (GitHub Pages, Vercel, Netlify, etc.) or integrate them into your existing site.

### Working with Bootstrap

- Bootstrap’s CDN links are already included in each HTML file; add additional components using standard Bootstrap markup when needed.
- The template leans on Bootstrap’s grid, spacing, and typography classes. Custom helpers such as `.letter-spacing-wide`, `.py-lg-6`, and `.post-content` keep Posthaven’s restrained feel.
- Because Bootstrap handles most layout, you can safely delete sections or add new ones without touching the core CSS.

## License

MIT
