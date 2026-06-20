// Partner brands and platforms the clinic treats with. Shown as wordmarks (no
// logo assets yet) on the home Partners strip. These are the device and product
// lines already referenced in data/modalities.ts.
export interface Partner {
  name: string;
  /** short descriptor, used as a title/tooltip */
  note: string;
}

export const partners: Partner[] = [
  { name: 'SkinCeuticals', note: 'Medical-grade skin health' },
  { name: 'HydraFacial', note: 'Hydradermabrasion' },
  { name: 'PicoSure', note: 'Picosecond laser' },
  { name: 'Clarity II', note: 'Dual-wavelength laser' },
  { name: 'Stylage', note: 'HA dermal filler' },
  { name: 'Radiesse', note: 'Biostimulator' },
  { name: 'PlexR Plus', note: 'Plasma soft surgery' },
  { name: 'Healite II', note: 'LED light therapy' },
];
