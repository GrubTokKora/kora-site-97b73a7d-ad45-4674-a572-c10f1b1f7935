# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Sleepy Tattoos — Joel Tello | Tattoo Shop in White Plains NY
purpose: Single-page site for Sleepy Tattoos, Joel Tello's tattoo shop in White Plains, NY: hero, highlights, recent work, specialties, about Joel, booking by text, visit info and FAQ.
sections:
- `#top` "SleepyTattoos" — split hero with the Joel Tello eyebrow, the Sleepy Tattoos name, shop tagline, Text to Book and See the Work buttons, chest-piece photo, and the three-stat highlights strip
- `#work` "Recent pieces" — gallery of ten recent tattoo photos, each linking to its Instagram reel
- `#styles` "What Joel does best" — four numbered specialties: black and grey realism, portraits, custom lettering, cover-ups
- `#about` "The artist behind Sleepy Tattoos" — Joel's round portrait and his first-person story, pull quote and sign-off
- `#book` "Ready when you are" — booking band: appointments by text, the large phone number, text and call buttons, Instagram DM chip
- `#visit` "Find the shop" — two columns: shop address with directions button and 18+ ID badge; opening hours list with today highlighted and the text-to-book line
- `#faq` "Frequently asked questions" — six-question FAQ accordion with matching FAQPage schema
also: Opening hours appear in three places: the Visit hours list, the JSON-LD openingHoursSpecification and llms.txt; keep them in sync.

## 404.html → /404
title: Page not found | Sleepy Tattoos, White Plains NY
purpose: Platform not-found page (noindex) linking back to the homepage and the phone line.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — business summary for AI crawlers: address, text booking, 18+ policy, artists and Instagram links: Sleepy Tattoos  [content]
- `robots.txt` — 89 bytes — too small to hold content
- `sitemap.xml` — sitemap listing the homepage (rewritten at deploy)
- `assets/site.js` — site behaviour: scroll reveals and homepage anchor rewriting for the shared header links

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
