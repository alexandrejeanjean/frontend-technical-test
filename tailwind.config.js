// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
    screens: {
      xsd: { max: "399px" },
      xs: "400px",
      smd: { max: "639px" },
      sm: "640px",
      mdd: { max: "767px" },
      md: "768px",
      lgd: { max: "1023px" },
      lg: "1024px",
      xld: { max: "1169px" },
      xl: "1170px",
      '2xld': { max: '1439px' },
      '2xl': '1440px',
      print: { raw: "print" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
