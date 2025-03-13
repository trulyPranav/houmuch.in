/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-dark": "#171519",
      },
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      courgette: ["var(--font-courgette)", "sans-serif"]
    },
    fontWeight: {
      hairline: 10,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 900,
      black: 900,
    },
  },
  plugins: [],
};
