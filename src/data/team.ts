// Care team. Bios are placeholders for the clinic to confirm and expand.
// `initials` drives the avatar placeholder until real headshots are supplied.
// Care is physician-led and clinician-delivered (CPSO).
export interface Provider {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  initials: string;
  /** areas of focus, shown as small tags */
  focus: string[];
  bio: string;
  /** accent family var (see global.css) */
  accent: string;
}

export const team: Provider[] = [
  {
    slug: 'dr-johnny-nguyen',
    name: 'Dr. Johnny Nguyen',
    role: 'Physician & Medical Director',
    credentials: 'CPSO-registered physician',
    initials: 'JN',
    focus: ['Injectables', 'Plasma soft surgery', 'Medical oversight'],
    bio: 'Dr. Nguyen leads the clinic’s medical standard, oversees candidacy and screening, and performs advanced injectable and plasma treatments. Every plan is reviewed under his supervision.',
    accent: 'injectables',
  },
  {
    slug: 'michelle-senior-rn',
    name: 'Michelle',
    role: 'Senior Registered Nurse',
    credentials: 'RN, advanced cosmetic injector',
    initials: 'M',
    focus: ['Neuromodulator', 'Dermal filler', 'Biostimulators'],
    bio: 'Michelle is our senior injector, known for a conservative, natural approach to facial balance. She also mentors the nursing team on technique and safety.',
    accent: 'body',
  },
  {
    slug: 'registered-nurses',
    name: 'Our Registered Nurses',
    role: 'Cosmetic injectors & laser clinicians',
    credentials: 'RN / RPN',
    initials: 'RN',
    focus: ['Injectables', 'Energy & laser', 'Regenerative boosters'],
    bio: 'Our Registered Nurses and Registered Practical Nurses deliver injectable, laser and regenerative treatments under physician supervision, with screening before every plan.',
    accent: 'energy',
  },
  {
    slug: 'skin-health-team',
    name: 'Skin Health Team',
    role: 'Medical aestheticians',
    credentials: 'Advanced skincare specialists',
    initials: 'SH',
    focus: ['Facials & peels', 'HydraFacial', 'Skin-health plans'],
    bio: 'Our skin-health specialists handle facials, peels and medical-grade routines, and help you maintain your result between clinical treatments.',
    accent: 'skin',
  },
];
