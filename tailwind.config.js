module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        neutral: 'var(--color-neutral)',
      },
    },
    container: {
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.75rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
