module.exports = {
  content: [
    './index.html',
    './app.jsx',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxHeight: {
        48: '12rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
