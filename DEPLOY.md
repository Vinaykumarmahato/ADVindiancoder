# Deployment Guide (Static Website)

This project has been converted into a **pure static React website**. No backend server is required to run this application.

## Local Development

To run the project locally:

```bash
npm install
npm run dev
```

## Build for Production

To create a production-ready bundle:

```bash
npm run build
```

The output will be in the `dist/` folder.

## Deployment Platforms

### 1. Vercel (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project in Vercel.
3. Vercel will automatically detect **Vite** and use the following settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### 2. Netlify
1. Push your code to a repository.
2. Link the repository to Netlify.
3. Set the build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Deploy site**.
5. *Note:* Since we use `HashRouter`, redirect rules are not strictly necessary, but for clean URLs in SPAs, you can add a `_redirects` file in `public/` containing `/* /index.html 200`.

### 3. GitHub Pages
1. Install the `gh-pages` package: `npm install gh-pages --save-dev`.
2. Update `package.json` with a `"homepage": "https://<your-username>.github.io/<repo-name>"` property.
3. Add deployment scripts in `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

## Static Data Strategy
- All data is managed via the `src/constants.ts` file.
- Form submissions are logged to the console in `src/services/contact.service.ts`.
