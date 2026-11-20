# Jana Robert-Oragbon: portfolio

A static Next.js (App Router, TypeScript) site, exported to plain HTML and hosted on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit the content

Everything on the page lives in `content/site.ts`:

- **Add a project:** copy one object in `projects`, edit the fields, save. Put the newest or strongest project first.
- **Update "Next up":** edit `person.next`. Once that project ships, move it into `projects` and write the next one.
- **About page:** edit `about` in `content/site.ts`. Put your photo at `public/headshot.jpg` (portrait, about 4:5); until it exists a script "J" monogram fills the frame.
- **Resume:** the LaTeX source is `resume/resume.tex`. Run `make -C resume` to build `resume/resume.pdf` (with your phone, for applications) and `public/resume.pdf` (no phone, linked from the site).

## Publish on GitHub Pages (one time)

1. Create a **public** repository named `jana18ro.github.io`. That name makes the site live at `https://jana18ro.github.io`.
   (Any other name also works; the site is then served at `https://jana18ro.github.io/<repo-name>/`.)
2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Portfolio v1"
   git branch -M main
   git remote add origin https://github.com/jana18ro/jana18ro.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`. The first run takes about two minutes; watch it in the **Actions** tab.

## Then

- Add the URL to your resume header, LinkedIn (Contact info and Featured) and your GitHub profile.
- Add each new project the week it ships, with its result and a link to the code.

## How it's built

- `app/page.tsx` renders the home page as numbered "pages" (cover, intro, work, experience, toolkit, contact); `app/about/page.tsx` is the About page.
- `components/Ornaments.tsx` holds the stars, ornate frames, corner page labels and script headings.
- `components/ProjectVisual.tsx` draws the small SVG chart inside each project's frame.
- `components/RandomWalk.tsx` draws the hero chart: a seeded geometric random walk of 252 daily steps (`lib/walk.ts`). "Draw a new path" picks a new seed.
- `components/CopyEmail.tsx` copies the email address to the clipboard.
- Fonts are self-hosted through Fontsource (Pinyon Script, Cormorant Garamond, Archivo), so there are no third-party requests.
- `next.config.mjs` uses `output: "export"`, so `npm run build` writes a static site to `out/`.
