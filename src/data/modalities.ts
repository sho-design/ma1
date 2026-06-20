// Modalities / Actives library (DESIGN_SYSTEM §6.3), the analogue of the
// infusion line's ingredient library. KEEP the Established/Emerging evidence
// tags: rare and very on-brand for aesthetics.

export type Evidence = 'established' | 'emerging';

export interface Modality {
  slug: string;
  name: string;
  family: string;
  /** what it is, in one honest line */
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
    maySupport: 'May soften the look of dynamic expression lines.',
    evidence: 'established',
    downtime: 'Minimal: small marks possible; results settle over 1–2 weeks.',
  },
  {
    slug: 'ha-filler',
    name: 'Hyaluronic acid filler',
    family: 'injectables',
    essence: 'A gel of a sugar your skin already makes, placed for subtle support.',
    maySupport: 'May restore subtle volume and definition; reversible if needed.',
    evidence: 'established',
    downtime: 'Swelling or bruising for a few days.',
  },
  {
    slug: 'microneedling',
    name: 'Microneedling',
    family: 'skin',
    essence: 'Controlled micro-channels that prompt the skin to remodel.',
    maySupport: 'May improve texture, fine lines, and some scarring over a series.',
    evidence: 'established',
    downtime: 'Redness for 1–3 days.',
  },
  {
    slug: 'chemical-peel',
    name: 'Chemical peel',
    family: 'skin',
    essence: 'A measured acid exfoliation, tailored in strength to your skin.',
    maySupport: 'May refine tone and texture and brighten dull skin.',
    evidence: 'established',
    downtime: 'Flaking for several days, depth-dependent.',
  },
  {
    slug: 'ipl',
    name: 'IPL photofacial',
    family: 'energy',
    essence: 'Broadband light absorbed by pigment and vessels.',
    maySupport: 'May reduce the look of sun spots and diffuse redness.',
    evidence: 'established',
    downtime: 'Spots darken then flake; mild redness.',
  },
  {
    slug: 'rf-microneedling',
    name: 'RF microneedling',
    family: 'energy',
    essence: 'Microneedling paired with radiofrequency energy at depth.',
    maySupport: 'May support firmer texture and a degree of tightening.',
    evidence: 'emerging',
    downtime: 'Redness and swelling for 1–3 days.',
  },
  {
    slug: 'laser-resurfacing',
    name: 'Laser resurfacing',
    family: 'energy',
    essence: 'Fractional laser that resurfaces in controlled columns.',
    maySupport: 'May improve texture, tone, and the look of scars.',
    evidence: 'established',
    downtime: 'Several days, intensity-dependent.',
  },
  {
    slug: 'body-rf',
    name: 'Body radiofrequency',
    family: 'body',
    essence: 'Bulk heating to encourage collagen in larger areas.',
    maySupport: 'May offer modest skin tightening on the body.',
    evidence: 'emerging',
    downtime: 'None to minimal.',
  },
  {
    slug: 'medical-actives',
    name: 'Medical-grade actives',
    family: 'health',
    essence: 'Prescribed retinoids, antioxidants, and sun protection.',
    maySupport: 'May support long-term skin health when used consistently.',
    evidence: 'established',
    downtime: 'None; some adjustment as skin acclimates.',
  },
  {
    slug: 'prp-hair',
    name: 'PRP for hair',
    family: 'clinical',
    essence: 'Platelet-rich plasma from your own blood, placed in the scalp.',
    maySupport: 'May support hair density in selected candidates.',
    evidence: 'emerging',
    downtime: 'Mild tenderness on the day.',
  },
  {
    slug: 'scar-revision',
    name: 'Scar revision',
    family: 'clinical',
    essence: 'A medical plan combining energy, injectables, or minor procedures.',
    maySupport: 'May soften the appearance of established scars.',
    evidence: 'established',
    downtime: 'Varies with approach.',
  },
];

export const modalitiesByFamily = (family: string): Modality[] =>
  modalities.filter((m) => m.family === family);
