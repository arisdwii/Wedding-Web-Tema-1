/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "header-1": "url('/dist/image/slide/slide-1.jpg')",
        "header-2": "url('/dist/image/slide/slide-2.jpg')",
        "header-3": "url('/dist/image/slide/slide-3.jpg')",
      },
      colors: {
        coklat: "#BF8F01",
        putih: "#F3F2F1",
        abu: "#555555",
        abuLight: "#6F6F6F",
      },
      fontFamily: {
        body: ['"Inter", sans-serif'],
        title: ['"Playfair Display", serif'],
        name: ['"Great Vibes", cursive'],
      },
      screens: {
        sm: "400px",
      },
      keyframes: {
        fadeInTop: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        slideShow: {
          "0%": {
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/dist/image/gallery/photo-1.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
          },
          "20%": {
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/dist/image/gallery/photo-2.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
          },
          "40%": {
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/dist/image/gallery/photo-3.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
          },
          "60%": {
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/dist/image/gallery/photo-4.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
          },
          "80%": {
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/dist/image/gallery/photo-5.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
          },
          "100%": {
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/dist/image/gallery/photo-6.png)",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
          },
        },
      },
      animation: {
        fadeInTop: "fadeInTop 1s ease forwards",
        slide: "slideShow 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
