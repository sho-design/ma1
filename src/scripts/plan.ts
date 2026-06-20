// "My plan" persistence: a lightweight localStorage list of saved treatment
// slugs, shared across treatment pages, protocol pages and the Plan page.
// Nothing is sent anywhere; this only remembers what you are interested in so
// the Plan page and consult form can carry it forward.

const KEY = 'ma-plan';

const read = (): string[] => {
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
};

const write = (slugs: string[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify([...new Set(slugs)]));
  } catch {
    /* storage unavailable; degrade quietly */
  }
  document.dispatchEvent(new CustomEvent('plan:change', { detail: read() }));
};

export const getPlan = (): string[] => read();

export const removeFromPlan = (slug: string) => {
  write(read().filter((s) => s !== slug));
};

const labelFor = (btn: HTMLElement, added: boolean) => {
  const def = btn.dataset.label || 'Add to my plan';
  const done = btn.dataset.labelAdded || 'Added to plan';
  btn.textContent = added ? done : def;
  btn.classList.toggle('is-added', added);
};

function initPlanButtons() {
  const buttons = Array.from(document.querySelectorAll<HTMLElement>('[data-add-plan]'));
  if (!buttons.length) return;

  const slugsOf = (btn: HTMLElement) =>
    (btn.dataset.slugs || '').split(',').map((s) => s.trim()).filter(Boolean);

  const sync = () => {
    const plan = read();
    for (const btn of buttons) {
      const slugs = slugsOf(btn);
      const allIn = slugs.length > 0 && slugs.every((s) => plan.includes(s));
      labelFor(btn, allIn);
    }
  };

  for (const btn of buttons) {
    if (!btn.dataset.label) btn.dataset.label = btn.textContent?.trim() || 'Add to my plan';
    btn.addEventListener('click', () => {
      const slugs = slugsOf(btn);
      const plan = read();
      const allIn = slugs.length > 0 && slugs.every((s) => plan.includes(s));
      write(allIn ? plan.filter((s) => !slugs.includes(s)) : [...plan, ...slugs]);
    });
  }

  document.addEventListener('plan:change', sync);
  sync();
}

// Saved-count badge in the nav (present on every page).
function updateCounts() {
  const n = read().length;
  document.querySelectorAll<HTMLElement>('[data-plan-count]').forEach((el) => {
    el.textContent = String(n);
    el.hidden = n === 0;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initPlanButtons();
  updateCounts();
});
document.addEventListener('plan:change', updateCounts);
