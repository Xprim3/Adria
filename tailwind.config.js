/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pizzeria Adria Brand Colors
        primary: {
          red: '#A80002',      // Main accent red
          dark: '#220000',     // Dark text
          banner: '#BF0F0A',   // Banner red
          text: '#8B3131',     // Text red
          footer: '#C53005',   // Footer link
        },
        background: {
          cream: '#FAF3ED',    // Warm beige background
        }
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Trebuchet MS"', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['"Arial Black"', 'Arial', 'sans-serif'],
        restaurant: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        italiana: ['Italiana', 'serif'],
        italianno: ['Italianno', 'cursive'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}

