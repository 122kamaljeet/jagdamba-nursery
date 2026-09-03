/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8F7F2",
        ink: "#1D2417",
        forest: "#1F3A20",
        grass: "#4CAF50",
        leaf: "#8BC34A",
        soil: "#7A5230",
        gold: "#E0A72E",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(31,58,32,0.25)",
        card: "0 12px 30px -18px rgba(31,58,32,0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floatY: "floatY 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
