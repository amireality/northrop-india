/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        'scroll-reverse': 'scroll-reverse 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 1.5rem))' }, // -50% of content and gap
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(calc(-50% - 1.5rem))' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
