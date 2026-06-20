// "Select all that apply" intake goals, grouped by area (digital version of the
// clinic's aesthetic-goals sheet). Each goal maps to the treatments that relate
// to it (by slug) so the Plan page can suggest starting points. Used by the
// Plan page and (label only) elsewhere.

export interface Goal {
  label: string;
  /** related treatment slugs (see data/treatments.ts) */
  treatments: string[];
}

export interface GoalGroup {
  title: string;
  items: Goal[];
}

export const goalGroups: GoalGroup[] = [
  {
    title: 'Face & skin',
    items: [
      { label: 'Fine lines / wrinkles', treatments: ['neuromodulator', 'eco2', 'skin-health-plan'] },
      { label: 'Deep wrinkles / folds', treatments: ['dermal-filler', 'eco2', 'neuromodulator'] },
      { label: 'Loss of facial volume', treatments: ['dermal-filler', 'biostimulator'] },
      { label: 'Skin laxity / sagging', treatments: ['xerf', 'eco2', 'biostimulator'] },
      { label: 'Dull or tired-looking skin', treatments: ['vamp-glass-facial', 'hydrafacial', 'exosome-facial'] },
      { label: 'Uneven skin tone', treatments: ['picosure', 'medical-peel', 'skin-health-plan'] },
      { label: 'Pigmentation / dark spots / melasma', treatments: ['picosure', 'clarity-ii', 'medical-peel'] },
      { label: 'Sun damage', treatments: ['picosure', 'medical-peel', 'skin-health-plan'] },
      { label: 'Acne', treatments: ['clarity-ii', 'hydrafacial', 'medical-peel'] },
      { label: 'Acne scars', treatments: ['eco2', 'picosure', 'xerf'] },
      { label: 'Large pores', treatments: ['vamp-glass-facial', 'xerf', 'hydrafacial'] },
      { label: 'Oily skin', treatments: ['hydrafacial', 'medical-peel', 'skin-health-plan'] },
      { label: 'Dry / dehydrated skin', treatments: ['hydrafacial', 'vamp-glass-facial', 'skin-health-plan'] },
      { label: 'Redness / rosacea / sensitivity', treatments: ['clarity-ii', 'vascular-lesions', 'skin-health-plan'] },
      { label: 'Facial veins / broken capillaries', treatments: ['clarity-ii', 'vascular-lesions'] },
      { label: 'Crepey skin', treatments: ['xerf', 'eco2', 'biostimulator'] },
    ],
  },
  {
    title: 'Eyes, lips & folds',
    items: [
      { label: 'Under-eye dark circles', treatments: ['prp', 'prf', 'dermal-filler'] },
      { label: 'Under-eye bags / hollowness', treatments: ['prf', 'dermal-filler', 'plexr-blepharoplasty'] },
      { label: 'Thin lips / lip enhancement', treatments: ['dermal-filler'] },
      { label: 'Nasolabial folds (smile lines)', treatments: ['dermal-filler', 'biostimulator'] },
      { label: 'Marionette lines', treatments: ['dermal-filler', 'neuromodulator'] },
      { label: 'Gummy smile', treatments: ['neuromodulator'] },
      { label: 'Lip flip', treatments: ['neuromodulator'] },
      { label: 'Hooded / heavy eyelids', treatments: ['plexr-blepharoplasty'] },
      { label: 'Brow position / heavy brows', treatments: ['neuromodulator'] },
    ],
  },
  {
    title: 'Face contouring',
    items: [
      { label: 'Jawline definition', treatments: ['dermal-filler', 'biostimulator', 'neuromodulator'] },
      { label: 'Chin projection / weak chin', treatments: ['dermal-filler'] },
      { label: 'Facial contouring', treatments: ['dermal-filler', 'biostimulator'] },
      { label: 'Jaw slimming / teeth grinding', treatments: ['neuromodulator'] },
    ],
  },
  {
    title: 'Body',
    items: [
      { label: 'Neck', treatments: ['xerf', 'eco2', 'biostimulator'] },
      { label: 'Hands', treatments: ['biostimulator', 'dermal-filler'] },
      { label: 'Body contouring / fat reduction', treatments: ['xerf'] },
      { label: 'Skin laxity (body)', treatments: ['xerf'] },
      { label: 'Cellulite', treatments: ['xerf'] },
      { label: 'Stretch marks', treatments: ['xerf', 'eco2', 'picosure'] },
      { label: 'Scars', treatments: ['eco2', 'picosure', 'xerf'] },
      { label: 'Buttock contouring', treatments: ['biostimulator', 'xerf'] },
      { label: 'Hip dips', treatments: ['dermal-filler', 'biostimulator'] },
      { label: 'Excessive sweating (hyperhidrosis)', treatments: ['neuromodulator'] },
      { label: 'Neck bands', treatments: ['neuromodulator'] },
      { label: 'Tattoo removal', treatments: ['picosure'] },
    ],
  },
  {
    title: 'Hair',
    items: [
      { label: 'Unwanted hair / laser hair removal', treatments: ['clarity-ii'] },
      { label: 'Hair thinning / hair loss', treatments: ['prp'] },
    ],
  },
  {
    title: 'Skin lesions',
    items: [
      { label: 'Moles', treatments: ['plexr-blepharoplasty', 'vascular-lesions'] },
      { label: 'Skin tags', treatments: ['vascular-lesions', 'plexr-blepharoplasty'] },
      { label: 'Warts', treatments: ['vascular-lesions'] },
      { label: 'Benign skin lesions', treatments: ['vascular-lesions', 'plexr-blepharoplasty'] },
    ],
  },
];
