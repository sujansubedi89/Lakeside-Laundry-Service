# Lakeside Laundry Services

A plain HTML, CSS, and JavaScript website for GitHub Pages. There is no build step, backend, framework, font download, or external script dependency. Google Maps is embedded on the contact page; GA4 is not loaded until a real measurement ID is configured.

## Keep private scans out of the public site

Four business registration, identity, and utility-bill scans were found in `assets/images/`. They have not been opened or modified. They are excluded by `.gitignore`, but `.gitignore` cannot unpublish files already committed or uploaded. Move these private documents outside the website folder and verify they are absent from the GitHub repository before publishing. Do not upload the entire workspace through GitHub's web interface while these scans remain in the folder.

## Before launch

Search the repository for `[PLACEHOLDER:` and replace every remaining item with verified business information. Keep the business name exactly `Lakeside Laundry Services`. Do not publish unconfirmed rates, hours, turnaround promises, pickup areas, reviews, or service claims.

Set the canonical, Open Graph, sitemap, and robots URLs to the actual site origin. Configure the WhatsApp number in `assets/js/site.js` using digits only, including the country code and excluding `+`. Replace each phone placeholder with the verified international number. Add only confirmed services and actual prices. Edit the JSON-LD opening hours, coordinates, street address, service area, and business profile links to match the real business and Google Business Profile. Remove the social profile placeholder if there is no corresponding profile.

Set `GA_MEASUREMENT_ID` in `assets/js/site.js` to the actual `G-...` measurement ID to enable analytics. With the placeholder present, GA4 is not loaded. Set the Google Maps iframe to the verified business location after confirming the address.

Replace the shop image placeholder using the guidance and 41 descriptive filename suggestions in `assets/images/README.md`. The listed photo names are suggestions, not existing assets. Use real business photos only.

The `CNAME` file contains a placeholder. Replace its entire contents with your verified custom domain before using a custom domain; delete the file if you will use only the default `github.io` address.

## Publish on GitHub Pages

1. Create a GitHub repository and upload the contents of this folder to its `main` branch, with `index.html` at the repository root.
2. In the repository, open **Settings → Pages**. Select **Deploy from a branch**, choose **main** and **/(root)**, then save.
3. Wait for the Pages deployment and open the published URL. If using a custom domain, replace the `CNAME` placeholder, set the domain in **Settings → Pages**, add the DNS records GitHub specifies, and enable **Enforce HTTPS** after it becomes available.
4. Replace the site-origin placeholders in canonical links, social metadata, `sitemap.xml`, and `robots.txt` with the actual published origin. Submit `/sitemap.xml` in Google Search Console.

## Pre-launch checklist

- [ ] Search for and replace every `[PLACEHOLDER:` value; remove `CNAME` when no custom domain is used.
- [ ] Test every WhatsApp link and order-helper form on a real phone.
- [ ] Confirm phone, address, opening hours, service area, and prices match the business and Google Business Profile.
- [ ] Validate JSON-LD with Google's Rich Results Test; remove optional schema entries that are not real.
- [ ] Run PageSpeed Insights on the published mobile site.
- [ ] Confirm GA4 events `whatsapp_click`, `phone_click`, and `order_helper_submit` fire with the intended page and button-location parameters.
- [ ] Check the sitemap, canonical URLs, map pin, mobile sticky controls, and custom 404 page on the deployed site.