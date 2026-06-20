# Medical Aesthetics at Restoration Medical

The aesthetics service line of **Restoration Medical**, built on the shared
[Restoration Medical design system](./DESIGN_SYSTEM.md). The rule of the system
is **restraint: black-and-white editorial, with colour as a controlled reward.**

> Tagline: **“Refined by Medicine.”**

This site is the sibling of the *Infusion Therapy* line. Per the design system
(§6), it keeps the shared neutrals, type, spacing, motion, and components and
changes only **three things**: the accent palette, the signature motif, and the
content taxonomy.

## Stack

- **Astro** (static, content-first), no UI framework.
- **Vanilla CSS** with design tokens on `:root` (`src/styles/global.css`).
- **Vanilla motion**: Canvas / SVG / `requestAnimationFrame` / `IntersectionObserver`,
  no animation library. Every effect is fine-pointer gated and disabled under
  `prefers-reduced-motion` (§5).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the build
```

## Structure

```
src/
  styles/global.css     Design tokens + component styles (the system, skinned for aesthetics)
  data/
    site.ts             Brand / line / locations / nav
    families.ts         Service families + accent tokens (§6.1)
    concerns.ts         "By Concern" entries + icons (§6.3)
    treatments.ts       Treatment cards (analogue of Drips & Shots)
    modalities.ts       Modality/Actives library + Established/Emerging evidence tags
    quotes.ts           Editorial pull-quotes
  components/           Nav, Footer, TreatmentCard, ActiveChip, ConcernTile,
                        PageHeader, PullQuote, CtaBand, EvidenceTag, Advisory,
                        ConsultForm, ConcernIcon, HeroMotif (light/skin bloom)
  scripts/motion.ts     Diffusion reveal · droplet cursor · title ripple
  layouts/Base.astro    Shell: nav, footer, grain, skip link, meta
  pages/                index, treatments, concerns, modalities, plan,
                        candidacy, memberships, contact, privacy, terms, accessibility
```

## What changed from the template (§6)

1. **Accent palette**: skin-adjacent, warm-luxe families: injectables (muted
   plum), skin & resurfacing (warm clay), energy & laser (champagne gold), body
   (sage-olive), skin health (muted teal), clinical (shared). Neutrals and gloss
   are untouched so the two lines read as one family.
2. **Signature motif**: the IV-bag fluid becomes a **luminous bloom / refraction**
   (light through the diffusion canvas) in `HeroMotif.astro`. Droplet cursor,
   diffusion reveal, ripple, and grain are reused unchanged.
3. **Content taxonomy**: Treatments / By Concern / Modalities & Actives (keeping
   the Established/Emerging evidence tags) / Plan your treatment / Candidacy &
   safety / Memberships.

## Governance

- **One source of colour:** accents live only in data/token files; never
  hard-coded hex in components.
- **Honesty:** soft “may support” language, no guarantees, no testimonials,
  checked against CPSO advertising rules. Results vary, and we say so.
- **Compliance:** Ontario AODA / PHIPA / CPSO. Legal pages are templates,
  have them reviewed before publishing.
