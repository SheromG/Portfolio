/** @type {import('tailwindcss').Config} */
export default 
{
  content: 
  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
  {
    extend: 
    {
      colors:
      {
        primary: '#4d3686',
        secondary:'#715dbd',
        tertiary: '#c7b3ff'
      },
      fontFamily: 
      {
        'abel': ['Abel', 'sans-serif'],
      },
    },
  },
  plugins: [],
}