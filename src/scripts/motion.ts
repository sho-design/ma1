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

/* ---- Headline illuminate trace: letters light into the section accent as the
   cursor passes, then settle back. Splits text into per-letter spans while
   preserving child elements (e.g. the italic fragment). */
function splitChars(node: Node, out: HTMLElement[]) {
  for (const child of Array.from(node.childNodes)) {
    if (child.nodeType === Node.TEXT_NODE) {
      const text = child.textContent ?? '';
      if (!text) continue;
      const frag = document.createDocumentFragment();
      for (const ch of text) {
        if (ch === ' ') { frag.appendChild(document.createTextNode(' ')); continue; }
        const span = document.createElement('span');
        span.className = 'il';
        span.textContent = ch;
        out.push(span);
        frag.appendChild(span);
      }
      child.parentNode?.replaceChild(frag, child);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      splitChars(child, out);
    }
  }
}

function initIlluminate() {
  if (reduced || !finePointer) return;
  const R = 95; // light radius in px
  document.querySelectorAll<HTMLElement>('.ripple').forEach((title) => {
    if (title.dataset.split) return;
    const letters: HTMLElement[] = [];
    splitChars(title, letters);
    title.dataset.split = 'true';

    title.addEventListener('pointermove', (e) => {
      for (const s of letters) {
        const r = s.getBoundingClientRect();
        const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
        const t = Math.max(0, 1 - d / R);
        s.style.color = t < 0.06
          ? ''
          : `color-mix(in srgb, var(--accent-vivid, var(--accent)) ${Math.round(t * 100)}%, var(--ink))`;
      }
    });
    title.addEventListener('pointerleave', () => {
      for (const s of letters) s.style.color = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initDroplet();
  initIlluminate();
});
