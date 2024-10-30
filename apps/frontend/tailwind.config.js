/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily:{
      'courier_new': ['Courier Prime', 'monospace'],
    },
    extend: {
      

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

