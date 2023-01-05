/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        b: "url('/pieces/bb.png')",
        r: "url('/pieces/br.png')",
        n: "url('/pieces/bn.png')",
        k: "url('/pieces/bk.png')",
        q: "url('/pieces/bq.png')",
        p: "url('/pieces/bp.png')",
        B: "url('/pieces/wb.png')",
        R: "url('/pieces/wr.png')",
        N: "url('/pieces/wn.png')",
        K: "url('/pieces/wk.png')",
        Q: "url('/pieces/wq.png')",
        P: "url('/pieces/wp.png')",
      },
    },
  },
  plugins: [],
};
