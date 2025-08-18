/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "2xl": "90rem",
      },
      fontSize: {
        "6xl": "4rem",
        xxs: "0.64rem",
        h1: [
          "36px",
          { lineHeight: "100%", letterSpacing: "0px", fontWeight: "400" },
        ],
        h2: [
          "16px",
          { lineHeight: "159%", letterSpacing: "0.06em", fontWeight: "400" },
        ],
        h3: [
          "36px",
          { lineHeight: "159%", letterSpacing: "1px", fontWeight: "400" },
        ],
        h4: [
          "20px",
          { lineHeight: "159%", letterSpacing: "2px", fontWeight: "500" },
        ],
        kicker: [
          "18px",
          { lineHeight: "159%", letterSpacing: "1px", fontWeight: "400" },
        ],
        p1: [
          "12px",
          { lineHeight: "175%", letterSpacing: "0.04em", fontWeight: "400" },
        ],
        p2: [
          "12px",
          { lineHeight: "175%", letterSpacing: "0.04em", fontWeight: "400" },
        ],
        p3: [
          "14px",
          { lineHeight: "175%", letterSpacing: "0.04em", fontWeight: "400" },
        ],
        p4: [
          "18px",
          { lineHeight: "159%", letterSpacing: "-0.03em", fontWeight: "400" },
        ],
        footer1: [
          "14px",
          { lineHeight: "normal", letterSpacing: "1.28px", fontWeight: "400" },
        ],
        footer2: [
          "14px",
          { lineHeight: "normal", letterSpacing: "1.28px", fontWeight: "400" },
        ],
      },
      colors: {
        orange: "#ff6700",
        link: "#0b0080",
        secondaryLight2: "#A8AFB3",
        secondaryLight4: "#525A60",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      maxWidth: {
        main: "1800px",
      },
    },
  },
  plugins: [],
};
