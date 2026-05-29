import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
          soft: "rgba(124, 58, 237, 0.12)",
          glow: "rgba(124, 58, 237, 0.3)"
        }
      },
      fontFamily: {
        sans: ["var(--font-onest)", "system-ui", "sans-serif"],
        serif: ["var(--font-onest)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [],
}
export default config
