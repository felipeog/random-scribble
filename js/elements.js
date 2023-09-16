import { colors, numberOfCoordinates, size } from "./constants";
import { createSvgElement } from "./helpers";

export const debugButton = document.querySelector("#debug-button");

export const svg = createSvgElement("svg");
svg.setAttribute("viewBox", `0 0 ${size.width} ${size.height}`);
svg.style.display = "block";
svg.style.width = "100%";
svg.style.height = "100vh";

export const line = createSvgElement("path");
line.setAttribute("fill", "none");
line.setAttribute("stroke", colors.foreground);
line.setAttribute("stroke-width", 1);

export const dots = Array.from({ length: numberOfCoordinates }).map(() => {
  const circle = createSvgElement("circle");

  circle.setAttribute("fill", colors.background);
  circle.setAttribute("stroke", colors.foreground);
  circle.setAttribute("r", 3);
  circle.setAttribute("cx", 0);
  circle.setAttribute("cy", 0);

  return circle;
});

export const labels = Array.from({ length: numberOfCoordinates }).map(() => {
  const text = createSvgElement("text");

  text.setAttribute("fill", colors.foreground);

  text.style.fontFamily = "sans-serif";
  text.style.fontSize = "12px";
  text.style.textAnchor = "middle";

  return text;
});
