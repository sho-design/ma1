// SkinCeuticals home-care pairings. The clinic carries SkinCeuticals; these are
// everyday products that complement specific in-clinic treatments, shown on the
// relevant treatment page to support and extend the result. `treatments` lists
// the treatment slugs each product complements (see data/treatments.ts).
// A consult confirms what is right for your skin; this is guidance, not a
// prescription.

export interface SkinProduct {
  slug: string;
  name: string;
  /** product category, shown as a small tag */
  category: string;
  /** what it does, in plain language */
  role: string;
  /** treatment slugs this product complements */
  treatments: string[];
}

export const skinceuticals: SkinProduct[] = [
  {
    slug: 'ce-ferulic',
    name: 'C E Ferulic',
    category: 'Antioxidant',
    role: 'A daytime vitamin C serum to brighten and defend, once skin has settled.',
    treatments: ['picosure', 'hydrafacial', 'vamp-glass-facial', 'eco2', 'medical-peel', 'skin-health-plan'],
  },
  {
    slug: 'phloretin-cf',
    name: 'Phloretin CF',
    category: 'Antioxidant',
    role: 'A vitamin C antioxidant for uneven tone and oilier or combination skin.',
    treatments: ['picosure', 'medical-peel'],
  },
  {
    slug: 'silymarin-cf',
    name: 'Silymarin CF',
    category: 'Antioxidant',
    role: 'An oil-free antioxidant for blemish-prone skin, helping with shine and texture.',
    treatments: ['clarity-ii', 'hydrafacial', 'medical-peel'],
  },
  {
    slug: 'phyto-corrective',
    name: 'Phyto Corrective Gel',
    category: 'Soothing',
    role: 'A calming serum to settle the look of redness after light-based work.',
    treatments: ['clarity-ii', 'vascular-lesions', 'plexr-blepharoplasty'],
  },
  {
    slug: 'discoloration-defense',
    name: 'Discoloration Defense',
    category: 'Corrective',
    role: 'Targets stubborn dark spots and post-blemish marks over time.',
    treatments: ['picosure', 'medical-peel'],
  },
  {
    slug: 'blemish-age-defense',
    name: 'Blemish + Age Defense',
    category: 'Corrective',
    role: 'A blend of acids for breakouts and early signs of aging together.',
    treatments: ['hydrafacial', 'medical-peel'],
  },
  {
    slug: 'retinol',
    name: 'Retinol 0.5',
    category: 'Corrective',
    role: 'A nightly retinol to refine texture and soften fine lines, between visits.',
    treatments: ['skin-health-plan', 'medical-peel'],
  },
  {
    slug: 'ha-intensifier',
    name: 'H.A. Intensifier',
    category: 'Hydrating',
    role: 'A hyaluronic acid serum for plumper, more hydrated-looking skin.',
    treatments: ['vamp-glass-facial', 'exosome-facial', 'prp', 'prf', 'xerf', 'dermal-filler'],
  },
  {
    slug: 'triple-lipid',
    name: 'Triple Lipid Restore 2:1',
    category: 'Barrier cream',
    role: 'A rich cream to support the skin barrier and a firmer, smoother feel while you heal.',
    treatments: ['xerf', 'eco2', 'plexr-blepharoplasty', 'biostimulator'],
  },
  {
    slug: 'age-interrupter',
    name: 'A.G.E. Interrupter Advanced',
    category: 'Moisturizer',
    role: 'A treatment cream for crepey skin, laxity and deeper lines.',
    treatments: ['xerf', 'biostimulator'],
  },
  {
    slug: 'clarifying-clay',
    name: 'Clarifying Clay Masque',
    category: 'Mask',
    role: 'A weekly clay masque to decongest pores and refine the surface.',
    treatments: ['hydrafacial'],
  },
  {
    slug: 'uv-defense',
    name: 'Physical Fusion UV Defense SPF 50',
    category: 'Sunscreen',
    role: 'A daily mineral sunscreen, essential after any treatment to protect your result.',
    treatments: ['picosure', 'clarity-ii', 'eco2', 'xerf', 'medical-peel', 'hydrafacial', 'vamp-glass-facial', 'exosome-facial', 'plexr-blepharoplasty', 'vascular-lesions', 'skin-health-plan'],
  },
];

// Products that complement a treatment, with the everyday sunscreen kept last.
export const productsByTreatment = (slug: string): SkinProduct[] => {
  const matches = skinceuticals.filter((p) => p.treatments.includes(slug));
  return matches.sort((a, b) => Number(a.slug === 'uv-defense') - Number(b.slug === 'uv-defense'));
};
