/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        fourty: "40px",
      },
      width: {
        heroButtonMobileWidth: "175px",
        heroButtonDesktopWidth: "186px",
        tableDesktopWidth: "72%",
        bodyRightSecDesktop: "80%",
        bodyLeftSecDesktop: "20%",
        bodyRightSecMobile: "70%",
        bodyLeftSecMobile: "30%",
        fullWidth: "100%",
        logoDesktopWidth: "240.19px",
        logoMobileWidth: "168.19px",
        rightSecButton: "247px",
      },
      height: {
        logoDesktopheight: "48px",
        bodyLeft: "80vh",
      },
      padding: {
        heroHeadingMobile: "52px",
        bodyY: "122px",
        navMobile: "26px",
      },
      margin: {
        tableMobile: "-32px",
        searchIcon: "-4",
        heroBtnIcon: "17px",
        heroBtnIconA: "9px",
        heroBtnIcon1: "7px",
        heroBtnIcon2: "7px",
      },
      fontSize: {
        xxl: "64px",
        fourty: "40px",
        thirtyTwo: "32px;",
        twentyFour: "24px;",
        heroTextDesktop: "28px",
        heroTextMobile: "22px",
      },
      lineHeight: {
        thirtyThree: "33px",
        twentyEight: "28px",
        twentyFour: "24px",
        thirtySix: "36px",
        rightHeadingsDt: "48px;",
        topHeadingMobile: "60px",
        heroHeadingDesktop: "88px",
        heroText: "42px",
      },
      colors: {
        background: "#020518",
        headingsColor: "#ffffff",
        textColor: "#CCCCCC",
        tableHBorder: "#CECECE",
        darkGreen: "#0AA613",
        gradient1: "#53EB45",
        gradient1b: "#133706",
        lightGreen: "#93DA97",
        parrotGreen: "#93DA97",
        tableBackground: "#EEEEEE",
        footerBorder: "#273246",
        topApplyNow: "transparent",
      },
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        dmSans: "'DM Sans', sans-serif",
        notoSans: "'Noto Sans', sans-serif",
        roboto: "'Roboto', sans-serif",
        // raleway: ["Raleway", "sans-serif"],
        // notoSans: ["Noto Sans", "sans-serif"],
      },
      screens: {
        xs: "400px",
        // => @media (min-width: 640px) { ... }
      },
      animation: {
        border: "border 4s ease infinite",
      },
      minWidth: {
        locale: "24px",
      },
      minHeight: {
        bodyLeft: "1000px",
        heroHeight: "669px",
      },
      maxWidth: {
        heroBtnIcon: "11px",
      },
      maxHeight: {
        heroBtnIcon: "14px",
      },
    },
  },
  plugins: [],
};
