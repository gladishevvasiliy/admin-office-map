import {
  ROTATE_THING,
  CHANGE_COORDINATES_OF_THING,
  REMOVE_THING,
  ADD_THING
} from "../res/constants";

// list actions
export const rotateThing = (thingId: Number) => ({
  type: ROTATE_THING,
  payload: thingId
});

export const addThing = (newThing: Object) => ({
  type: ADD_THING,
  payload: newThing
});

export const removeThing = (thingId: Number) => ({
  type: REMOVE_THING,
  payload: thingId
});

export const changePosition = (
  thingId: String,
  newX: Number,
  newY: Number
) => ({
  type: CHANGE_COORDINATES_OF_THING,
  payload: { thingId, newX, newY }
});
