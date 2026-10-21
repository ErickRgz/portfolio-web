# Erick Rodrigues | Portfolio

Personal portfolio of Erick Rodrigues, a Systems Analysis and Development student at FIAP looking for a software development internship.

**Live site:** https://erickrgz.github.io/portfolio-web/

## Features

- Simple, centered introduction with name, role, and course
- Dark theme by default, with a toggle for the light theme (the choice is saved in the browser)
- Journey section drawn as a Git history: the main line is work, the green branch is education
- Projects, stack, and contact sections
- Responsive layout, keyboard focus styles, semantic HTML, and reduced-motion support
- Automatic deploy to GitHub Pages on every push to `main`

## Tech stack

- [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for development and build
- Plain CSS with design tokens (no UI library)
- GitHub Actions and GitHub Pages for deployment

## Colors and typography

The design uses a cool, blueprint-inspired palette with a single accent color. Dark is the default theme. All values live in `src/styles/tokens.css`.

| Role                | Dark      | Light     | Used for                                  |
| ------------------- | --------- | --------- | ----------------------------------------- |
| Background (`paper`) | `#0c1424` | `#eef2f6` | Page background                           |
| Raised surface      | `#131d33` | `#f8fafc` | Hover states and elevated areas           |
| Text (`ink`)        | `#e8eef8` | `#111b2e` | Headings and main text                    |
| Soft text           | `#9fb0c9` | `#4a566b` | Descriptions and secondary text           |
| Line                | `#213049` | `#c9d3e0` | Borders and the hero grid                 |
| Strong line         | `#3b4c69` | `#9aa8bc` | Tags and the theme button border          |
| Accent              | `#7b96ff` | `#2446f0` | Role title, hover states, current moment  |
| Merge green         | `#3fd9a8` | `#0f9d74` | Education branch and status indicator     |

**Fonts**, loaded from Google Fonts:

- [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque): headings, navigation, and buttons
- [Newsreader](https://fonts.google.com/specimen/Newsreader): body text
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono): dates in the Journey section

## Project structure

```
portfolio/
├── .github/workflows/deploy.yml   # builds and publishes to GitHub Pages
├── index.html                     # entry HTML, fonts, and early theme script
├── src/
│   ├── main.tsx                   # app entry point
│   ├── App.tsx                    # page composition
│   ├── types.ts                   # shared TypeScript types
│   ├── components/                # Header, Hero, About, Timeline, Projects, Stack, Contact, Footer
│   ├── data/                      # all personal content (profile, timeline, projects, stack)
│   ├── hooks/useTheme.ts          # dark/light theme logic
│   └── styles/                    # tokens.css, base.css, components.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting started

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
# install dependencies
npm install

# start the development server
npm run dev
```

Open the address shown in the terminal, usually `http://localhost:5173`.

### Scripts

| Command             | What it does                              |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Starts the development server             |
| `npm run typecheck` | Checks the TypeScript types               |
| `npm run build`     | Type-checks and builds the site to `dist` |
| `npm run preview`   | Serves the production build locally       |

## Customizing the content

All personal content lives in `src/data/`, so the components rarely need to change:

| File          | Content                                              |
| ------------- | ---------------------------------------------------- |
| `profile.ts`  | Name, role, course, links, and the "About me" text   |
| `timeline.ts` | Journey entries (work on `main`, education on `branch`) |
| `projects.ts` | Projects. While empty, the page links to GitHub      |
| `stack.ts`    | Technologies grouped by category                     |

Colors and fonts for both themes are defined in `src/styles/tokens.css`.

To add a project, add an item to `src/data/projects.ts`:

```ts
{
  year: '2026',
  title: 'Project name',
  description: 'What it does, in one or two sentences.',
  tags: ['Java', 'Spring Boot', 'MySQL'],
  repo: 'https://github.com/ErickRgz/your-repo',
}
```

## Deployment

The site is published with GitHub Pages through GitHub Actions.

1. Push the code to the `main` branch.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds the project and publishes the `dist` folder.

Every later push to `main` redeploys the site automatically. The `base: './'` option in `vite.config.ts` lets the site work under any repository path.

## Contact

- Email: erickmanoel.dev@gmail.com
- GitHub: [ErickRgz](https://github.com/ErickRgz)
- LinkedIn: [Erick Rodrigues](https://www.linkedin.com/in/erick-rodrigues-6657432a7/)
