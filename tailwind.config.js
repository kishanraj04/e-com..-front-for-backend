/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        loader: "lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite",
      },
      keyframes: {
        "lds-facebook": {
          "0%": { top: "8px", height: "64px" },
          "50%, 100%": { top: "24px", height: "32px" },
        },
      },
    },
  },
  plugins: [],
};













// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

