/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#E8919A',
          light: '#F5C8C8',
          dark: '#3F5E3F',
        },
        cream: {
          DEFAULT: '#3F5E3F',
          muted: '#7A8A7A',
        },
        dark: {
          DEFAULT: '#FAF3EA',
          card: '#FFFFFF',
          border: '#F2D6D6',
        },
        coral: {
          DEFAULT: '#E8919A',
          soft: '#F5C8C8',
          deep: '#D46A75',
        },
        olive: {
          DEFAULT: '#3F5E3F',
          muted: '#7A8A7A',
        },
        ivory: {
          DEFAULT: '#FAF3EA',
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
