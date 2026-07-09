/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo Variable', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        // Monochrome neutrals with a barely-there cool tint (chroma ≤0.01) — contrast-verified
        deep: {
          200: 'oklch(88% 0.006 220 / <alpha-value>)',
          400: 'oklch(72% 0.008 220 / <alpha-value>)',
          700: 'oklch(37% 0.01 220 / <alpha-value>)',
          900: 'oklch(25% 0.01 220 / <alpha-value>)',
          950: 'oklch(19% 0.008 220 / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}