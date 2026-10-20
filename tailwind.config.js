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
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        h: ['var(--font-h)', 'Cinzel', 'serif'],
        sans: ['var(--font-sans)', 'Josefin Sans', 'sans-serif'],
        body: ['var(--font-body)', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
