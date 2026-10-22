---
name: Juris Prestige
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#44474d'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#281900'
  on-tertiary-container: '#a27e40'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdeab'
  tertiary-fixed-dim: '#eac07b'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5e4107'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 68px
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 46px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 52px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  legal-subtext:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2.5rem
  margin: 1.5rem
  margin-md: 3rem
  margin-lg: 5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system embodies the gravitas, absolute discretion, and distinguished intellect of senior legal counsel. Designed for high-net-worth individuals, corporate leaders, and institutions seeking precise legal documentation and authoritative advocacy, the interface evokes an atmosphere of timeless assurance, meticulous care, and judicial authority.

The visual style blends **Classic Legal Prestige** with contemporary, crisp minimalism. It eschews generic corporate tropes in favor of an editorial, bespoke demeanor reminiscent of fine legal parchment, polished brass, and hand-bound ledgers. Generous margins, stately typography, fine-line rule accents, and subtle seal motifs impart permanence and unwavering trust without feeling archaic or cluttered.

## Colors

The palette establishes an immediate sense of institutional dignity and precision:

- **Primary (`#0A192F`)**: Deep Sovereign Navy. Represents unshakeable stability, strategic depth, and authority. Used for major navigation headers, primary CTA backgrounds, prominent title anchors, and formal framing elements.
- **Secondary (`#C5A059`)**: Burnished Legal Gold. Represents distinction, excellence, and legacy. Reserved for active states, key consultation accents, seal insignias, subtle borders, and delicate divider ornaments. Never oversaturated; it must maintain a restrained, metallic warmth.
- **Tertiary (`#846328`)**: Antique Bronze. Acts as an anchoring tone for high-contrast gold text pairings, hover rings, and nuanced hairline treatments.
- **Neutral (`#1E293B`)**: Charcoal Slate. Delivers soft, high-legibility typographic contrast without the harshness of pure black.
- **Surface Canvas (`#FBFBF9` to `#F7F5F0`)**: Warm Legal Parchment. Provides an organic, welcoming texture that softens eye strain while elevating legal documentation layouts beyond stark white screens.
- **Borders & Rules (`#E2E8F0`)**: Fine-gage framing tone that maintains structural clarity while remaining unobtrusive.

## Typography

Typographic pairing balances classical legal gravitas with modern, razor-sharp technical readability.

- **Headlines & Editorial Callouts**: Set in `Playfair Display`. Its high-contrast serifs, sculptural terminals, and stately proportions echo legal registries, judicial rulings, and academic institutions. Headings should be set with deliberate tracking and generous line spacing to honor each statement.
- **Body & Legal Documentation**: Set in `Plus Jakarta Sans`. Modern, clean, and meticulously proportioned, it ensures complex statutory clauses, documentation terms, and consultation narratives remain legible and crisp across high-density devices.
- **Micro-labels & Status Indicators**: Set in uppercase `Plus Jakarta Sans` with expanded letter-spacing (+0.08em) to evoke precision-stamped official documents.

## Layout & Spacing

The layout is grounded in a disciplined 12-column responsive fluid grid designed to preserve editorial composure across varying resolutions.

- **Rhythm & Cadence**: Layouts favor breathing room over density. Section transitions use generous vertical intervals (`space-xl` and above) to emphasize deliberation and unhurried confidence.
- **Columns & Breakpoints**:
  - *Desktop (≥1200px)*: 12 columns, `margin-lg` (5rem) page boundary, `gutter-lg` (2.5rem). Max container constraint of 1280px for balanced reading proportions.
  - *Tablet (768px – 1199px)*: 8 columns, `margin-md` (3rem) boundary, `gutter` (1.5rem).
  - *Mobile (<768px)*: 4 columns, `margin` (1.5rem) boundary, `gutter` (1rem). Dense documentation switches to single-column card flows with clear hierarchical anchoring.
- **Content Real Estate**: Legal briefs and service practice areas should utilize asymmetric 7-and-5 or 8-and-4 column arrangements to pair narrative context with relevant counsel meta-data, credentials, and fee structures.

## Elevation & Depth

To avoid trivializing the professional tone with synthetic drop shadows, elevation is achieved through **Tonal Layers** and **Restrained Ambient Shadows**:

- **Ground Level (Canvas)**: Background parchment (`#FBFBF9` or `#F7F5F0`) serves as the base reading plane.
- **Mid-Tier (Containers & Cards)**: Elevated using crisp 1px borders (`#E2E8F0` or `#C5A059` at 30% alpha) on pure white (`#FFFFFF`) or parchment-light surfaces.
- **Top-Tier (Modals, Overlays, Floating Consultation Bars)**: Anchored by a subtle, deep ambient occlusion shadow: `0 12px 32px -4px rgba(10, 25, 47, 0.08), 0 4px 12px -2px rgba(10, 25, 47, 0.04)`. The blue-tinted shadow mirrors the primary navy, maintaining organic cohesion.
- **Rule Lines**: Deliberate horizontal and vertical hairline dividers (1px `#E2E8F0` or `#C5A059` with 40% opacity) delineate hierarchy without creating physical visual bulk.

## Shapes

The design system maintains a **Soft (Level 1)** structural foundation, favoring precision and architectural discipline over casual, hyper-rounded trends:

- **Base Radius (0.25rem / 4px)**: Standard buttons, text inputs, credential tags, and badge indicators.
- **Secondary Radius (0.5rem / 8px)**: Practice area cards, document viewer containers, and testimonial panels.
- **Accent Elements**: Subtle chamfered corners or classical debossed borders may be utilized for insignia seals and notary watermarks.
- **Formality**: Elements retain intentional geometry, reinforcing reliability, structured legal order, and firm conviction.

## Components

### Buttons & Consultation CTAs
- **Primary CTA**: Rich Sovereign Navy background (`#0A192F`), sharp white or warm cream text, accented with a 1px inner or perimeter hairline border in Burnished Gold (`#C5A059`). Hover state triggers a subtle elevation lift with a deep navy glow.
- **Secondary CTA (Retainer / Inquiry)**: Transparent surface with a 1.5px border in Burnished Gold (`#C5A059`), typography set in Deep Navy with gold hover fill.
- **Text Action Links**: Set in Deep Navy with an underlined Burnished Gold rule that transitions smoothly on hover.

### Practice Area Badges & Legal Chips
- Structured pill or 4px micro-capsules. Warm cream base, 1px border in `#C5A059` (40% opacity), text in `#1E293B` or `#0A192F`. 
- Prefix icons feature delicate line-art scales of justice, quill pens, wax seals, or judicial gavels rendered in `#C5A059`.

### Testimonial & Case Record Cards
- Background: `#FFFFFF` set against the parchment canvas, framed with a 1px `#E2E8F0` hairline border.
- Header: Client classification (e.g., *Corporate M&A, Trust Administration*) in uppercase gold subtext (`label-sm`).
- Body: Editorial quote in `Playfair Display` italic or clean `Plus Jakarta Sans`.
- Footer: Advocate verification seal and subtle monogram stamp.

### Input Fields & Legal Brief Forms
- Field background: Pure white (`#FFFFFF`) with a 1px border (`#E2E8F0`).
- Focus state: Border transitions to Burnished Gold (`#C5A059`) with a discrete 2px outer glow (`rgba(197, 160, 89, 0.15)`).
- Labels: Anchored above in `#1E293B` (`label-md`), accompanied by explicit legal privacy and confidentiality disclosures.

### Specialized Legal Motifs
- **Digital Seal & Monogram**: A delicate circular crest intertwining the initials "DG" with fine radiating lines, executed in Burnished Gold.
- **Document Status Badges**: Crisp, compact status indicators (e.g., *Draft Reviewed*, *Affidavit Prepared*, *Filed in High Court*) featuring solid color-coded dots paired with high-contrast slate typography.