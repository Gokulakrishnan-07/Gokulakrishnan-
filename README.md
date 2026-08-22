# Gokulakrishnan K — Portfolio

Premium React/Vite portfolio for Gokulakrishnan K, a final-year B.Sc. Computer Science student and aspiring Full Stack Developer.

## Stack

React, Vite, Three.js, React Three Fiber, Drei, Framer Motion, Lucide React, and modern CSS.

## Run locally

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run preview
```

## Editable content

- Personal details, links, skills, projects, and quotes: `src/data.js`.
- SDECMS cover and gallery: `public/projects/`. The supplied `Home.png` is the cover; the other three supplied screenshots are shown in the detail gallery.
- Profile photo: add your own `public/profile.jpg` and wire it into the hero when ready. No face or invented image is included.
- Resume: add the supplied PDF as `public/GK_Resume_Professional.pdf`. The buttons already point to that path; the PDF was not present in this checkout.
- SDECMS GitHub URL: update the `github` field in `src/data.js` when the real repository is available. It is intentionally not invented.
- Instagram: replace the `instagram: '#'` placeholder in `src/data.js`.

## Contact form

The form is wired for EmailJS and does not claim success until EmailJS returns successfully. Copy `.env.example` to `.env` and fill in `VITE_EMAIL_SERVICE_ID`, `VITE_EMAIL_TEMPLATE_ID`, and `VITE_EMAIL_PUBLIC_KEY`. Configure the EmailJS template with `name`, `email`, `message`, `website`, and `to_email`; set the destination to `gokulakrishnankathiravan@gmail.com`. The honeypot field provides a lightweight anti-spam check.

Without those values, the form displays a configuration message and provides the direct email link in the contact area.

## Deployment

Run `npm run build` and deploy the generated `dist` directory to Vercel, Netlify, or GitHub Pages. This is a single-page Vite site with hash-free section navigation, so no client-side route fallback is required. For GitHub Pages, configure the repository as a Vite static site and set the correct Vite `base` if deploying below the domain root.

## Design notes

The 3D hero scene uses lightweight geometry and is hidden for reduced-motion users. Theme preference persists in local storage. Project cards and the modal are keyboard usable; press `Escape` or activate the close button to dismiss a modal.
