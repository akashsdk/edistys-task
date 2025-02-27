/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        
      },
      screens: {
        'mobile': '640px',
        // => @media (min-width: 640px) { ... }
  
        'tablet': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'laptop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
    plugins: [],
  }