// Editorial pull-quotes (DESIGN_SYSTEM §3 RandomPullQuote). On-brand voice:
// natural-looking, honest, no guarantees (§6.4).
export const quotes: { text: string; cite: string }[] = [
  { text: 'Look like yourself, refined.', cite: 'The aesthetics ethos' },
  { text: 'Restraint is the luxury.', cite: 'House principle' },
  { text: 'Subtle by design, never overdone.', cite: 'On injectables' },
  { text: 'We screen first, then we treat.', cite: 'On candidacy' },
  { text: 'Aging well is a plan, not a procedure.', cite: 'The long view' },
  { text: 'Results vary — and we say so.', cite: 'On honesty' },
];

export const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
