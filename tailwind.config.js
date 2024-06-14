/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-800': {'max': '800px'},
      },
      colors: {
        'ef4444': '#ef4444',
        'e2e8f0': '#e2e8f0',
        'a4adbb': '#a4adbb',
      },
      width: {
        '500px': '500px',
        '50px': '50px',
      },
      height: {
        '500px': '500px',
        '60px': '60px',
      },
      transformOrigin: {
        'origin-center2x': 'center center',
      },
    },
  },
  plugins: [],
}
