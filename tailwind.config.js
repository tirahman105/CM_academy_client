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
        'mobile': {'min':'0px', 'max':'767px'}, // Mobile Phones
        'tablet': '768px',           // Tablets
        'laptop': '1000px',          // Laptops
        'desktop': '1280px',         // Desktop Monitors
        'large-desktop': '1920px',   // Large Desktop Monitors
        'xl-desktop': '2560px',      // Extra Large Desktop Monitors
        '2xl-desktop': '3440px',     // 2X Large Desktop Monitors
        '3xl-desktop': '3840px',     // 3X Large Desktop Monitors
      },
    },
  },
  plugins: [require("daisyui")],
}
