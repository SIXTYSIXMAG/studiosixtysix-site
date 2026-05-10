# Studio Sixtysix

Marketing site for [studiosixtysix.co](https://studiosixtysix.co). Astro 6, TypeScript strict, Tailwind 4, MDX content collections, View Transitions. Static output, deployed to GitHub Pages via GitHub Actions.

See `CLAUDE.md` for project conventions: design tokens, voice rules, services list, content schema, performance targets, and constraints.

## Develop

```bash
npm install
npm run dev
```

Dev server runs at http://localhost:4321.

## Build

```bash
npm run build       # static output to dist/
npm run preview     # serve dist/ locally
```

## Project structure

```
public/                  static assets (CNAME, robots.txt, fonts/, favicon.svg, og-default.jpg)
src/
  assets/work/[slug]/    case study images
  components/            Astro components (BaseHead, Nav, Footer, WorkTile)
  content/work/          MDX case studies
  content.config.ts      collection schema (Astro 6 content layer)
  data/services.ts       eight services data
  layouts/BaseLayout.astro
  pages/                 routes
  styles/global.css      tokens, @theme, @utility, @font-face
astro.config.mjs
.github/workflows/deploy.yml
```

## Adding a case study

1. **Create the MDX file** at `src/content/work/[slug].mdx`. Use kebab-case for the slug — it becomes the URL at `/work/[slug]`.
2. **Add the hero image** at `src/assets/work/[slug]/hero.jpg`. Master at most 2400px on the long edge. Additional body images go in the same directory.
3. **Frontmatter** matches the schema in `src/content.config.ts`:

   ```yaml
   ---
   title: "Project Title"
   client: "Client Name"
   year: 2024
   services:
     - Editorial Production
   heroImage: "../../assets/work/[slug]/hero.jpg"
   gallery: ["../../assets/work/[slug]/01.jpg", "../../assets/work/[slug]/02.jpg"]  # optional
   publishedIn: "Sixtysix Magazine, Issue 12"  # optional
   featured: true   # surfaces on the homepage; first six (by order) are shown
   order: 16        # controls work-index sort order and next-project link
   credits:
     editorialDirection: "Studio Sixtysix"
     photography: "Photographer Name"
     styling: "Stylist Name"
     setDesign: "Stylist Name"
     words: "Writer Name"
     other:
       - { role: "Production", name: "Producer Name" }
   ---
   ```

4. **Body** follows the five-section structure from `CLAUDE.md`:

   ```mdx
   {/* STANDFIRST */}

   One sentence, 20 to 30 words. This first paragraph automatically renders in Lead style.

   {/* BRIEF */}

   50 to 80 words. Strategic context: what the brand actually needed, often deeper than what they asked for.

   {/* APPROACH */}

   100 to 180 words. Specific decisions, named names, named places.

   {/* OUTPUT */}

   40 to 60 words. What was produced and where it ran.
   ```

   Images in the body render full-width. Wrap in `<figure>` with `<figcaption>` for captions in Caption style.

5. **Voice rules** from `CLAUDE.md`:
   - First-person plural ("we", "our"). Past tense for completed work.
   - Specific over general. Name people, places, dates.
   - No em dashes. No agency jargon (solutions, leveraged, deliverables, end-to-end, holistic).
   - Reads like a magazine writing about the work, not a sales page about the studio.

6. **Push to `main`.** GitHub Actions builds and deploys to GitHub Pages.

## Deployment

`main` branch deploys automatically via `.github/workflows/deploy.yml`. CNAME at `public/CNAME` points the site at `studiosixtysix.co`. After the first successful deploy, configure DNS at the domain registrar (see deploy log or commit history for the records).

## Notes

- **Type swap path.** Fraunces and Inter are V1 fonts. To upgrade to GT Sectra and ABC Diatype, replace the woff2 files in `public/fonts/`, update the `@font-face` blocks in `src/styles/global.css`, and adjust `--font-display` / `--font-body` in the `@theme` block. Tailwind references families through CSS variables so no component changes are needed.
- **Plausible.** Reserved for post-launch. Not installed.
- **No tracking, no forms, no third-party JS.** See `CLAUDE.md` constraints.
