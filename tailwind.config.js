/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      bgLayout: '#0068381A', 
    myGreen: '#e9fff5',
    greenly: '#95f1d5',
      deepBlue: '#060640',
      deepGreen: '#006838',
      myGray: '#828297',
      lightGreen: '#f5f5f8',
      myBrown: '#c17d4366',
      myBlack: '#31313C',
      textColor: '#1A191ECC',
      lightGrey: '#CCCCCC',
      },
      lineHeight: {
        '12' : '2rem',
        '14' : '4rem' ,
      },
    
      letterSpacing: {
        wide: '0.03em',
        wider: '0.08em',
      },
    },
  },
  plugins: [],
};
