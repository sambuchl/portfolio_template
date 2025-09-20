# Minimalist single-page portfolio & blog template

This repo now ships as a tiny single-page app inspired by the calm typography of Sam Altman’s Posthaven blog. The layout leans on Bootstrap 5 for spacing and grid helpers, while Vue keeps the HTML tidy by rendering all copy from one central content file.

## What’s inside

- **`index.html`** – the only page you need. It wires Bootstrap, Vue, and the renderer, then hands off the layout to data-driven templates.
- **`content.js`** – all editable text, links, and lists live here. Each field has a `// #UPDATE` note so first-time site builders know exactly what to change.
- **`app.js`** – a lean Vue instance that loads `content.js`, sorts posts so the newest appears first, syncs the browser hash for post views, and updates the document metadata.
- **`styles.css`** – light visual polish on top of Bootstrap to preserve the Posthaven-inspired rhythm.

## Editing your site

1. Open **`content.js`** and follow the `#UPDATE` comments to swap in your own name, bio, projects, posts, and contact info.
2. Add or remove highlight cards by editing the `highlights.items` array. Each entry supports an optional link.
3. Manage essays in the `writing.posts` array. Include a unique `slug` for each post so the single-page router can load it at `#post/your-slug`. Posts are automatically shown from newest to oldest using their `date` value.
4. Adjust colors, typography, or spacing by tweaking the CSS custom properties at the top of **`styles.css`**.

The Vue app automatically updates the `<title>` tag and meta description using the values you set in `content.js`, so you only change them once.

## Previewing locally

Because everything runs client-side, you can open `index.html` directly in a browser. For hash-based navigation (`#post/slug`) to work consistently, serve the folder through any static server:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000) and click around.

## Deploying

Commit your edits to GitHub and enable GitHub Pages, Netlify, Vercel, or any static host. No build step is required; upload the four files as-is.

## Included libraries

- [Bootstrap 5](https://getbootstrap.com/) via CDN for grid, typography, and component utilities.
- [Vue 3](https://vuejs.org/) via CDN for declarative templates and simple state handling.

## License

MIT
