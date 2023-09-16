import { colors } from "./constants";
import { debugButton, line, svg, dots, labels } from "./elements";
import { handleDebugButtonClick } from "./handlers";
import { updateAnimation } from "./helpers";

/* ========================================
  elements setup
======================================== */

document.body.style.backgroundColor = colors.background;
[line, ...dots, ...labels].forEach((element) => svg.append(element));
document.body.append(svg);

/* ========================================
  events setup
======================================== */

debugButton.addEventListener("click", handleDebugButtonClick);

/* ========================================
  animation setup
======================================== */

updateAnimation();
