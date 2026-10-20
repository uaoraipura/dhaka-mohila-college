# Dhaka Mohila College Website

Static website. No build step or dependencies.

## Structure

```
dhaka-mohila-college/
├── index.html          Page markup
├── css/style.css       All styles (colors are variables at the top)
├── js/main.js          Notice filter and contact form behaviour
└── assets/images/      Put the logo and photos here
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Before launch

- Replace every `[bracketed]` placeholder in `index.html`.
- Replace the sample notices with real ones.
- Connect the contact form to email or a backend (see `js/main.js`).
- Add the college logo to `assets/images/`.
