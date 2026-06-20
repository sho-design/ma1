// Partner brands and platforms the clinic treats with. Shown as wordmarks (no
// logo assets yet) on the home Partners strip. Each links to the treatment or
// modality it powers. `accent` is a family accent var (see global.css) used on
// hover. These device and product lines are referenced in data/modalities.ts.
export interface Partner {
  name: string;
  /** short descriptor, used under the name and as a title/tooltip */
  note: string;
  /** where the wordmark links to */
  href: string;
  /** accent family for the hover state */
  accent: string;
}

export const partners: Partner[] = [
  { name: 'SkinCeuticals', note: 'Medical-grade skin health', href: '/treatments/skin-health-plan', accent: 'health' },
  { name: 'HydraFacial', note: 'Hydradermabrasion', href: '/treatments/hydrafacial', accent: 'skin' },
  { name: 'PicoSure', note: 'Picosecond laser', href: '/treatments/picosure', accent: 'energy' },
  { name: 'Clarity II', note: 'Dual-wavelength laser', href: '/treatments/clarity-ii', accent: 'energy' },
  { name: 'Stylage', note: 'HA dermal filler', href: '/treatments/dermal-filler', accent: 'injectables' },
  { name: 'Radiesse', note: 'Biostimulator', href: '/treatments/biostimulator', accent: 'injectables' },
  { name: 'PlexR Plus', note: 'Plasma soft surgery', href: '/treatments/plexr-blepharoplasty', accent: 'clinical' },
  { name: 'Healite II', note: 'LED light therapy', href: '/modalities#red-light', accent: 'body' },
];
