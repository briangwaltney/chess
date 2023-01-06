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
      colors: {
        warning: {
          50: "#FFFBEA",
          100: "#FFF3C4",
          200: "#FCE588",
          300: "#FADB5F",
          400: "#F7C948",
          500: "#F0B429",
          600: "#DE911D",
          700: "#CB6E17",
          800: "#B44D12",
          900: "#8D2B0B",
        },
        danger: {
          900: "#610316",
          800: "#8A041A",
          700: "#AB091E",
          600: "#CF1124",
          500: "#E12D39",
          400: "#EF4E4E",
          300: "#F86A6A",
          200: "#FF9B9B",
          100: "#FFBDBD",
          50: "#FFE3E3",
        },

        tertiary: {
          50: "#FFE8D9",
          100: "#FFD0B5",
          200: "#FFB088",
          300: "#FF9466",
          400: "#F9703E",
          500: "#F35627",
          600: "#DE3A11",
          700: "#C52707",
          800: "#AD1D07",
          900: "#841003",
        },
        secondary: {
          50: "#E1FCF8",
          100: "#C1FEF6",
          200: "#92FDF2",
          300: "#62F4EB",
          400: "#3AE7E1",
          500: "#1CD4D4",
          600: "#0FB5BA",
          700: "#099AA4",
          800: "#07818F",
          900: "#05606E",
        },
        base: {
          50: "#F5F7FA",
          100: "#E4E7EB",
          200: "#CBD2D9",
          300: "#9AA5B1",
          400: "#7B8794",
          500: "#616E7C",
          600: "#52606D",
          700: "#3E4C59",
          800: "#323F4B",
          900: "#1F2933",
        },
        primary: {
          50: "#E6F6FF",
          100: "#BAE3FF",
          200: "#7CC4FA",
          300: "#47A3F3",
          400: "#2186EB",
          500: "#0967D2",
          600: "#0552B5",
          700: "#03449E",
          800: "#01337D",
          900: "#002159",
        },
      },
    },
  },
  plugins: [],
};
