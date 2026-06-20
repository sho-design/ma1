// Protocols: curated combinations of more than one treatment that work toward a
// single concern or goal over a considered course. These are starting frameworks,
// never a prescription. A consult and physician screening finalise every plan.
// `concern` ties the protocol to a By Concern entry (accent + cross-linking).
// `steps[].treatment` references a slug in data/treatments.ts.

export interface ProtocolStep {
  /** treatment slug (see data/treatments.ts) */
  treatment: string;
  /** the role this treatment plays within the protocol */
  role: string;
}

export interface Protocol {
  slug: string;
  name: string;
  tagline: string;
  /** concern slug used for accent colour and cross-linking */
  concern: string;
  summary: string;
  /** two or more treatments, in the order they are usually sequenced */
  steps: ProtocolStep[];
  maySupport: string[];
  /** how the course tends to unfold over time */
  rhythm: string;
}

export const protocols: Protocol[] = [
  {
    slug: 'clear-skin',
    name: 'Clear Skin Protocol',
    tagline: 'Settle active breakouts, then refine what they leave behind.',
    concern: 'acne-scarring',
    summary:
      'Active acne and the marks it leaves are two different problems. This protocol calms inflammation first with light-based treatment, refines the surface with a medical peel, then holds the result with a prescribed home routine.',
    steps: [
      { treatment: 'clarity-ii', role: 'Calm active breakouts and reduce redness with measured light.' },
      { treatment: 'medical-peel', role: 'Refine texture and clear congestion once skin has settled.' },
      { treatment: 'skin-health-plan', role: 'Maintain clarity with medical-grade actives between visits.' },
    ],
    maySupport: ['Calmer, less reactive skin', 'A more even surface over time', 'Fewer congested pores'],
    rhythm: 'Usually a short series over several weeks, then maintenance facials and a home routine.',
  },
  {
    slug: 'pigment-correction',
    name: 'Pigment Correction Protocol',
    tagline: 'Lift sun and hormonal pigment, then protect the result.',
    concern: 'pigmentation',
    summary:
      'Pigment can be stubborn and can return without protection. This protocol pairs targeted laser with a peel to even tone, and a disciplined skin-health routine to keep new pigment from forming.',
    steps: [
      { treatment: 'picosure', role: 'Target sun spots and uneven pigment with picosecond energy.' },
      { treatment: 'medical-peel', role: 'Even overall tone and brighten between laser sessions.' },
      { treatment: 'skin-health-plan', role: 'Daily protection and brighteners to hold the result.' },
    ],
    maySupport: ['More even tone', 'Softer sun spots', 'A brighter overall complexion'],
    rhythm: 'A course of laser spaced a few weeks apart, supported throughout by daily home care.',
  },
  {
    slug: 'radiance',
    name: 'Radiance Protocol',
    tagline: 'A considered glow for dull, tired skin.',
    concern: 'texture',
    summary:
      'Dull, dehydrated skin scatters light and reads as tired. This protocol cleanses and hydrates deeply, boosts the skin from within, and builds long-term health with the right actives.',
    steps: [
      { treatment: 'hydrafacial', role: 'Deep-cleanse, exfoliate and hydrate for an immediate refresh.' },
      { treatment: 'vamp-glass-facial', role: 'Boost glow and quality with microneedling and actives.' },
      { treatment: 'skin-health-plan', role: 'Extend the result with a prescribed daily routine.' },
    ],
    maySupport: ['Brighter, more hydrated skin', 'Smoother texture', 'A healthier-looking glow'],
    rhythm: 'A refresh now, built on with a short series and ongoing maintenance.',
  },
  {
    slug: 'lift-and-firm',
    name: 'Lift & Firm Protocol',
    tagline: 'Encourage firmer contours, gradually and without surgery.',
    concern: 'laxity',
    summary:
      'Mild laxity responds to treatments that prompt your own collagen over time. This protocol combines radiofrequency microneedling with a biostimulator so support builds gradually. We are honest that results are modest, not a facelift.',
    steps: [
      { treatment: 'xerf', role: 'Tighten and remodel with radiofrequency microneedling.' },
      { treatment: 'biostimulator', role: 'Rebuild deeper structural support that develops over months.' },
    ],
    maySupport: ['Firmer-feeling skin', 'Softer laxity', 'More defined contours over time'],
    rhythm: 'A microneedling series alongside biostimulator, with results developing over months.',
  },
  {
    slug: 'full-face-harmony',
    name: 'Full-Face Harmony Protocol',
    tagline: 'Subtle balance across movement, volume and structure.',
    concern: 'aging-well',
    summary:
      'Aging well is a plan, not a single procedure. This protocol relaxes the lines that move, restores quiet structure where time has taken it, and supports the foundation, the lightest effective amount of each.',
    steps: [
      { treatment: 'neuromodulator', role: 'Soften dynamic expression lines.' },
      { treatment: 'dermal-filler', role: 'Restore conservative volume and contour where needed.' },
      { treatment: 'biostimulator', role: 'Support deeper structure for a gradual, natural result.' },
    ],
    maySupport: ['A rested rather than altered look', 'Restored facial balance', 'Gradual, natural refinement'],
    rhythm: 'Staged across a few visits, then maintained on your own rhythm.',
  },
  {
    slug: 'calm-redness',
    name: 'Calm Redness Protocol',
    tagline: 'Quiet the flush and the vessels you can see.',
    concern: 'redness',
    summary:
      'Diffuse redness and broken capillaries respond well to light, paired with a calming routine so the result holds. This protocol targets visible vessels, then supports the skin barrier day to day.',
    steps: [
      { treatment: 'clarity-ii', role: 'Reduce diffuse redness and target visible vessels with light.' },
      { treatment: 'vascular-lesions', role: 'Clear individual capillaries and small vascular marks.' },
      { treatment: 'skin-health-plan', role: 'Strengthen the barrier and calm reactivity over time.' },
    ],
    maySupport: ['Less visible redness', 'Fewer broken capillaries', 'A calmer, more comfortable skin barrier'],
    rhythm: 'A short series spaced a few weeks apart, supported by daily barrier care.',
  },
];

export const protocolBySlug = (slug: string): Protocol | undefined =>
  protocols.find((p) => p.slug === slug);

export const protocolsByConcern = (concern: string): Protocol[] =>
  protocols.filter((p) => p.concern === concern);

export const protocolsByTreatment = (treatment: string): Protocol[] =>
  protocols.filter((p) => p.steps.some((s) => s.treatment === treatment));
