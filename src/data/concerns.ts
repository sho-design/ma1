// "By Concern": empathetic entry points (DESIGN_SYSTEM §6.3).
// `icon` maps to a slug in ConcernIcon.astro.

export interface Concern {
  slug: string;
  label: string;
  line: string;
  icon: string;
  /** families most relevant to this concern */
  families: string[];
  /** accent family used to colour the tile/icon; spread for visual variety */
  accent: string;
  /** empathetic page headline */
  headline: string;
  /** short, honest "how we may help" paragraph for the concern page */
  help: string;
}

export const concerns: Concern[] = [
  {
    slug: 'fine-lines',
    label: 'Fine lines & wrinkles',
    line: 'Soften expression lines while keeping your face yours.',
    icon: 'lines',
    families: ['injectables', 'skin', 'health'],
    accent: 'injectables',
    headline: 'Soften the lines that move with you.',
    help: 'Expression lines deepen with years of smiling, squinting, and frowning. We can relax the muscles that drive them and support the skin around them, so your face still moves and still reads as yours, just more rested.',
  },
  {
    slug: 'volume',
    label: 'Volume & contour',
    line: 'Restore subtle structure where time has quietly taken it.',
    icon: 'contour',
    families: ['injectables', 'body'],
    accent: 'body',
    headline: 'Restore quiet structure, not volume for its own sake.',
    help: 'Cheeks, temples, and the jawline lose subtle support over time. Placed conservatively, filler can rebuild that scaffolding so you look refreshed rather than filled.',
  },
  {
    slug: 'texture',
    label: 'Texture & tone',
    line: 'Smoother surface, more even light across the skin.',
    icon: 'texture',
    families: ['skin', 'energy', 'health'],
    accent: 'skin',
    headline: 'Smoother skin that catches the light evenly.',
    help: 'Rough texture and uneven tone scatter light and read as tired. Resurfacing and medical-grade actives encourage the skin to renew, refining the surface over a considered series.',
  },
  {
    slug: 'acne-scarring',
    label: 'Acne & scarring',
    line: 'Calm active skin and soften the marks it leaves behind.',
    icon: 'acne',
    families: ['skin', 'energy', 'clinical'],
    accent: 'clinical',
    headline: 'Calm the breakouts, soften what they leave behind.',
    help: 'Active acne and the marks it leaves are different problems, and we treat them as such: settling inflammation first, then working on texture and scarring with energy or microneedling.',
  },
  {
    slug: 'pigmentation',
    label: 'Pigmentation',
    line: 'Address sun and hormonal pigment with measured energy.',
    icon: 'pigment',
    families: ['energy', 'skin', 'health'],
    accent: 'energy',
    headline: 'Even out sun and hormonal pigment.',
    help: 'Sun spots and melasma respond to measured light and a disciplined skin-health routine. We set realistic expectations, because pigment can be stubborn and can return without protection.',
  },
  {
    slug: 'redness',
    label: 'Redness',
    line: 'Quiet diffuse redness and visible vessels.',
    icon: 'redness',
    families: ['energy', 'health'],
    accent: 'clinical',
    headline: 'Quiet the flush and the visible vessels.',
    help: 'Diffuse redness and broken capillaries respond well to light-based treatment. We pair it with a calming routine so the result holds.',
  },
  {
    slug: 'laxity',
    label: 'Laxity & lifting',
    line: 'Encourage firmer, more defined contours without surgery.',
    icon: 'lift',
    families: ['energy', 'body'],
    accent: 'body',
    headline: 'Firmer contours, without surgery.',
    help: 'Mild laxity can be encouraged to tighten with energy-based treatment that prompts collagen over time. We are honest that results are gradual and modest, not a facelift.',
  },
  {
    slug: 'hair',
    label: 'Hair restoration',
    line: 'Support thicker, healthier hair with evidence-led options.',
    icon: 'hair',
    families: ['clinical', 'health'],
    accent: 'health',
    headline: 'Support healthier, fuller hair.',
    help: 'Thinning hair has many causes, so we start with a medical assessment. For the right candidates, evidence-led options including PRP can support density over a course of treatment.',
  },
  {
    slug: 'aging-well',
    label: 'Aging well',
    line: 'A considered, long-view plan, subtle by design.',
    icon: 'aging',
    families: ['injectables', 'skin', 'health', 'energy'],
    accent: 'energy',
    headline: 'A long view, subtle by design.',
    help: 'Aging well is a plan, not a single procedure. We combine prevention, skin health, and the lightest effective treatments so the change is gradual and you still look like yourself.',
  },
];
