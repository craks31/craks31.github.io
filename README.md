This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


---

# My Portfolio

A modern, responsive portfolio built with **Next.js** and **Tailwind CSS**, enhanced with **Aceternity UI**, **ShadCN UI**, **Framer Motion**, and **TypeScript**. This single-page portfolio showcases my skills, projects, and contact information, and is deployed on both **GitHub Pages** and **Vercel**.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
  - [Next.js](#nextjs)
  - [Tailwind CSS](#tailwind-css)
  - [Aceternity UI, ShadCN UI, and Custom Components](#aceternity-ui-shadcn-ui-and-custom-components)
  - [Framer Motion](#framer-motion)
  - [TypeScript](#typescript)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)
  - [Vercel](#vercel)
- [Why This Tech Stack](#why-this-tech-stack)
- [License](#license)

## Project Overview

This is a single-page portfolio website built with **Next.js**. It combines server-side rendering, client-side interactivity, and smooth animations to deliver an engaging, high-performance portfolio experience. The project utilizes several modern libraries and frameworks to streamline development, provide a polished UI, and allow for easy maintenance and scaling.

## Tech Stack

### Next.js
**Next.js** is a React framework that enables both server-side rendering (SSR) and static site generation (SSG). It powers the application structure, supports SEO optimization, and offers features like file-based routing and API handling. With Next.js, I can easily configure both server-rendered and static components, which are ideal for performance and SEO.

### Tailwind CSS
**Tailwind CSS** is a utility-first CSS framework that allows for rapid styling and customization of UI components. It simplifies the styling process by providing a rich set of pre-defined classes. By using Tailwind CSS, the project maintains a clean and maintainable style structure without writing extensive custom CSS.

### Aceternity UI, ShadCN UI, and Custom Components
- **Aceternity UI** and **ShadCN UI**: These UI libraries offer a set of pre-built and customizable components that enhance the look and feel of the portfolio. I chose them to provide a polished and cohesive design with minimal effort, focusing on consistency and modern UI standards.
- **Custom Components**: The custom components allow for fine-tuning specific sections like **Menu**, **Contact**, **Projects**, **SkillSet**, **Hero**, and **AboutMe**. This mix of custom and library components enables flexibility and visual uniqueness while saving development time.

### Framer Motion
**Framer Motion** is a powerful animation library for React. I used it to create smooth, engaging animations that enhance the user experience, helping to draw attention to key sections of the portfolio. The flexibility of Framer Motion allows for easy integration with Next.js and provides a highly performant way to animate components.

### TypeScript
**TypeScript** brings type safety to the project, reducing bugs and improving code quality. By using TypeScript, the project is more maintainable and developer-friendly, as it provides better tooling for debugging and refactoring.

## Folder Structure

The project follows a clean, modular structure:

```
/ (root)
├── app/                  # Next.js app directory with layout, global styles, and main pages
│   ├── global.css        # Global CSS styling using Tailwind
│   ├── layout.tsx        # Layout file defining the app structure
│   ├── page.tsx          # Home page component
│   └── provider.tsx      # Provider configuration for global context
├── components/           # All major React components
│   ├── Menu.tsx          # Navbar and navigation
│   ├── Contact.tsx       # Contact form and details
│   ├── Projects.tsx      # Project showcase
│   ├── SkillSet.tsx      # Skills and technologies
│   ├── Hero.tsx          # Hero section (intro)
│   ├── AboutMe.tsx       # About me section
│   └── ui/               # UI components from Aceternity UI, ShadCN UI, and custom components
├── lib/
│   └── utils.ts          # Utility functions used across the project
├── public/               # Static assets like images and documentation
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.mjs       # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration for Tailwind
└── package.json          # Project dependencies and scripts
```

## Installation

1. **Run the Development Server**:
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to see the portfolio in action.

## Development

To build and optimize the portfolio for production:

```bash
npm run build
```

To export the project as static HTML for GitHub Pages:

```bash
npm run export
```

The `out` directory will contain the static files for deployment.

## Deployment

### GitHub Pages
The portfolio is automatically built and exported as static HTML via **GitHub Actions** and deployed to the `gh-pages` branch.

### Vercel
The project is also connected to **Vercel** for easy deployment and hosting. Vercel is configured to deploy the `main` branch directly from the GitHub repository, allowing for both server-rendered and static content.

## Why This Tech Stack

Each technology in this stack was chosen to meet specific needs:

- **Next.js** offers a combination of SSR and SSG, enabling fast, SEO-friendly pages.
- **Tailwind CSS** accelerates the styling process, keeping the codebase clean and consistent.
- **Aceternity UI and ShadCN UI** provide ready-to-use, elegant components that streamline development without sacrificing visual appeal.
- **Framer Motion** enables performance-friendly animations, enhancing user experience without impacting page speed.
- **TypeScript** improves code reliability, reducing runtime errors and making the development experience smoother.

Together, these tools create a responsive, maintainable, and engaging portfolio that combines performance with aesthetics.

---

This README provides an overview of your project, setup instructions, deployment details, and the rationale behind your tech choices. Let me know if you'd like further customization!