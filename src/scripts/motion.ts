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

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    tx = e.clientX;
    ty = e.clientY;
    if (!shown) {
      shown = true;
      dot.style.opacity = '0.9';
    }
    // swell over interactive elements
    const interactive = (e.target as HTMLElement)?.closest('a, button, .card, .concern, input, select, textarea');
    dot.style.width = interactive ? '30px' : '14px';
    dot.style.height = interactive ? '30px' : '14px';
  });

  const loop = () => {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* ---- Title ripple/warp: letters warp from the cursor like a fluid surface */
function initRipple() {
  if (reduced || !finePointer) return;
  document.querySelectorAll<HTMLElement>('.ripple').forEach((title) => {
    // split into per-letter spans once
    if (!title.dataset.split) {
      const text = title.textContent ?? '';
      title.textContent = '';
      for (const ch of text) {
        const span = document.createElement('span');
        span.textContent = ch;
        span.style.display = 'inline-block';
        span.style.willChange = 'transform';
        if (ch === ' ') span.style.width = '0.32em';
        title.appendChild(span);
      }
      title.dataset.split = 'true';
    }
    const spans = Array.from(title.querySelectorAll('span'));
    title.addEventListener('pointermove', (e) => {
      const rect = title.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (const span of spans) {
        const s = span as HTMLElement;
        const cx = s.offsetLeft + s.offsetWidth / 2;
        const cy = s.offsetTop + s.offsetHeight / 2;
        const dist = Math.hypot(mx - cx, my - cy);
        const pull = Math.max(0, 1 - dist / 140);
        s.style.transform = `translateY(${-pull * 10}px) scale(${1 + pull * 0.06})`;
      }
    });
    title.addEventListener('pointerleave', () => {
      spans.forEach((s) => ((s as HTMLElement).style.transform = ''));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initDroplet();
  initRipple();
});
