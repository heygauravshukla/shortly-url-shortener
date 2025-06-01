# URL shortening API landing page

This is a solution to the [URL shortening API landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- Shorten any valid URL.
- See a list of their shortened links, even after refreshing the browser.
- Copy the shortened link to their clipboard in a single click.
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty.
  - The submitted URL has already been shortened.
  - The submitted URL is a previously generated shortened link.

### Screenshot

![](/public/screenshots/desktop.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/shortly-url-shortening-api-challenge-solution-myO-hSXI8M](https://www.frontendmentor.io/solutions/shortly-url-shortening-api-challenge-solution-myO-hSXI8M)
- Live Site URL: [https://sus-gshukla.vercel.app](https://sus-gshukla.vercel.app)

## My process

### Built with

- Semantic JSX markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Open-source component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Spoo.me API](https://spoo.me/api) - API for URL shortening
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

### What I learned

This project enhanced my understanding of several key concepts, including:

- Ensuring type safety and improving code reliability through TypeScript.
- Leveraging Shadcn UI to create a reusable and maintainable component library.
- Utilizing the `cn` utility function to apply conditional classes efficiently in Tailwind CSS.
- Implementing SVG icons as React components to enable dynamic property modifications, such as hover states.
- Employing the `localStorage` object to persist shortened URLs as key-value pairs in the browser.

### Continued development

In future projects, I intend to focus on the following areas for improvement:

- Establishing a centralized constants directory to streamline content management and enhance project organization.

### Useful resources

- [Tailwind CSS GitHub Repository](https://github.com/tailwindlabs/tailwindcss.com) - This resource provided inspiration on integrating SVG icons as React components, enhancing interactivity.
- [cn() - Every Tailwind Coder Needs It (clsx + twMerge)](https://www.youtube.com/watch?v=re2JFITR7TI) - This video by Wesley on the ByteGrad YouTube channel offered practical guidance on the `cn` utility function, combining `clsx` and `tailwind-merge` for efficient class management.

## Author

- Website - [Gaurav Shukla](https://gshukla.vercel.app)
- Frontend Mentor - [@heygauravshukla](https://www.frontendmentor.io/profile/heygauravshukla)
- X - [@heygauravshukla](https://www.x.com/heygauravshukla)
