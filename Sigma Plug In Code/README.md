# Sigma HTML Plugin

This project is a Sigma Computing plugin that renders plain text data as styled HTML (rich text) inside a Sigma workbook. It is built with React and Vite, and deployed via GitHub Actions to Netlify.

## Features
- Accepts a plain text field from a Sigma workbook.
- Converts the text to styled HTML.
- Displays the result inside the plugin iframe.
- Automatically deployed to Netlify on push to `main`.

## Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/sigma-html-plugin.git
cd sigma-html-plugin
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## Deployment

### Netlify
Ensure you have a Netlify site set up and obtain:
- `NETLIFY_SITE_ID`
- `NETLIFY_AUTH_TOKEN`

Add these as secrets in your GitHub repository.

### GitHub Actions
This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that deploys to Netlify on every push to `main`.

## Usage in Sigma
1. Deploy the plugin to Netlify.
2. Use the Netlify URL as the plugin URL in your Sigma workbook.
3. Pass a plain text field to the plugin.
4. The plugin will render the text as styled HTML.

## License
MIT
