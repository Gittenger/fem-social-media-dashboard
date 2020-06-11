const commonColors = {
  primaryGreen: "#1db489",
  primaryRed: "#dc414c",
  facebookBlue: "#198ff5",
  twitterBlue: "#1ca0f2",
  youtubeRed: "#c4032a",
  instagramGradient: "linear-gradient(to right, #fdc468,  #df4996)",
};

const layouts = {
  desktop: {
    contentWidth: "1200px",
  },
};

export const darkTheme = {
  colors: {
    ...commonColors,
    toggle: "linear-gradient(to right, #378fe6, #3eda82)",
    background:
      "linear-gradient(to bottom, #1f212e, #1f212e 25rem, #1e202a 1%, #1e202a)",
    backgroundGrad1: "#1f212e",
    backgroundGrad2: "#1e202a",
    cardBg: "#252a41",
    textSub: "#8b97c6",
    textMain: "#ffffff",
  },
  layout: {
    ...layouts,
  },
};

export const lightTheme = {
  colors: {
    ...commonColors,
    toggle: "#aeb3cb",
    background:
      "linear-gradient(to bottom, #f5f7ff, #f5f7ff 25rem, #ffffff 1%, #ffffff)",
    backgroundGrad1: "#f5f7ff",
    backgroundGrad2: "#ffffff",
    cardBg: "#f0f2fa",
    textSub: "#63687e",
    textMain: "#1e202a",
  },
  layout: {
    ...layouts,
  },
};
