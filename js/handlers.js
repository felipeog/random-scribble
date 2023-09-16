import { dots, labels } from "./elements";

export function handleDebugButtonClick() {
  [...dots, ...labels].forEach((element) => {
    element.classList.toggle("hide");
  });
}
