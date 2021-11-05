module.exports = {
  mode: 'jit',
  purge: [
    '*.html',
    './src/css/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'viga': ['Viga', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
      },  
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
