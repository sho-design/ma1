// Vanilla motion language for the Restoration Medical design system.
// No library: IntersectionObserver + rAF + pointer events. Every effect is
// gated on a fine pointer and disabled under prefers-reduced-motion (§5).

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ---- Diffusion reveal: blur→sharp, slight rise --------------------------- */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

/* ---- Droplet cursor: soft accent droplet trails the pointer -------------- */
function initDroplet() {
  if (reduced || !finePointer) return;
  const dot = document.createElement('div');
  dot.className = 'droplet';
  document.body.appendChild(dot);

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;
  let shown = false;
  let lastSpark = 0;
  const INTERACTIVE = 'a, button, .card, .tile, .chip, summary, input, select, textarea, [role="radio"], label';

  // A short-lived champagne sparkle, tinted to the hovered element's accent.
  const spawnSparkle = (px: number, py: number, accent: string) => {
    const s = document.createElement('div');
    s.className = 'sparkle';
    const size = 7 + Math.random() * 14; // 7–21px, so sparkles vary in size
    s.style.width = `${size}px`;
    s.style.height = `${size}px`;
    s.style.margin = `${-size / 2}px 0 0 ${-size / 2}px`;
    s.style.left = `${px + (Math.random() - 0.5) * 24}px`;
    s.style.top = `${py + (Math.random() - 0.5) * 24}px`;
    if (accent) s.style.setProperty('--spark', accent);
    document.body.appendChild(s);
    s.addEventListener('animationend', () => s.remove());
  };

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    tx = e.clientX;
    ty = e.clientY;
    if (!shown) {
      shown = true;
      dot.classList.add('is-active');
    }
    // swell + sparkle over interactive elements
    const interactive = (e.target as HTMLElement)?.closest<HTMLElement>(INTERACTIVE);
    dot.classList.toggle('is-hot', !!interactive);
    if (interactive) {
      const now = performance.now();
      if (now - lastSpark > 85) {
        lastSpark = now;
        const accent = getComputedStyle(interactive).getPropertyValue('--accent-vivid').trim()
          || getComputedStyle(interactive).getPropertyValue('--accent').trim();
        spawnSparkle(e.clientX, e.clientY, accent);
      }
    }
  }, { passive: true });

  window.addEventListener('pointerleave', () => dot.classList.remove('is-active'));

  const loop = () => {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    dot.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* ---- Headline light-sweep: a champagne sheen glides across the letters
   toward the cursor (the aesthetics line's "radiance" read). The gradient is
   clipped to the text via CSS; here we just move the highlight position. */
function initSheen() {
  if (reduced || !finePointer) return;
  document.querySelectorAll<HTMLElement>('.ripple').forEach((title) => {
    title.classList.add('is-sheen');
    title.style.setProperty('--sweep', '-30%');
    title.addEventListener('pointermove', (e) => {
      const rect = title.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      title.style.setProperty('--sweep', `${Math.max(-30, Math.min(130, pct)).toFixed(1)}%`);
    });
    // let the light finish its pass off the trailing edge
    title.addEventListener('pointerleave', (e) => {
      const rect = title.getBoundingClientRect();
      const leftward = e.clientX < rect.left + rect.width / 2;
      title.style.setProperty('--sweep', leftward ? '-30%' : '130%');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initDroplet();
  initSheen();
});
