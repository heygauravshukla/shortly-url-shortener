import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      cyan: "#2acfcf",
      "dark-violet": "#3b3054",
      red: "#f46262",
      gray: "#bfbfbf",
      "grayish-violet": "#9e9aa7",
      "very-dark-blue": "#35323e",
      "very-dark-violet": "#232127",
    },
    fontSize: {
      xs: ".75rem" /* 12px */,
      sm: ".875rem" /* 14px */,
      base: "1rem" /* 16px */,
      lg: "1.125rem" /* 18px */,
      xl: "1.25rem" /* 20px */,
      "2xl": "1.375rem" /* 22px */,
      "3xl": "1.5rem" /* 24px */,
      "4xl": "1.75rem" /* 28px */,
      "5xl": "2.5rem" /* 40px */,
      "6xl": "4.875rem" /* 78px */,
    },
    fontWeight: {
      medium: "500",
      bold: "700",
    },
    letterSpacing: {
      normal: "0em",
      1: ".01em",
      2: ".02em",
      3: ".03em",
      4: ".04em",
      5: ".05em",
      6: ".06em",
    },
    lineHeight: {
      auto: "normal",
      tight: "1.15",
      snug: "1.25",
      normal: "1.55",
      relaxed: "1.625",
      loose: "1.75",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
