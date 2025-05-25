/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'r': ['r', 'sans-serif'], // Assuming 'r' is the font-family name
      },
      colors: {
        'bg-dark': 'var(--color-bg-dark)',
        'bg-light': 'var(--color-bg-light)',
        'lazy': 'var(--color-lazy)',
        // You might want to define specific shades if you use these colors elsewhere
        // based on how they are used in your components.
      },
      opacity: {
        'border': 'var(--opacity-border)',
        'border-hover': 'var(--opacity-border-hover)',
      },
      transitionProperty: {
        'opacity-border': 'opacity',
      },
      transitionDuration: {
        'border': 'var(--opacity-border-transition)',
        800: '800ms', // Add if not already present
        600: '600ms', // Add if not already present
        1000: '1000ms', // Add if not already present
      },
      keyframes: {
        hs: {
          '0%': { transform: 'translate3d(0,-101%,0)' },
          '40%': { transform: 'translate3d(0,0,0)' },
          '80%, 100%': { transform: 'translate3d(0,101%,0)' },
        },
        formMsgA: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        hs: 'hs var(--animation-duration, 3s) infinite', // You might want to add a default duration
        'form-msg-a': 'formMsgA var(--animation-duration, 1s) forwards', // You might want to add a default duration
      },
      // You can add more custom properties here if needed,
      // but many are used for sizing and layout, which Tailwind handles differently.
      // For those, you'll likely use Tailwind's grid system, spacing, etc.
    },
  },
  plugins: [],
}