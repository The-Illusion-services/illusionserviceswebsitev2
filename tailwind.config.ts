import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#e4e2dd",
        "secondary-fixed-dim": "#acabab",
        "on-primary-fixed-variant": "#e5e2e1",
        "on-primary-container": "#ffffff",
        "on-primary-fixed": "#ffffff",
        "secondary-container": "#d6d4d3",
        "primary-fixed": "#5f5e5e",
        "outline-variant": "#c6c6c6",
        "secondary-fixed": "#c8c6c6",
        "on-secondary-fixed": "#1b1c1c",
        "primary": "#000000",
        "on-tertiary-fixed-variant": "#e2e2e2",
        "on-secondary-container": "#1b1c1c",
        "background": "#fbf9f4",
        "on-primary": "#e5e2e1",
        "surface-tint": "#5f5e5e",
        "outline": "#777777",
        "tertiary": "#3b3b3b",
        "surface-container-high": "#eae8e3",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#3b3b3b",
        "on-tertiary": "#e2e2e2",
        "surface": "#fbf9f4",
        "on-surface": "#1b1c19",
        "primary-container": "#3c3b3b",
        "error": "#ba1a1a",
        "surface-variant": "#e4e2dd",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed": "#ffffff",
        "on-secondary": "#ffffff",
        "surface-bright": "#fbf9f4",
        "on-tertiary-container": "#ffffff",
        "on-surface-variant": "#474747",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#474746",
        "on-error-container": "#410002",
        "tertiary-fixed-dim": "#474747",
        "tertiary-container": "#747474",
        "surface-container-low": "#f5f3ee",
        "surface-container": "#f0eee9",
        "inverse-surface": "#30312e",
        "on-background": "#1b1c19",
        "inverse-on-surface": "#f2f1ec",
        "inverse-primary": "#c8c6c5",
        "surface-dim": "#dbdad5",
        "secondary": "#5f5e5e",
        "tertiary-fixed": "#5e5e5e"
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px"
      },
      fontFamily: {
        headline: ["var(--font-plus-jakarta-sans)"],
        body: ["var(--font-plus-jakarta-sans)"],
        label: ["var(--font-manrope)"],
      }
    },
  },
  plugins: [],
};

export default config;
