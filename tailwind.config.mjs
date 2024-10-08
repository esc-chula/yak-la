/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        chathai: "#FFAF75",
        intania: "#651616",
        user: "#FF8B74",
        beaver: "#D7925A",
        bull: "#95BDEC",
        engine: "#E1FFFE",
        darkness: "#6932CA",
        intania: "#651616",
        base: {
          "01": "#ECD9BE",
          "02": "#F2EDD8",
          "03": "#F9EDDC",
          "04": "#E3E4E8",
          "05": "#E7EEF1",
          "06": "#CCCCCC",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "zoom-in": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-in-out",
        "zoom-in": "zoom-in 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
