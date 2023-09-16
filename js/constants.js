export const numberOfCoordinates = 5;

export const animationDurationInSeconds = 10;

export const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const prefersDarkScheme =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const colors = {
  background: prefersDarkScheme ? "black" : "white",
  foreground: prefersDarkScheme ? "white" : "black",
};
