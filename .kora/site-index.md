# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: 914 Ink Tattoos — Joel | Sleepy Tattoos, White Plains NY
purpose: Single-page site for 914 Ink Tattoos, a tattoo shop in White Plains, NY and home of Sleepy Tattoos (artist Joel Tello): hero, highlights, recent work, specialties, about Joel, booking by text, visit info and FAQ.
sections:
- `#top` "914 InkTattoos" — split hero with the shop name, Sleepy Tattoos tagline, Text to Book and See the Work buttons, chest-piece photo, and the three-stat highlights strip
- `#work` "Recent pieces" — gallery of ten recent tattoo photos, each linking to its Instagram reel
- `#styles` "What Joel does best" — four numbered specialties: black and grey realism, portraits, custom lettering, cover-ups
- `#about` "The artist behind Sleepy Tattoos" — Joel's round portrait and his first-person story, pull quote and sign-off
- `#book` "Ready when you are" — booking band: appointments by text, the large phone number, text and call buttons, Instagram DM chips
- `#visit` "Find the shop" — shop address with directions button, opening hours list with today highlighted, 18+ ID badge, and the other two artists with Instagram handles
- `#faq` "Frequently asked questions" — six-question FAQ accordion with matching FAQPage schema
also: Opening hours appear in three places: the Visit hours list, the JSON-LD openingHoursSpecification and llms.txt; keep them in sync.

## 404.html → /404
title: Page not found | 914 Ink Tattoos, White Plains NY
purpose: Platform not-found page (noindex) linking back to the homepage and the phone line.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — business summary for AI crawlers: address, text booking, 18+ policy, artists and Instagram links: Sleepy Tattoos, Joel Tello  [content]
- `robots.txt` — 89 bytes — too small to hold content
- `sitemap.xml` — sitemap listing the homepage (rewritten at deploy)
- `assets/site.js` — site behaviour: scroll reveals and homepage anchor rewriting for the shared header links

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
