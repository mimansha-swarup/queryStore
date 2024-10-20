import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(228,3%,17%)",
        sidebarBackground: "hsl(228,3%,14%)",
        alternativeBackground: "rgba(0,0,0,.3)",
        hoverBackground: "rgba(255,255,255,.07)",
        activeBackground: "hsl(228,3%,22%)",
        disableBackground: "hsl(228,3%,16%)",
        // accent: "hsl(40,52%,71%)",
        danger: "#FF6C5D",
        primaryText: "hsl(228,3%,80%)",
        secondaryText: "hsl(228,3%,60%)",
        disableText: "rgba(255,255,255,.4)",
        scrollbar: "rgba(255,255,255,.2)",
        shadow: "rgba(255,255,255,.12)",
        shadowLight: "rgba(255,255,255,.12)",
        white: "#fff",
        // background: 'hsl(var(--background))',
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
    colors: {
      background: "hsl(228,3%,17%)",
      sidebarBackground: "hsl(228,3%,14%)",
      alternativeBackground: "rgba(0,0,0,.3)",
      hoverBackground: "rgba(255,255,255,.07)",
      activeBackground: "hsl(228,3%,22%)",
      disableBackground: "hsl(228,3%,16%)",
      accent: "hsl(40,52%,71%)",
      danger: "#FF6C5D",
      primaryText: "hsl(228,3%,80%)",
      secondaryText: "hsl(228,3%,60%)",
      disableText: "rgba(255,255,255,.4)",
      scrollbar: "rgba(255,255,255,.2)",
      shadow: "rgba(255,255,255,.12)",
      shadowDark: "rgba(0,0,0,.15)",
      white: "#fff",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
