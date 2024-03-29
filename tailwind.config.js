/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1350px',
        'xl':'1200px'
      },

      fontFamily: {
        roboto: "'Roboto', sans-serif",
        dm: "'DM Sans', sans-serif",
        times: [ 'Times', 'Times New Roman', 'serif'],
        zuume: ['Zuume', 'sans-serif'],
        aeonic:[ 'Aeonic', "arial"],
        helvetica: ['Helvetica Now Display', 'sans-serif']

      },
      animation: {
        "loop-scroll": 'loop-scroll 20s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },

    },
  },
  plugins: [],
}
