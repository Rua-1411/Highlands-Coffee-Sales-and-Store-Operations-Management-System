/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        highland: { red: '#B22830', dark: '#8B0000', gold: '#E5A645', cream: '#FAF3E0' }
      },
      boxShadow: { soft: '0 18px 50px rgba(28, 30, 32, .10)' }
    }
  },
  plugins: []
}
