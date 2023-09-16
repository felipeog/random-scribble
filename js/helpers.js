import gsap from "gsap";

import {
  animationDurationInSeconds,
  numberOfCoordinates,
  size,
} from "./constants";
import { dots, labels, line } from "./elements";
import { state } from "./state";

export function createSvgElement(element) {
  return document.createElementNS("http://www.w3.org/2000/svg", element);
}

export function createRandomCoordinates() {
  return Array.from({ length: numberOfCoordinates }).map(() => {
    const xRange = size.width * 0.25;
    const yRange = size.height * 0.25;
    const xOffset = size.width * 0.5 - xRange * 0.5;
    const yOffset = size.height * 0.5 - yRange * 0.5;
    const x = Math.random() * xRange + xOffset;
    const y = Math.random() * yRange + yOffset;

    return [x, y];
  });
}

export function getPathDAttribute(coordinates) {
  const dStart = `M0,0`; // starts at top left
  const dMiddle = coordinates.reduce((accumulator, current) => {
    const [x, y] = current;

    return accumulator + `T${x},${y}`;
  }, "");
  const dEnd = `T${size.width},${size.height}`; // ends at bottom right

  return `${dStart}${dMiddle}${dEnd}`;
}

export function updateAnimation() {
  state.coordinates.previous = structuredClone(state.coordinates.current);
  state.coordinates.current = createRandomCoordinates();

  // line
  const from = getPathDAttribute(state.coordinates.previous);
  const to = getPathDAttribute(state.coordinates.current);

  gsap.fromTo(
    line,
    {
      attr: { d: from },
    },
    {
      attr: { d: to },
      duration: animationDurationInSeconds,
      ease: "power1.inOut",
      onComplete: updateAnimation,
    }
  );

  // dots
  dots.forEach((dot, index) => {
    const [previousX, previousY] = state.coordinates.previous[index];
    const [currentX, currentY] = state.coordinates.current[index];

    gsap.fromTo(
      dot,
      {
        attr: { cx: previousX, cy: previousY },
      },
      {
        attr: { cx: currentX, cy: currentY },
        duration: animationDurationInSeconds,
        ease: "power1.inOut",
        onUpdate() {
          const target = this.targets()[0];

          updateLabel(target, index);
        },
      }
    );
  });
}

export function updateLabel(target, index) {
  const label = labels[index];
  const x = gsap.getProperty(target, "cx");
  const y = gsap.getProperty(target, "cy");

  label.setAttribute("x", x);
  label.setAttribute("y", y + 16);

  label.textContent = `${index + 1}: ${Math.round(x)}, ${Math.round(y)}`;
}
