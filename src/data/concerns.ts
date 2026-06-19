// "By Concern" — empathetic entry points (DESIGN_SYSTEM §6.3).
// `icon` maps to a slug in ConcernIcon.astro.

export interface Concern {
  slug: string;
  label: string;
  line: string;
  icon: string;
  /** families most relevant to this concern */
  families: string[];
}

export const concerns: Concern[] = [
  {
    slug: 'fine-lines',
    label: 'Fine lines & wrinkles',
    line: 'Soften expression lines while keeping your face yours.',
    icon: 'lines',
    families: ['injectables', 'skin', 'health'],
  },
  {
    slug: 'volume',
    label: 'Volume & contour',
    line: 'Restore subtle structure where time has quietly taken it.',
    icon: 'contour',
    families: ['injectables', 'body'],
  },
  {
    slug: 'texture',
    label: 'Texture & tone',
    line: 'Smoother surface, more even light across the skin.',
    icon: 'texture',
    families: ['skin', 'energy', 'health'],
  },
  {
    slug: 'acne-scarring',
    label: 'Acne & scarring',
    line: 'Calm active skin and soften the marks it leaves behind.',
    icon: 'acne',
    families: ['skin', 'energy', 'clinical'],
  },
  {
    slug: 'pigmentation',
    label: 'Pigmentation',
    line: 'Address sun and hormonal pigment with measured energy.',
    icon: 'pigment',
    families: ['energy', 'skin', 'health'],
  },
  {
    slug: 'redness',
    label: 'Redness',
    line: 'Quiet diffuse redness and visible vessels.',
    icon: 'redness',
    families: ['energy', 'health'],
  },
  {
    slug: 'laxity',
    label: 'Laxity & lifting',
    line: 'Encourage firmer, more defined contours without surgery.',
    icon: 'lift',
    families: ['energy', 'body'],
  },
  {
    slug: 'hair',
    label: 'Hair restoration',
    line: 'Support thicker, healthier hair with evidence-led options.',
    icon: 'hair',
    families: ['clinical', 'health'],
  },
  {
    slug: 'aging-well',
    label: 'Aging well',
    line: 'A considered, long-view plan — subtle by design.',
    icon: 'aging',
    families: ['injectables', 'skin', 'health', 'energy'],
  },
];
