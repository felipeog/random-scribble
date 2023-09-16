import { createRandomCoordinates } from "./helpers";

export const state = {
  coordinates: {
    previous: "",
    current: createRandomCoordinates(),
  },
};
