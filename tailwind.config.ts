import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Indigo 600
        secondary: '#7c3aed', // Purple 600
      },
    },
  },
  plugins: [],
};
export default config;
