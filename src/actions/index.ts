import { ROTATE_THING, CHANGE_COORDINATES_OF_THING } from "../res/constants";

// list actions
export const rotateThing = (thingId: Number) => ({
  type: ROTATE_THING,
  payload: thingId
});

export const changePosition = (
  thingHTMLId: String,
  newX: Number,
  newY: Number
) => ({
  type: CHANGE_COORDINATES_OF_THING,
  payload: { thingHTMLId, newX, newY }
});
