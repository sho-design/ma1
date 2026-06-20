// Modalities / Actives library (DESIGN_SYSTEM §6.3). Built from the real
// Restoration Medical menu. KEEP the Established/Emerging evidence tags.

export type Evidence = 'established' | 'emerging';

export interface Modality {
  slug: string;
  name: string;
  family: string;
  essence: string;
  /** soft "may support" benefit language (DESIGN_SYSTEM §6.4, §7) */
  maySupport: string;
  evidence: Evidence;
  downtime: string;
}

export const evidenceCopy: Record<Evidence, string> = {
  established:
    'Established: supported by consistent, higher-quality clinical evidence and long clinical use.',
  emerging:
    'Emerging: early or mixed evidence. Promising, but we set expectations honestly and results vary.',
};

export const modalities: Modality[] = [
  {
    slug: 'neuromodulator',
    name: 'Neuromodulator',
    family: 'injectables',
    essence: 'A purified protein that temporarily relaxes targeted muscles.',
    maySupport: 'May soften the look of dynamic expression lines and refine balance.',
    evidence: 'established',
    downtime: 'Minimal; small marks possible. Re-treat every 3 to 4 months.',
  },
  {
    slug: 'ha-filler',
    name: 'HA filler (Stylage®)',
    family: 'injectables',
    essence: 'A modified hyaluronic acid with mannitol and built-in lidocaine for comfort.',
    maySupport: 'May restore volume, contour and structure; reversible if needed.',
    evidence: 'established',
    downtime: 'Swelling or bruising for a few days.',
  },
  {
    slug: 'biostimulator',
    name: 'Biostimulator (Radiesse®)',
    family: 'injectables',
    essence: 'Calcium hydroxylapatite that prompts your own collagen over time.',
    maySupport: 'May rebuild gradual structural support and firmness.',
    evidence: 'established',
    downtime: 'Swelling or bruising for a few days; results build over weeks.',
  },
  {
    slug: 'pdrn',
    name: 'PDRN (salmon DNA)',
    family: 'body',
    essence: 'Polynucleotides micro-infused as a bio-revitalizing complex (VAMP™).',
    maySupport: 'May support glow, pore appearance and elasticity over a series.',
    evidence: 'emerging',
    downtime: 'Mild redness for a day.',
  },
  {
    slug: 'exosomes',
    name: 'Exosomes (Pluryal®)',
    family: 'body',
    essence: 'An exosome and peptide complex micro-infused into the skin.',
    maySupport: 'May support regeneration and radiance over a series.',
    evidence: 'emerging',
    downtime: 'Mild redness for a day.',
  },
  {
    slug: 'prp',
    name: 'PRP',
    family: 'body',
    essence: 'Platelet-rich plasma from your own blood, for face or scalp.',
    maySupport: 'May support facial rejuvenation and hair density in selected candidates.',
    evidence: 'emerging',
    downtime: 'Mild tenderness on the day.',
  },
  {
    slug: 'prf',
    name: 'PRF',
    family: 'body',
    essence: 'Platelet-rich fibrin with slower-release growth factors.',
    maySupport: 'May support under-eye and facial rejuvenation.',
    evidence: 'emerging',
    downtime: 'Mild swelling or bruising for a few days.',
  },
  {
    slug: 'rf-microneedling',
    name: 'RF microneedling (XERF)',
    family: 'energy',
    essence: 'Microneedling paired with radiofrequency energy at depth.',
    maySupport: 'May improve texture, pores and scarring, with a degree of tightening.',
    evidence: 'established',
    downtime: 'Redness and swelling for 1 to 3 days.',
  },
  {
    slug: 'co2',
    name: 'Fractional CO₂ (eCO₂)',
    family: 'energy',
    essence: 'Ablative fractional laser that resurfaces in controlled columns.',
    maySupport: 'May improve acne scars, texture, wrinkles and laxity.',
    evidence: 'established',
    downtime: 'Several days; the Baby option is lower-downtime.',
  },
  {
    slug: 'picosure',
    name: 'PicoSure® picosecond',
    family: 'energy',
    essence: 'A 755nm picosecond laser, gentle and safe across skin tones.',
    maySupport: 'May reduce pigment and the look of texture, scars and tattoos.',
    evidence: 'established',
    downtime: 'Mild redness; pigment may darken then flake.',
  },
  {
    slug: 'clarity',
    name: 'Clarity II™ (Alex + Nd:YAG)',
    family: 'energy',
    essence: 'A dual-wavelength platform, safe for all skin types.',
    maySupport: 'May address rejuvenation, acne, pigment and vascular concerns.',
    evidence: 'established',
    downtime: 'Mild redness on the day.',
  },
  {
    slug: 'plasma',
    name: 'Plasma (PlexR® Plus)',
    family: 'clinical',
    essence: 'Health Canada–licensed plasma for non-surgical lifting and lesions.',
    maySupport: 'May lift eyelid skin and remove lesions without incisions.',
    evidence: 'emerging',
    downtime: 'Tiny crusts for several days; results build over 2 sessions.',
  },
  {
    slug: 'hydrafacial',
    name: 'HydraFacial®',
    family: 'skin',
    essence: 'Cleanse, exfoliate, extract and hydrate in a medical setting.',
    maySupport: 'May leave skin clearer, smoother and more hydrated.',
    evidence: 'established',
    downtime: 'None.',
  },
  {
    slug: 'peel',
    name: 'Medical peel (SkinCeuticals®)',
    family: 'skin',
    essence: 'A customized medical-grade acid exfoliation.',
    maySupport: 'May refine tone and texture and brighten dull skin.',
    evidence: 'established',
    downtime: 'Flaking for several days, depth-dependent.',
  },
  {
    slug: 'red-light',
    name: 'Red light therapy (Healite II)',
    family: 'skin',
    essence: 'LED light used to calm and support recovery.',
    maySupport: 'May calm skin and support healing as an add-on.',
    evidence: 'emerging',
    downtime: 'None.',
  },
  {
    slug: 'medical-actives',
    name: 'Medical-grade actives (SkinCeuticals®)',
    family: 'health',
    essence: 'Prescribed antioxidants, correctives, and sun protection.',
    maySupport: 'May support long-term skin health when used consistently.',
    evidence: 'established',
    downtime: 'None; some adjustment as skin acclimates.',
  },
];

export const modalitiesByFamily = (family: string): Modality[] =>
  modalities.filter((m) => m.family === family);
