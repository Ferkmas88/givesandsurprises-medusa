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
        // Brand palette per official client manual
        rose: {
          DEFAULT: '#D17278',   // primary brand rose (rgb 209,114,120)
          soft: '#E8B7BB',      // pastel pink for backgrounds
          mist: '#F5DCDF',      // very soft pink wash
          deep: '#B85962',      // darker rose hover
        },
        navy: {
          DEFAULT: '#3F607A',   // brand navy blue (rgb 63,96,122)
          soft: '#7D96AB',      // muted navy
          mist: '#D8DFE7',      // pale blue-grey
          deep: '#2C4A60',      // darker navy
        },
        cream: {
          DEFAULT: '#FAF3EA',   // ivory/cream background
          warm: '#F5E9DC',      // warm cream
          card: '#FFFFFF',
        },
        sage: {
          DEFAULT: '#C9D2C8',   // pale sage-grey from manual confetti
          mist: '#E4E8E2',
        },

        // Legacy aliases — keep existing classes working
        gold: {
          DEFAULT: '#D17278',
          light: '#E8B7BB',
          dark: '#3F607A',
        },
        coral: {
          DEFAULT: '#D17278',
          soft: '#E8B7BB',
          deep: '#B85962',
        },
        olive: {
          DEFAULT: '#3F607A',
          muted: '#7D96AB',
        },
        ivory: {
          DEFAULT: '#FAF3EA',
          card: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#FAF3EA',
          card: '#FFFFFF',
          border: '#F5DCDF',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Montserrat', 'Georgia', 'serif'],
        script: ['"Quincho Script"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
