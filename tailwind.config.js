// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'meteor-effect': 'meteor 8s linear infinite',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(800px) translateX(200px)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
