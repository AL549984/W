import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#5b6472",
        line: "#d9dee7",
        surface: "#f7f9fc",
        brand: "#2563eb",
        mint: "#0f9f8f",
        amber: "#b76e00"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
