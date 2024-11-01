/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily:{
      'courier_new': ['Courier Prime', 'monospace'],
      minecraft:['Tiny5', 'sans-serif'],
      baloo:['"Baloo Bhai 2"', 'sans-serif'],
      curs:['"Playwrite GB S"', 'sans-serif']
    },
    extend: {
      backdropBlur: {
        'custom': '8px',
      },
      aspectRatio: {
        '20/29': '20 / 29',
        '3/4' : '3 / 4',
      },
      colors:{
        'vsyellow': '#fac863' ,
        'vsskyblue': '#0484dc',
        'vscyan':'#5fb3b3',
        'vsblue':'#6699cc',
        'vspurple':'#c594c5',
        'vsgreen':'#99c794',
        'vsred':'#e15a60',
      },
    },
  },
  plugins: [],
}

