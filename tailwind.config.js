// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {

//     extend: {

//       fontFamily: {
//         Montserrat: ['Montserrat', 'sans-serif'],
//         LeagueSpartan: ['League Spartan', 'sans-serif'],
//         EBGaramond: ['EB Garamond', 'serif'],
//         PTSans: ['PT Sans', 'sans-serif'],
//         Raleway: ['Raleway', 'sans-serif'],
//         JosefinSans: ['Josefin Sans', 'sans-serif'],
//         Lexend: ['Lexend', 'sans-serif'],
//         TitilliumWeb: ['Titillium Web', 'sans-serif'],
//         MontserratAlternates: ['Montserrat Alternates', 'sans-serif'],
//         Pacifico: ['Pacifico', 'cursive'],
//         Audiowide: ['Audiowide', 'cursive'],
//         BlackOpsOne: ['Black Ops One', 'cursive'],
//         BrunoAceSC: ['Bruno Ace SC', 'cursive'],
//         Bungee: ['Bungee', 'cursive'],
//         Monoton: ['Monoton', 'cursive'],
//         Roboto: ['Roboto', 'sans-serif'],
//         Poppins: ['Poppins', 'sans-serif'],
//         Jost: ['Jost', 'sans-serif']
      




//       },
//     }
//   },
//   plugins: [require("daisyui")],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        LeagueSpartan: ['League Spartan', 'sans-serif'],
        EBGaramond: ['EB Garamond', 'serif'],
        PTSans: ['PT Sans', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        JosefinSans: ['Josefin Sans', 'sans-serif'],
        Lexend: ['Lexend', 'sans-serif'],
        TitilliumWeb: ['Titillium Web', 'sans-serif'],
        MontserratAlternates: ['Montserrat Alternates', 'sans-serif'],
        Pacifico: ['Pacifico', 'cursive'],
        Audiowide: ['Audiowide', 'cursive'],
        BlackOpsOne: ['Black Ops One', 'cursive'],
        BrunoAceSC: ['Bruno Ace SC', 'cursive'],
        Bungee: ['Bungee', 'cursive'],
        Monoton: ['Monoton', 'cursive'],
        Roboto: ['Roboto', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Jost: ['Jost', 'sans-serif']
      },
      screens: {
        'sm': '576px',
        'md1': '700px',
        'md2': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'tablet': '640px',   
        'laptop': '1024px',   
        'desktop': '1440px', 
      },
    },
  },
  plugins: [require("daisyui")],
}
