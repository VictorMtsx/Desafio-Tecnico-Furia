/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          
        }
      },
    },
    plugins: [],
    server: {
      open: true,
      host: '127.0.0.1',
      port: 5173    
    },
  }