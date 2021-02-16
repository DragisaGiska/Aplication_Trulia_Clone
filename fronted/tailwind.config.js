module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        navibtn: "var(--color-navibtn)",
      singupbtn: "var(--color-singupbtn)",
      singupbtnborder: "var(--color-singupbtnborder)",
      singupbtnhovercolor: "var(--color-singupbtnhovercolor)",
      bgsingup: "var(--color-bgsingup)",
      menucenter: "var(--color-menucenter)",
      search: "var(--color-search)",
      singupbtnhovercolor:"var(--color-singupbtnhovercolor)"
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '400px',
       },
      backgroundImage: theme => ({
        'hero-pattern': "url('https://www.trulia.com/javascript/moana//_next/static/assets/extraLarge-b7802fbaf681549e97c1ba3229f039d0.jpg')",

       })
    },
  },
  variants: {

    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}