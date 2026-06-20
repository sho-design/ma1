// "Select all that apply" intake goals, grouped by area (digital version of the
// clinic's aesthetic-goals sheet). Used by the Plan page and the consult form.

export interface GoalGroup {
  title: string;
  items: string[];
}

export const goalGroups: GoalGroup[] = [
  {
    title: 'Face & skin',
    items: [
      'Fine lines / wrinkles',
      'Deep wrinkles / folds',
      'Loss of facial volume',
      'Skin laxity / sagging',
      'Dull or tired-looking skin',
      'Uneven skin tone',
      'Pigmentation / dark spots / melasma',
      'Sun damage',
      'Acne',
      'Acne scars',
      'Large pores',
      'Oily skin',
      'Dry / dehydrated skin',
      'Redness / rosacea / sensitivity',
    ],
  },
  {
    title: 'Eyes, lips & folds',
    items: [
      'Under-eye dark circles',
      'Under-eye bags / hollowness',
      'Thin lips / lip enhancement',
      'Nasolabial folds (smile lines)',
      'Marionette lines',
    ],
  },
  {
    title: 'Face contouring',
    items: [
      'Jawline definition',
      'Chin projection / weak chin',
      'Facial contouring',
    ],
  },
  {
    title: 'Body',
    items: [
      'Neck',
      'Hands',
      'Body contouring / fat reduction',
      'Skin laxity (body)',
      'Cellulite',
      'Stretch marks',
      'Scars',
      'Buttock contouring',
      'Hip dips',
    ],
  },
  {
    title: 'Hair',
    items: [
      'Unwanted hair / laser hair removal',
      'Hair thinning / hair loss',
    ],
  },
  {
    title: 'Skin lesions',
    items: [
      'Moles',
      'Skin tags',
      'Warts',
      'Benign skin lesions',
    ],
  },
];
