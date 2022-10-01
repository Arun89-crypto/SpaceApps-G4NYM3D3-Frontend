/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        acc_gray: "#3d3741",
        nav_bg:"#23192a",
        log_bt_br:"#B18FE3",
        log_bt_bg:"#5A4B74",
        chat_l_bg:"#403A43",
        mes_bg:"#2A252C",
        chat_bg:"#1C1026"
      },
    },
  },
};
