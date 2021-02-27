module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'light-bg': '#FBFBFB',
      orange: '#FF9933'
    }),
    textColor: {
      orange: '#FF9933',
      white: 'white',
      heart: '#DC143C'
    },
    fontFamily: { raleway: ['raleway', 'sans-serif'] }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
