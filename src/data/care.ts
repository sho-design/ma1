// Pre-care, post-care, and FAQ content for treatment pages, keyed by service
// family so guidance fits the modality. Clinics should review before publishing.

import type { FamilySlug } from './families';

export interface Faq { q: string; a: string; }
export interface Care { pre: string[]; post: string[]; faqs: Faq[]; }

export const careByFamily: Record<FamilySlug, Care> = {
  injectables: {
    pre: [
      'Where your physician agrees it is safe, avoid blood thinners (aspirin, ibuprofen, fish oil, vitamin E) and alcohol for 24 to 48 hours.',
      'Tell us about your medications, allergies, and any history of cold sores.',
      'Reschedule if you have an active breakout or infection in the area.',
      'If bruising would be inconvenient, leave about two weeks before a big event.',
    ],
    post: [
      'Stay upright and avoid rubbing or massaging the area for the rest of the day.',
      'Avoid strenuous exercise, heat, saunas and facials for 24 to 48 hours.',
      'Mild swelling, redness or bruising is normal and settles within days.',
      'Neuromodulator results appear over 1 to 2 weeks; filler is visible right away and settles over two weeks.',
    ],
    faqs: [
      { q: 'Does it hurt?', a: 'Most people tolerate it well. Filler includes a built-in anaesthetic for comfort, and numbing cream is available.' },
      { q: 'How long does it last?', a: 'It varies by person and product. Your injector gives you a realistic range at consult. Results vary.' },
      { q: 'When will I see results?', a: 'Neuromodulator develops over 1 to 2 weeks; filler and biostimulators are immediate to gradual. We review at a follow-up.' },
      { q: 'Is filler reversible?', a: 'Hyaluronic acid filler can be dissolved if needed. Your physician will discuss this with you.' },
    ],
  },
  body: {
    pre: [
      'Hydrate well beforehand, and avoid alcohol and blood thinners for 24 hours where safe.',
      'Pause retinoids and strong exfoliating actives for a few days before.',
      'Let us know about any medications or skin conditions.',
    ],
    post: [
      'Keep the skin clean and gentle for 24 hours; avoid makeup, heat and intense exercise.',
      'Mild redness or pinpoint marks are normal and fade within a day.',
      'These work best in a considered series; we map the cadence with you.',
    ],
    faqs: [
      { q: 'How many sessions will I need?', a: 'Most see the best result over a series of three, spaced a few weeks apart. We confirm at consult.' },
      { q: 'Is there downtime?', a: 'Usually minimal, some redness for a day, and you can typically return to normal activity.' },
      { q: 'What is it made of?', a: 'We explain the exact complex (for example polynucleotides, exosomes, or your own platelets) at your consult.' },
    ],
  },
  energy: {
    pre: [
      'Avoid sun exposure and tanning, including self-tan, for 2 to 4 weeks before.',
      'Stop retinoids and exfoliating acids about a week before, unless told otherwise.',
      'Tell us if you are prone to cold sores; we may arrange preventive medication.',
      'Do not treat over an active infection, broken skin, or a fresh tan.',
    ],
    post: [
      'Expect redness and warmth, like a sunburn, settling over the downtime for your session.',
      'Cleanse gently, moisturize, and use a broad-spectrum sunscreen every day.',
      'Avoid heat, saunas, swimming, exercise and makeup until the skin has calmed.',
      'Flaking or pigment lifting is normal; let it shed on its own and do not pick.',
    ],
    faqs: [
      { q: 'How much downtime is there?', a: 'It depends on the device and intensity, from minimal to several days. The Baby option is lower-downtime. We set expectations at consult.' },
      { q: 'How many sessions?', a: 'Often a short series for the best result; some concerns improve in one. We plan it with you.' },
      { q: 'Is it safe for my skin tone?', a: 'Several of our platforms are designed to be safe across skin tones. Your physician confirms suitability.' },
      { q: 'Does it hurt?', a: 'Most describe heat or a light snapping sensation. We use cooling and, where appropriate, numbing.' },
    ],
  },
  clinical: {
    pre: [
      'Avoid blood thinners and alcohol for 24 to 48 hours where your physician agrees.',
      'Pause retinoids and actives for about a week beforehand.',
      'Do not treat over an active infection; tell us about any cold-sore history.',
    ],
    post: [
      'Tiny crusts or scabs form and should be kept clean and dry; do not pick them.',
      'Use sunscreen daily and avoid heat and makeup until healed.',
      'Results build over time, typically across two sessions, developing over weeks.',
    ],
    faqs: [
      { q: 'Is it surgery?', a: 'No, it is a non-surgical, no-incision treatment. Your physician confirms whether you are a candidate.' },
      { q: 'How long do results last?', a: 'Many people see results lasting several years, though this varies. We are honest about expectations.' },
      { q: 'How many sessions?', a: 'Usually two, spaced out, with results building between them.' },
    ],
  },
  skin: {
    pre: [
      'Arrive with clean skin and let us know your current products.',
      'For peels, pause retinoids and exfoliating acids for a few days beforehand.',
    ],
    post: [
      'Use sunscreen daily and avoid extra exfoliation and heat for 24 to 48 hours.',
      'After a peel, light flaking is normal; moisturize and do not pick.',
      'These pair well with a prescribed home routine to extend the result.',
    ],
    faqs: [
      { q: 'Is there any downtime?', a: 'A facial has essentially none. A peel may flake for a few days, depending on its depth.' },
      { q: 'How often should I come?', a: 'Many treat monthly as maintenance. We tailor the cadence to your skin.' },
    ],
  },
  health: {
    pre: [
      'Bring your current products, or a photo of them, so we can build around what you use.',
    ],
    post: [
      'Introduce new actives gradually to let your skin acclimate.',
      'Daily broad-spectrum sunscreen is the foundation of every plan.',
    ],
    faqs: [
      { q: 'Why does skincare come with a consult?', a: 'Medical-grade actives are matched to your skin and goals; a brief review keeps it safe and effective.' },
      { q: 'How soon will I see a difference?', a: 'Skin health is a long game. Consistency over weeks to months is what shows.' },
    ],
  },
};

// Appended to every treatment's FAQs.
export const sharedFaqs: Faq[] = [
  { q: 'Who performs the treatment?', a: 'Care is delivered under physician supervision by our Registered Nurses, Registered Practical Nurses and physicians.' },
  { q: 'How is pricing handled?', a: 'Pricing is shared at your complimentary consult and depends on the plan your physician recommends.' },
];
