/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'alice-blue': '#F0F8FF',
        'midnight-green': '#0A4F5B',
        'keppel': '#63B9A9',
        'rich-black': '#003945',
        'pigment-green': '#4CAF50'

      },
      spacing : {
        '30': '7.5rem',
        '40': '10rem',
        '50': '12.5rem'
      },
      fontFamily: {
        'primary': ['Roboto'],
        'emphasis': ['Jost']
      },
      fontSize: {
        'h1': '3rem',
      },
      backgroundImage: {
        'wallpaper-login-desktop': "url('/forest-wallpaper-pc.svg')",
        'blob-detail': "url('/blob-detail.svg')",
      },
      boxShadow: {
        'google': '1px 2px 6px #00000057'
      }
    },
  },
  plugins: [],
}
