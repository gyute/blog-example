import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./contents/**/*.md",
  ],
  theme: {},
  plugins: [typography],
};
export default config;
