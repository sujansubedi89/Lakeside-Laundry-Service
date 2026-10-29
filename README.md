# Lakeside Laundry Services

A plain HTML, CSS, and JavaScript website for GitHub Pages. There is no build step, backend, framework, font download, or external script dependency. Google Maps is embedded on the contact page; GA4 is not loaded until a real measurement ID is configured.

## Keep private scans out of the public site

Four business registration, identity, and utility-bill scans were found in `assets/images/`. They have not been opened or modified. They are excluded by `.gitignore`, but `.gitignore` cannot unpublish files already committed or uploaded. Move these private documents outside the website folder and verify they are absent from the GitHub repository before publishing. Do not upload the entire workspace through GitHub's web interface while these scans remain in the folder.

## Before launch

Search the repository for `[PLACEHOLDER:` and replace the remaining site-origin, custom-domain, and GA4 values before launch. The supplied phone, address, coordinates, opening hours, express options, delivery areas, and service details are already configured. Keep the business name exactly `Lakeside Laundry Services`. Prices intentionally remain quote-only; do not add rates until supplied and approved. No review count or rating was provided, so none is shown.

Set the canonical, Open Graph, sitemap, and robots URLs to the actual site origin. The WhatsApp number and `tel:` links use the supplied number. Confirm the JSON-LD NAP, opening hours, coordinates, service area, and Google Maps business search match the live business listing before launch. Add prices only if you later choose to publish verified rates. No social profile URL was supplied or added.

Set `GA_MEASUREMENT_ID` in `assets/js/site.js` to the actual `G-...` measurement ID to enable analytics. With the placeholder present, GA4 is not loaded. The contact map and directions use the supplied Lakeside Road Zone coordinates.

The homepage already uses the supplied storefront street-view photo in WebP with its original JPEG fallback. See `assets/images/README.md` for the supplied storefront photos and optional filename suggestions. The listed suggestions are not claims that additional images exist. Use real business photos only.

The `CNAME` file contains a placeholder. Replace its entire contents with your verified custom domain before using a custom domain; delete the file if you will use only the default `github.io` address.

## Publish on GitHub Pages

1. Create a GitHub repository and upload the contents of this folder to its `main` branch, with `index.html` at the repository root.
2. In the repository, open **Settings → Pages**. Select **Deploy from a branch**, choose **main** and **/(root)**, then save.
3. Wait for the Pages deployment and open the published URL. If using a custom domain, replace the `CNAME` placeholder, set the domain in **Settings → Pages**, add the DNS records GitHub specifies, and enable **Enforce HTTPS** after it becomes available.
4. Replace the site-origin placeholders in canonical links, social metadata, `sitemap.xml`, and `robots.txt` with the actual published origin. Submit `/sitemap.xml` in Google Search Console.

## Pre-launch checklist

- [ ] Replace the remaining site-origin and GA4 placeholders; remove `CNAME` when no custom domain is used.
- [ ] Test every WhatsApp link and order-helper form on a real phone.
- [ ] Confirm phone, address, opening hours, service area, and free-delivery terms match the business and Google Maps listing.
- [ ] Validate JSON-LD with Google's Rich Results Test; remove optional schema entries that are not real.
- [ ] Run PageSpeed Insights on the published mobile site.
- [ ] Confirm GA4 events `whatsapp_click`, `phone_click`, and `order_helper_submit` fire with the intended page and button-location parameters.
- [ ] Check the sitemap, canonical URLs, map pin, mobile sticky controls, and custom 404 page on the deployed site.