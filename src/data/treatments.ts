// Treatments — the product cards (DESIGN_SYSTEM §6.3, analogue of Drips & Shots).
// `actives` reference modality slugs so the card can render ActiveChips.

import type { FamilySlug } from './families';

export interface Treatment {
  slug: string;
  name: string;
  family: FamilySlug;
  essence: string;
  actives: string[];
  /** which concerns this treatment commonly addresses */
  concerns: string[];
}

export const treatments: Treatment[] = [
  {
    slug: 'expression-softening',
    name: 'Expression Softening',
    family: 'injectables',
    essence: 'A light-touch neuromodulator plan to ease frown, forehead, and crow’s-feet lines.',
    actives: ['neuromodulator'],
    concerns: ['fine-lines', 'aging-well'],
  },
  {
    slug: 'subtle-contour',
    name: 'Subtle Contour',
    family: 'injectables',
    essence: 'Conservative filler placement to restore quiet structure — never overfilled.',
    actives: ['ha-filler'],
    concerns: ['volume', 'aging-well'],
  },
  {
    slug: 'renewal-peel',
    name: 'Renewal Peel',
    family: 'skin',
    essence: 'A tailored peel to refine tone and texture with measured downtime.',
    actives: ['chemical-peel', 'medical-actives'],
    concerns: ['texture', 'pigmentation'],
  },
  {
    slug: 'collagen-microneedling',
    name: 'Collagen Microneedling',
    family: 'skin',
    essence: 'A series to remodel texture, fine lines, and softened scarring.',
    actives: ['microneedling'],
    concerns: ['texture', 'acne-scarring'],
  },
  {
    slug: 'clarity-photofacial',
    name: 'Clarity Photofacial',
    family: 'energy',
    essence: 'IPL to quiet sun pigment and diffuse redness across the face.',
    actives: ['ipl'],
    concerns: ['pigmentation', 'redness'],
  },
  {
    slug: 'firm-resurface',
    name: 'Firm & Resurface',
    family: 'energy',
    essence: 'RF microneedling or fractional laser for texture and a degree of lift.',
    actives: ['rf-microneedling', 'laser-resurfacing'],
    concerns: ['texture', 'laxity', 'acne-scarring'],
  },
  {
    slug: 'body-tightening',
    name: 'Body Tightening',
    family: 'body',
    essence: 'Radiofrequency for modest, non-surgical tightening on the body.',
    actives: ['body-rf'],
    concerns: ['laxity'],
  },
  {
    slug: 'skin-health-plan',
    name: 'Skin Health Plan',
    family: 'health',
    essence: 'A prescribed, reviewed routine of medical-grade actives and protection.',
    actives: ['medical-actives'],
    concerns: ['texture', 'pigmentation', 'aging-well', 'fine-lines'],
  },
  {
    slug: 'hair-restoration',
    name: 'Hair Restoration',
    family: 'clinical',
    essence: 'An evidence-led plan, including PRP for selected candidates.',
    actives: ['prp-hair'],
    concerns: ['hair'],
  },
  {
    slug: 'scar-program',
    name: 'Scar Revision Program',
    family: 'clinical',
    essence: 'A medical, multi-modality plan to soften established scars.',
    actives: ['scar-revision', 'laser-resurfacing'],
    concerns: ['acne-scarring'],
  },
];

export const treatmentsByFamily = (family: string): Treatment[] =>
  treatments.filter((t) => t.family === family);

export const treatmentsByConcern = (concern: string): Treatment[] =>
  treatments.filter((t) => t.concerns.includes(concern));
