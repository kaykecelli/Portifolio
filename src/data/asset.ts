/** Resolves a file in `public/` against Vite's `base`, so paths work on GitHub Pages subpaths. */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
