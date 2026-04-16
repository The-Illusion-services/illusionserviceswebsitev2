# Deploying to cPanel

This project is now configured for static cPanel hosting.

The contact form submits to Formspree:

```text
https://formspree.io/f/mjgjyypp
```

Because of that, the site does not need a Node.js server on cPanel.

Sanity content can still be read by the public site. The embedded `/studio` route is not included in this static cPanel deployment; use Sanity's hosted dashboard or run Studio locally when editing content.

## Build Locally

Run:

```bash
npm install
npm run build
```

The static site will be generated in:

```text
out/
```

## Upload to cPanel

1. Open cPanel.
2. Go to File Manager.
3. Open your domain folder, usually `public_html`.
4. Delete old site files from `public_html` if this domain is only for this site.
5. Open the local `out/` folder.
6. Zip the contents inside `out/`, not the `out` folder itself.
7. Upload the zip to `public_html`.
8. Extract it there.

After extraction, `public_html` should contain files like:

```text
index.html
contact/
gallery/
pricing/
team/
_next/
```

## .htaccess

Create or update this file in `public_html`:

```text
.htaccess
```

Use:

```apache
Options -MultiViews
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^(.+)/$ $1/index.html [L]
RewriteRule ^$ index.html [L]
```

This keeps clean URLs like `/contact/`, `/gallery/`, and `/team/` working.

## Sanity CORS

In Sanity Manage, add your final domain as a CORS origin.

Add both versions if you use both:

```text
https://yourdomain.com
https://www.yourdomain.com
```

For static cPanel hosting, the deployed site does not include `/studio`. Add your production domain for frontend Sanity reads, and use Sanity's hosted dashboard or local Studio for editing.

## Formspree

After the first live submission, Formspree may send a confirmation email. Confirm it so future submissions are delivered normally.

## Important

Do not upload `.env`, `.git`, `node_modules`, or the project source files to `public_html`.

Only upload the contents of `out/`.
