/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        h: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#FFBB17',
          hover: '#E5A710',
          light: '#FFF8E1',
          tint: '#FEF3C7',
          dark: '#92400E',
        },
        ink: {
          DEFAULT: '#0F172A',
          muted: '#64748B',
          light: '#94A3B8',
        },
        canvas: '#FFFDF9',
        surface: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
