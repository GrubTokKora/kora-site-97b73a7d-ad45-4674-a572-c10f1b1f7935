<!-- Design decision for Sleepy Tattoos (PROD; business renamed to Sleepy Tattoos 2026-10-23). Converted by Claude Code from the owner-supplied single-page HTML. -->

# DESIGN.md: Sleepy Tattoos

archetype: ink-and-blood-noir
interaction_level: L1

typography:
  display: "Anton"                 # condensed uppercase display for headings, numbers, stats
  body: "Manrope"                  # 400-800
  ornament: "UnifrakturMaguntia"   # blackletter, used only for the hero eyebrow ("Joel Tello") and the sign-off
  note: Fonts are exactly the ones in the supplied design.

palette:
  primary: "#c22430"    # blood red: CTAs, kicker labels, the INK in the wordmark, style numbers, quote rule
  secondary: "#0b0a09"  # near-black page ground
  accent: "#c9a35f"     # tattoo gold: blackletter eyebrow, reel links, artist handles, hovers
  application: |
    Dark-only site (color-scheme: dark). Surfaces #121110 / #1a1815, hairlines #2a2723, bone text #ece5d8,
    dimmed bone #b7ae9e, muted #8d8577, red hover #8f1620. Pill buttons (999px), 14px tile radius.

composition: |
  Sticky blurred header (logo, wordmark, Work / Styles / Joel / Visit, Text to Book pill; links collapse to the pill
  under 720px) > split hero (copy left, chest-piece photo right with gradient fade) > 3-up stats strip > 10-tile work
  gallery linking to Instagram reels > numbered specialties list > About Joel (sticky round portrait + story + pull
  quote + blackletter sign-off) > booking band (big phone number, text/call buttons, Instagram DM chips) > Visit
  (address, directions and 18+ badge | opening hours with today highlighted) > FAQ (added for Kora) > footer.

motion: |
  Gentle fade-up reveals on scroll (assets/site.js, IntersectionObserver), gallery image zoom on hover, button press
  scale. All disabled under prefers-reduced-motion. Content is visible without JavaScript.

content_rules:
  - Copy is the owner's own text from the supplied HTML; keep it verbatim.
  - Business name is Sleepy Tattoos (owner, 2026-10-23). Never mention the former shop name, its old logo or its old Instagram account.
  - Logo: no logo artwork yet. Header/footer use a red Anton "S" monogram tile (.brand-mark); the favicon is the same tile as an inline SVG.
  - Bookings are by text (sms:+19144095271); there is no booking form.
  - Opening hours (owner-confirmed 2026-10-22, Google Business Profile): Mon–Sat 11 AM–8 PM, Sunday closed.
  - 18+ only, valid ID required.
  - Only Joel / Sleepy Tattoos is presented; the other artists who work at the address are not mentioned (owner, 2026-10-23).
