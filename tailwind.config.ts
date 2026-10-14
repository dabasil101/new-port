import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        soft: "var(--soft)",
        mut: "var(--mut)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        hard: "5px 5px 0 var(--ink)",
        "hard-sm": "3px 3px 0 var(--ink)",
        "hard-lg": "8px 8px 0 var(--ink)",
      },
    },
  },
  plugins: [],
};
export default config;
