// Treatments: the real Restoration Medical menu (patient-facing, June 2026).
// `actives` reference modality slugs. Prices are list prices; variants carry
// per-option pricing (injector, area, or tier).

import type { FamilySlug } from './families';

export interface Variant {
  label: string;
  price: string;
  time?: string;
  note?: string;
}

export interface Treatment {
  slug: string;
  name: string;
  family: FamilySlug;
  /** brand / device line, shown as an eyebrow on the card */
  brand?: string;
  essence: string;
  /** headline price, e.g. "$450" or "from $390" */
  price: string;
  time?: string;
  /** per-option pricing rows for the menu */
  variants?: Variant[];
  /** cadence / series guidance */
  series?: string;
  actives: string[];
  /** which concerns this treatment commonly addresses */
  concerns: string[];
}

export const treatments: Treatment[] = [
  // ---- Injectables --------------------------------------------------------
  {
    slug: 'neuromodulator',
    name: 'Neuromodulator',
    family: 'injectables',
    brand: 'Botox® / Dysport®',
    essence: 'Soften dynamic lines and refine facial balance. Priced per unit by injector.',
    price: 'from $9 / unit',
    series: 'Re-treat every 3 to 4 months.',
    variants: [
      { label: 'Registered Nurse', price: '$11 / unit', note: 'Standard treatment' },
      { label: 'Registered Nurse, 50 to 100u', price: '$9 / unit', note: 'Volume pricing (masseter, hyperhidrosis)' },
      { label: 'Dr. Johnny Nguyen', price: '$12 / unit', note: 'Physician-administered' },
    ],
    actives: ['neuromodulator'],
    concerns: ['fine-lines', 'aging-well'],
  },
  {
    slug: 'dermal-filler',
    name: 'Dermal Filler',
    family: 'injectables',
    brand: 'Stylage® (Vivacy)',
    essence: 'A modified HA with mannitol antioxidant and built-in lidocaine, for volume, contour and structure.',
    price: 'from $390',
    variants: [
      { label: 'Filler, ½ cc (RN)', price: '$390' },
      { label: 'Filler, 1 cc (RN)', price: '$650' },
      { label: 'Filler, ½ cc (Michelle, Senior RN)', price: '$420' },
      { label: 'Filler, 1 cc (Michelle, Senior RN)', price: '$700' },
      { label: 'Filler, 1 cc (Dr. Johnny Nguyen)', price: '$800' },
    ],
    actives: ['ha-filler'],
    concerns: ['volume', 'aging-well'],
  },
  {
    slug: 'biostimulator',
    name: 'Biostimulator',
    family: 'injectables',
    brand: 'Radiesse®',
    essence: 'A collagen-stimulating biostimulator for gradual, natural structural support.',
    price: 'from $950',
    time: 'by consult',
    actives: ['biostimulator'],
    concerns: ['volume', 'laxity', 'aging-well'],
  },

  // ---- Regenerative & Boosters -------------------------------------------
  {
    slug: 'vamp-glass-facial',
    name: 'VAMP™ Glass Facial',
    family: 'body',
    brand: 'Salmon PDRN',
    essence: 'Salmon-DNA PDRN bio-revitalizing complex micro-infused for glow, pores and elasticity. Known as “The Glass Facial.”',
    price: '$450',
    time: '60 min',
    series: 'Best in a series of 3.',
    actives: ['pdrn'],
    concerns: ['texture', 'aging-well'],
  },
  {
    slug: 'exosome-facial',
    name: 'Pluryal® Exosome Facial',
    family: 'body',
    essence: 'An exosome and peptide complex micro-infused for regeneration and radiance.',
    price: '$450',
    time: '60 min',
    series: 'Best in a series of 3.',
    actives: ['exosomes'],
    concerns: ['texture', 'aging-well'],
  },
  {
    slug: 'prp',
    name: 'PRP',
    family: 'body',
    essence: 'Platelet-rich plasma for facial rejuvenation or scalp and hair restoration.',
    price: '$450',
    time: '75 min',
    series: 'Best in a series of 3.',
    actives: ['prp'],
    concerns: ['hair', 'texture', 'aging-well'],
  },
  {
    slug: 'prf',
    name: 'PRF',
    family: 'body',
    essence: 'Platelet-rich fibrin with slower-release growth factors, for under-eye and face.',
    price: '$650',
    actives: ['prf'],
    concerns: ['texture', 'aging-well'],
  },

  // ---- Energy & Laser -----------------------------------------------------
  {
    slug: 'xerf',
    name: 'XERF RF Microneedling',
    family: 'energy',
    essence: 'Radiofrequency microneedling for tightening, texture, pores and scarring. Pairs beautifully with VAMP or PRF.',
    price: 'from $1,800',
    series: 'Series of 3 recommended.',
    variants: [
      { label: 'Face', price: '$1,800' },
      { label: 'Face + Neck', price: '$2,200', time: '90 min' },
      { label: 'Body (scars, laxity, stretch marks)', price: '$1,800', time: '90 min' },
    ],
    actives: ['rf-microneedling'],
    concerns: ['texture', 'laxity', 'acne-scarring'],
  },
  {
    slug: 'eco2',
    name: 'eCO₂ Fractional Laser',
    family: 'energy',
    essence: 'Ablative fractional CO₂ resurfacing for acne scars, deep texture, wrinkles and laxity.',
    price: 'from $600',
    variants: [
      { label: 'Baby (light, low-downtime)', price: '$600', time: '60 min' },
      { label: 'Face', price: '$1,000', time: '105 min' },
      { label: 'Face + Neck', price: '$1,600', time: '105 min' },
    ],
    actives: ['co2'],
    concerns: ['acne-scarring', 'texture', 'fine-lines', 'laxity'],
  },
  {
    slug: 'picosure',
    name: 'PicoSure® Picosecond Laser',
    family: 'energy',
    essence: 'A 755nm picosecond laser for pigment, tone, texture, scars and tattoo removal, comparatively gentle across skin tones.',
    price: 'from $250',
    variants: [
      { label: 'Baby (revitalization / maintenance)', price: '$500', time: '60 min' },
      { label: 'Pigmentation', price: '$600', time: '60 min' },
      { label: 'Texture / Scars, Face', price: '$1,000' },
      { label: 'Texture / Scars, Face + Neck', price: '$1,600', time: '75 min' },
      { label: 'Spot treatment', price: 'from $500', time: '60 min' },
      { label: 'Tattoo removal', price: 'from $250', time: '60 min' },
    ],
    actives: ['picosure'],
    concerns: ['pigmentation', 'texture', 'acne-scarring'],
  },
  {
    slug: 'clarity-ii',
    name: 'Clarity II™ Laser',
    family: 'energy',
    essence: 'An Alexandrite + Nd:YAG dual-wavelength platform for rejuvenation, acne, pigment and vascular concerns, safe for all skin types.',
    price: 'from $250',
    variants: [
      { label: 'Acne', price: '$350', time: '45 min' },
      { label: 'Face rejuvenation', price: '$500', time: '60 min' },
      { label: 'Facial spot (pigment or vascular)', price: 'from $250', time: '45 min' },
    ],
    actives: ['clarity'],
    concerns: ['acne-scarring', 'redness', 'pigmentation'],
  },

  // ---- Plasma & Lesions ---------------------------------------------------
  {
    slug: 'plexr-blepharoplasty',
    name: 'PlexR® Plus Plasma',
    family: 'clinical',
    essence: 'Health Canada–licensed plasma for non-surgical eyelid lifting and lesion removal: no incisions, no general anesthesia.',
    price: 'from $1,000',
    series: 'Results build over 2 sessions and last several years.',
    variants: [
      { label: 'Blepharoplasty, upper', price: '$1,000', time: '75 min' },
      { label: 'Blepharoplasty, lower / under-eye', price: '$1,000', time: '75 min' },
      { label: 'Upper + Lower', price: '$1,800', time: '75 min' },
      { label: 'Mole removal (per lesion)', price: 'from $350', time: '45 min' },
    ],
    actives: ['plasma'],
    concerns: ['laxity', 'aging-well'],
  },
  {
    slug: 'vascular-lesions',
    name: 'Vascular & Lesion Removal',
    family: 'clinical',
    essence: 'Spider veins, facial vascular lesions, skin tags and seborrheic keratoses, via Clarity II or PlexR.',
    price: 'from $250',
    variants: [
      { label: 'Spider vein / vascular lesions', price: 'from $400', time: '60 min' },
      { label: 'Skin tag / SK removal', price: 'from $250', time: '45 min' },
    ],
    actives: ['clarity', 'plasma'],
    concerns: ['redness'],
  },

  // ---- Facials & Peels ----------------------------------------------------
  {
    slug: 'hydrafacial',
    name: 'HydraFacial®',
    family: 'skin',
    essence: 'Cleanse, exfoliate, extract and hydrate in a medical setting, with prescriptive SkinCeuticals® home protocols.',
    price: 'from $225',
    variants: [
      { label: 'Signature', price: '$225', time: '75 min' },
      { label: 'Deluxe (+ targeted booster)', price: '$275' },
    ],
    actives: ['hydrafacial'],
    concerns: ['texture', 'pigmentation'],
  },
  {
    slug: 'medical-peel',
    name: 'SkinCeuticals® Medical Peel',
    family: 'skin',
    essence: 'A customized medical-grade peel, paired with a prescriptive home protocol to extend results.',
    price: '$180',
    time: '60 min',
    actives: ['peel'],
    concerns: ['texture', 'pigmentation', 'fine-lines'],
  },
  {
    slug: 'add-ons',
    name: 'Add-ons',
    family: 'skin',
    essence: 'Boosters that pair with any treatment.',
    price: 'from $50',
    variants: [
      { label: 'Red Light Therapy (Healite II)', price: '$50', time: '20 min' },
      { label: 'Lymphatic Drainage', price: '$55', time: '30 min' },
      { label: 'Prep Skin Facial', price: '$90', time: '35 min' },
    ],
    actives: ['red-light'],
    concerns: ['texture', 'redness'],
  },

  // ---- Skin Health --------------------------------------------------------
  {
    slug: 'skin-health-plan',
    name: 'Skin Health Plan',
    family: 'health',
    brand: 'SkinCeuticals®',
    essence: 'A prescriptive home regimen included with every treatment plan. Full retail range available in-clinic.',
    price: 'By consult',
    actives: ['medical-actives'],
    concerns: ['aging-well', 'pigmentation', 'fine-lines', 'texture'],
  },
];

export const treatmentsByFamily = (family: string): Treatment[] =>
  treatments.filter((t) => t.family === family);

export const treatmentsByConcern = (concern: string): Treatment[] =>
  treatments.filter((t) => t.concerns.includes(concern));
