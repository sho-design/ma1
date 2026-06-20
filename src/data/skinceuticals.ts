// SkinCeuticals home-care pairings for the Plan page. The clinic carries
// SkinCeuticals; these are everyday products we often pair with in-clinic
// treatments to support and extend the result. Matched to concern slugs (see
// data/concerns.ts). A consult confirms what is right for your skin; this is
// guidance, not a prescription.

export interface SkinProduct {
  slug: string;
  name: string;
  /** product category, shown as a small tag */
  category: string;
  /** what it does, in plain language */
  role: string;
  /** concern slugs this product commonly supports */
  concerns: string[];
  /** foundation products shown with every skin plan */
  baseline?: boolean;
}

export const skinceuticals: SkinProduct[] = [
  {
    slug: 'ce-ferulic',
    name: 'C E Ferulic',
    category: 'Antioxidant',
    role: 'A daytime vitamin C serum that helps brighten and defend against environmental stress.',
    concerns: ['pigmentation', 'aging-well', 'fine-lines', 'texture'],
  },
  {
    slug: 'phloretin-cf',
    name: 'Phloretin CF',
    category: 'Antioxidant',
    role: 'A vitamin C antioxidant aimed at uneven tone and oilier or combination skin.',
    concerns: ['pigmentation', 'texture'],
  },
  {
    slug: 'silymarin-cf',
    name: 'Silymarin CF',
    category: 'Antioxidant',
    role: 'An oil-free antioxidant for blemish-prone skin, helping with shine and texture.',
    concerns: ['acne-scarring', 'texture'],
  },
  {
    slug: 'phyto-corrective',
    name: 'Phyto Corrective Gel',
    category: 'Corrective',
    role: 'A soothing serum to calm the look of redness and reactive skin.',
    concerns: ['redness'],
  },
  {
    slug: 'discoloration-defense',
    name: 'Discoloration Defense',
    category: 'Corrective',
    role: 'Targets stubborn dark spots and post-blemish marks over time.',
    concerns: ['pigmentation', 'acne-scarring'],
  },
  {
    slug: 'blemish-age-defense',
    name: 'Blemish + Age Defense',
    category: 'Corrective',
    role: 'A blend of acids for breakouts and early signs of aging together.',
    concerns: ['acne-scarring', 'aging-well', 'texture'],
  },
  {
    slug: 'retinol',
    name: 'Retinol 0.3 / 0.5 / 1.0',
    category: 'Corrective',
    role: 'A nightly retinol to refine texture and soften fine lines, introduced gradually.',
    concerns: ['fine-lines', 'texture', 'aging-well'],
  },
  {
    slug: 'ha-intensifier',
    name: 'H.A. Intensifier',
    category: 'Corrective',
    role: 'A hyaluronic acid serum to support plumper, more hydrated-looking skin.',
    concerns: ['fine-lines', 'texture'],
  },
  {
    slug: 'triple-lipid',
    name: 'Triple Lipid Restore 2:1',
    category: 'Moisturizer',
    role: 'A rich cream that supports the skin barrier and a firmer, smoother feel.',
    concerns: ['laxity', 'aging-well', 'fine-lines'],
  },
  {
    slug: 'age-interrupter',
    name: 'A.G.E. Interrupter Advanced',
    category: 'Moisturizer',
    role: 'A treatment cream for crepey skin, laxity and deeper lines.',
    concerns: ['laxity', 'aging-well'],
  },
  {
    slug: 'clarifying-clay',
    name: 'Clarifying Clay Masque',
    category: 'Mask',
    role: 'A weekly clay masque to decongest pores and refine the surface.',
    concerns: ['acne-scarring', 'texture'],
  },
  {
    slug: 'uv-defense',
    name: 'Physical Fusion UV Defense SPF 50',
    category: 'Sunscreen',
    role: 'A daily mineral sunscreen, the foundation of every plan and essential after any treatment.',
    concerns: ['pigmentation', 'redness', 'aging-well'],
    baseline: true,
  },
];

export const productsByConcern = (slug: string): SkinProduct[] =>
  skinceuticals.filter((p) => p.concerns.includes(slug));
