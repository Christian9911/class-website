# Class Website - ReactJS Practical Assessment

A simple multi-view class website built with ReactJS, JSX, functional components, props, arrays, `map()`, event handlers, and `useState`. No CSS or styling frameworks are used.

## Before submitting
1. Replace `Your School Name` in `src/App.jsx` with your actual school name.
2. Replace the sample student names in `src/Students.jsx` with real names if permitted by your teacher.
3. Replace the sample location and email in `src/Contact.jsx` with the school's correct details.
4. Add your full name and RTB email to your submission evidence (not to public source code unless your teacher requests it).

## Run locally
Install Node.js, open a terminal in this folder, and run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

To check the production build:

```bash
npm run build
npm run preview
```

## GitHub
Create a **public** repository named `class-website`. Upload the project files, but do not upload `node_modules`.

Example commands, after creating an empty GitHub repository:

```bash
git init
git add .
git commit -m "Create React class website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/class-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Vercel deployment
1. Sign in at https://vercel.com using GitHub.
2. Choose **Add New → Project** and import `class-website`.
3. Keep the Vite defaults: Build Command `npm run build`, Output Directory `dist`.
4. Deploy and open the live URL to test each view and the click counter.
