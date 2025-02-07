# Frontend Mentor - Shortly URL Shortening API Challenge Solution

This is a solution to the [Shortly URL Shortening API Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help developers improve their coding skills by building real-world projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard with a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![Shortly Screenshot](/public/screenshots/desktop.png)

### Links

- **Solution URL:** [Click here](https://www.frontendmentor.io/solutions/shortly-url-shortening-api-challenge-solution-myO-hSXI8M)
- **Live Site URL:** [Click here](https://shortly-by-yoursgaurav.vercel.app/)

## My Process

### Built With

- **[pnpm](https://pnpm.io/)** - Fast, disk-space-efficient package manager
- **[Next.js](https://nextjs.org/)** - The React framework for the web
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with static typing
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[clsx](https://www.npmjs.com/package/clsx) & [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)** - For efficiently handling class names
- **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** - A Prettier plugin that automatically sorts Tailwind classes
- **[Clean URI API](https://cleanuri.com/)** - Used for URL shortening

### What I Learned

- Ensuring **type safety with TypeScript**
- Creating **icons as React components** to dynamically change properties on hover and other states
- Avoiding immediate transitions to **newly released library versions** due to potential instability (e.g., **Tailwind CSS v4** lacks proper documentation and support, so waiting 3-4 months until it's stable is ideal)
- Using **clsx** and **tailwind-merge** to create a utility function for reusable components
- Understanding the **POST method in the Fetch API** and how it works
- Utilizing **localStorage** for persistent data storage

### Continued Development

- Enhancing **accessibility and performance**
- Improving **design accuracy** to better match the original challenge
- Implementing **best practices** for code readability and maintainability

### Useful Resources

- **[Next.js Docs](https://nextjs.org/docs)** - Best practices and documentation
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Styling guidance
- **[shadcn/ui Docs](https://ui.shadcn.com/)** - Helped with clsx, tailwind-merge, and utility functions
- **[GitHub repo of TailwindCSS.com](https://github.com/tailwindlabs/tailwindcss.com)** - Insights on using icon components
- **[Kevin Powell’s YouTube channel](https://www.youtube.com/c/KevinPowell)** - Great for learning CSS best practices
- **[ChatGPT](https://chatgpt.com/)** - Assisted throughout the development process

## Author

- **GitHub:** [@yoursgaurav](https://github.com/yoursgaurav)
- **Frontend Mentor:** [@yoursgaurav](https://www.frontendmentor.io/profile/yoursgaurav)
- **X (formerly Twitter):** [@heygauravshukla](https://x.com/heygauravshukla)
