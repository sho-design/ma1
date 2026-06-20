import { defineConfig } from 'astro/config';

// Restoration Medical, Medical Aesthetics line.
// Static, dependency-light by design: motion is vanilla Canvas/SVG/rAF (see DESIGN_SYSTEM §5).
export default defineConfig({
  site: 'https://restorationmedical.ca',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
