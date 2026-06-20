// Brand / line metadata (DESIGN_SYSTEM §6.5 step 4).
export const site = {
  brand: 'Restoration Medical',
  line: 'Medical Aesthetics',
  tagline: 'Refined by Medicine.',
  description:
    'Physician-supervised medical aesthetics. Injectables, regenerative boosters, energy and laser, plasma, facials and medical-grade skin health: screened first, tailored to you, and held to a clinical standard.',
  url: 'https://restorationmedical.ca',
  email: 'hello@restorationmedical.ca',
  phone: '(000) 000-0000',
  locations: [
    {
      name: 'Restoration Medical, Thornhill',
      address: 'Address to confirm',
      city: 'Thornhill, ON',
      hours: 'By appointment',
    },
    {
      name: 'Restoration Medical, Woodbridge',
      address: 'Address to confirm',
      city: 'Woodbridge, ON',
      hours: 'By appointment',
    },
  ],
  // Ontario regulatory context (AODA, PHIPA, CPSO), surfaced in legal + footer.
  legal: {
    regulators: ['AODA', 'PHIPA', 'CPSO'],
  },
} as const;

// Primary navigation (mega-menu is built from families + concerns).
export const nav = [
  { label: 'Treatments', href: '/treatments' },
  { label: 'By Concern', href: '/concerns' },
  { label: 'Modalities', href: '/modalities' },
  { label: 'Plan your treatment', href: '/plan' },
  { label: 'Candidacy & safety', href: '/candidacy' },
  { label: 'Memberships', href: '/memberships' },
] as const;
