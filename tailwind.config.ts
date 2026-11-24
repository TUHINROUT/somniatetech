import type { Config } from "tailwindcss";

const config: Config = {
  future: { hoverOnlyWhenSupported: true },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#12803f", dark: "#0b4a2a", deep: "#08301d", light: "#e8f5ec", accent: "#2fa84f" },
        ink: { DEFAULT: "#0f1f2e", soft: "#4b5a68" },
        topbar: "#0a1f17",
      },
      fontFamily: { sans: ["'Plus Jakarta Sans Variable'", "system-ui", "sans-serif"] },
      boxShadow: {
        card: "0 4px 18px rgba(15,60,35,0.10)",
        soft: "0 2px 10px rgba(15,60,35,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
