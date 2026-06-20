// Service families for the Medical Aesthetics line (DESIGN_SYSTEM §6.1).
// Mapped to the real Restoration Medical menu. Slugs and accent tokens are kept
// stable; only the names/essences reflect the actual categories.

export type FamilySlug =
  | 'injectables'
  | 'body'
  | 'energy'
  | 'clinical'
  | 'skin'
  | 'health';

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
    essence: 'Neuromodulators, dermal fillers, and biostimulators, by injector.',
    accentVar: 'injectables',
    reads: 'refined, considered',
  },
  {
    slug: 'body',
    name: 'Regenerative & Boosters',
    essence: 'PDRN, exosomes, PRP and PRF, micro-infused or injected for radiance.',
    accentVar: 'body',
    reads: 'renewal',
  },
  {
    slug: 'energy',
    name: 'Energy & Laser',
    essence: 'RF microneedling and laser: XERF, eCO₂, PicoSure and Clarity II.',
    accentVar: 'energy',
    reads: 'light / energy',
  },
  {
    slug: 'clinical',
    name: 'Plasma & Lesions',
    essence: 'PlexR® Plus plasma soft surgery and vascular or lesion removal.',
    accentVar: 'clinical',
    reads: 'medical',
  },
  {
    slug: 'skin',
    name: 'Facials & Peels',
    essence: 'HydraFacial®, medical peels, and prep facials in a clinical setting.',
    accentVar: 'skin',
    reads: 'glow',
  },
  {
    slug: 'health',
    name: 'Skin Health',
    essence: 'SkinCeuticals® medical-grade actives, prescribed and reviewed.',
    accentVar: 'health',
    reads: 'clarity',
  },
];

export const familyBySlug = (slug: string): Family | undefined =>
  families.find((f) => f.slug === slug);
