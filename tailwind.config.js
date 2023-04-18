/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      violet: {
        100: "hsla(241, 71%, 46%, 0)",
        400: "hsla(252, 100%, 67%, 1)",
        500: "hsla(252, 100%, 63%, 1)",
        600: "hsla(241, 81%, 54%, 1)",
        700: "hsl(241,72%,46%)",
        800: "hsla(256, 71%, 46%, 1)",
        900: "hsla(223, 30%, 27%, 1)",
      },
      neutral: {
        100: "hsl(221, 100%, 96%)",
        300: "hsl(241, 100%, 89%)",
        600: "hsl(224, 30%, 27%)",
      },
      white: "#ffffff",
      opaque: {
        violet: "hsla(241, 71%, 46%, 0)",
        white: "hsla(0, 0%, 100%, 0.95)",
      },
      category: {
        reaction: "#FF5555",
        memory: "#FFB21E",
        verbal: "#00BB8F",
        visual: "#1125D6",
      },
    },
    fontFamily: {
      body: ["Hanken Grotesk", "cursive"],
    },
    extend: {
      borderRadius: {
        50: "0.25rem", // 4px
        100: "0.5rem", // 8px
        200: "0.875rem", // 12px
        300: "1rem", // 16px
        350: "1.125rem", // 18px
        400: "1.5rem", // 24px
        500: "2rem", // 32px
        600: "2.5rem", // 40px
        700: "2.875rem", // 46px
        800: "3.5rem", // 56px
      },
      fontSize: {
        "16-18": "var(--16-18)",
        "18-24": "var(--18-24)",
        "24-32": "var(--24-32)",
        "56-72": "var(--56-72)",
      },
      spacing: {
        50: "0.25rem", // 4px
        100: "0.5rem", // 8px
        200: "0.875rem", // 12px
        300: "1rem", // 16px
        350: "1.125rem", // 18px
        400: "1.5rem", // 24px
        500: "2rem", // 32px
        600: "2.5rem", // 40px
        700: "2.875rem", // 46px
        800: "3.5rem", // 56px
      },
    },
  },
  plugins: [],
};
