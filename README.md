# Software Documentation Guide

A comprehensive, professional-grade resource for software documentation best practices, examples, and templates. Built with React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Features

- 📚 **9 Best Practices** - Essential documentation practices from industry leaders
- 📝 **15+ Documentation Types** - Detailed breakdown of product, process, and sales/marketing docs
- 🌟 **Real-World Examples** - Curated list from Stripe, Twilio, GitHub, Google Maps, and more
- 🛠️ **Tools & Resources** - Documentation generators, style guides, and open source resources
- 📋 **Templates** - Ready-to-use templates for technical docs, APIs, and READMEs
- 🎨 **Modern Dark Theme** - Professional documentation-inspired design
- 📱 **Fully Responsive** - Works beautifully on all devices

## Quick Start

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

### Deploy to GitHub Pages

This project includes GitHub Actions for automatic deployment to GitHub Pages.

**Setup:**

1. Push this repository to GitHub

2. Go to your repository **Settings → Pages**

3. Under "Build and deployment":
   - Source: Select **GitHub Actions**

4. Push any changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update documentation guide"
   git push
   ```

5. GitHub Actions will automatically build and deploy your site!

**Manual deployment:**

You can also trigger deployment manually from the **Actions** tab in your GitHub repository.

## Project Structure

```
client/
  src/
    pages/
      Home.tsx          # Main documentation page
    components/         # Reusable UI components (shadcn/ui)
    contexts/           # React contexts (Theme)
    index.css          # Global styles and dark theme
    App.tsx            # App routing
.github/
  workflows/
    deploy.yml         # GitHub Actions deployment
```

## Customization

### Editing Content

The main content is in `client/src/pages/Home.tsx`. You can:
- Add/remove best practices
- Update documentation types
- Add new examples
- Modify resources and templates

### Changing Theme

Edit the color variables in `client/src/index.css` under the `.dark` section:

```css
.dark {
  --primary: oklch(0.65 0.18 250);      /* Documentation blue */
  --accent: oklch(0.55 0.18 180);       /* Documentation green */
  --background: oklch(0.12 0.015 250);  /* Dark background */
  /* ... */
}
```

## Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **Wouter** - Lightweight routing
- **Lucide React** - Beautiful icons

## License

MIT License - Feel free to use and modify for your own projects.

## About

Created as a free, open resource for the software development community. This guide compiles best practices and examples from industry leaders including:

- Atlassian
- Google
- Microsoft
- Write the Docs community
- And many more open source contributors

## Contributing

Contributions are welcome! Feel free to:
- Add new documentation examples
- Improve existing content
- Fix typos or errors
- Suggest new features

## Acknowledgments

Special thanks to all the companies and projects that have created excellent documentation examples that inspired this guide.
