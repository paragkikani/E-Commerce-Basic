/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
import React from "react";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      chakra: ["Chakra Petch", "cursive"],
    },
  },
  plugins: [],
});

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
