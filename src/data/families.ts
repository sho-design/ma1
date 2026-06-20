// Service families for the Medical Aesthetics line (DESIGN_SYSTEM §6.1, §6.3).
// Accents are referenced by token name, one source of colour, never hard-coded
// hex in components (DESIGN_SYSTEM §7).

export type FamilySlug =
  | 'injectables'
  | 'skin'
  | 'energy'
  | 'body'
  | 'health'
  | 'clinical';

export interface Family {
  slug: FamilySlug;
  name: string;
  /** one-line essence shown under the family name */
  essence: string;
  /** CSS custom-property base; component derives --accent / --accent-text */
  accentVar: string;
  reads: string;
}

export const families: Family[] = [
  {
    slug: 'injectables',
    name: 'Injectables',
    essence: 'Neuromodulators and dermal fillers: softening, balancing, restoring.',
    accentVar: 'injectables',
    reads: 'refined, considered',
  },
  {
    slug: 'skin',
    name: 'Skin & Resurfacing',
    essence: 'Peels, microneedling, and resurfacing for texture and renewal.',
    accentVar: 'skin',
    reads: 'renewal',
  },
  {
    slug: 'energy',
    name: 'Energy & Laser',
    essence: 'IPL, radiofrequency, and laser: light and energy, precisely placed.',
    accentVar: 'energy',
    reads: 'light / energy',
  },
  {
    slug: 'body',
    name: 'Body & Contour',
    essence: 'Non-surgical contouring and skin tightening for the body.',
    accentVar: 'body',
    reads: 'natural',
  },
  {
    slug: 'health',
    name: 'Skin Health',
    essence: 'Medical-grade actives and routines, prescribed and reviewed.',
    accentVar: 'health',
    reads: 'clarity',
  },
  {
    slug: 'clinical',
    name: 'Clinical / Consult',
    essence: 'Medical dermatology and scar revision: the clinic, not the counter.',
    accentVar: 'clinical',
    reads: 'medical',
  },
];

export const familyBySlug = (slug: string): Family | undefined =>
  families.find((f) => f.slug === slug);
