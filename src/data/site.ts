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
      label: 'Thornhill',
      address: '700 Centre St (Inside Walmart)',
      city: 'Thornhill, ON',
      postal: 'L4J 0A7',
      hours: 'By appointment',
      mapQuery: '700 Centre St, Thornhill, ON L4J 0A7',
      comingSoon: false,
    },
    {
      name: 'Restoration Medical, Maple',
      label: 'Maple (Coming Soon)',
      address: '2620 Rutherford Rd, Unit 105-107',
      city: 'Vaughan, ON',
      postal: 'L4K 0H1',
      hours: 'Opening soon',
      mapQuery: '2620 Rutherford Rd, Vaughan, ON L4K 0H1',
      comingSoon: true,
    },
  ],
  // Sister brands across the Restoration Medical network (footer "Our network").
  network: [
    { name: 'Restoration Medical', note: 'The clinic', href: 'https://restorationmedical.ca' },
    { name: 'Canada Knee Clinic', note: 'Knee & joint care', href: 'https://canadakneeclinic.com' },
    { name: 'Infusion Therapy', note: 'Wellness infusions', href: 'https://it-1-gold.vercel.app' },
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
