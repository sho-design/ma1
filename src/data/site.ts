// Brand / line metadata (DESIGN_SYSTEM §6.5 step 4).
export const site = {
  brand: 'Restoration Medical',
  line: 'Medical Aesthetics',
  tagline: 'Refined by Medicine.',
  description:
    'Physician-led medical aesthetics. Injectables, skin and resurfacing, energy and laser, body, and medical-grade skin health — screened first, tailored to you, and held to a clinical standard.',
  url: 'https://aesthetics.restorationmedical.example',
  email: 'aesthetics@restorationmedical.example',
  phone: '(000) 000-0000',
  locations: [
    {
      name: 'Restoration Medical — Main Clinic',
      address: '000 Example Avenue, Suite 200',
      city: 'Toronto, ON',
      hours: 'Mon–Fri 9–6 · Sat by appointment',
    },
  ],
  // Ontario regulatory context (AODA, PHIPA, CPSO) — surfaced in legal + footer.
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
