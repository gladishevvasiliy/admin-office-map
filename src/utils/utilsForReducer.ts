import { IlevelReducer, ThingType, LOL } from "../utils/Models";

const NOT_FOUND_ERROR = "Error. Not found item by id.";

const uuid = require("uuid");
import { isNil, clone } from "lodash";

export const addThingToLevel = (state, thing) => {
  thing.id = uuid();
  const currentLevel = state.levels[state.currentOfficeNum];
  const { things } = currentLevel;
  const updatedThings = [...things, thing];
  currentLevel.things = updatedThings;
  return {
    ...state,
    levels: state.levels.map(level =>
      level.sortId === currentLevel.sortId ? currentLevel : level
    )
  };
};

export const changeUserOfThing = (state, dataOfNewUser) => {
  const { thingId, userId } = dataOfNewUser;
  const newState = clone(state);
  const currentLevel = newState.levels[state.currentOfficeNum];
  const tableForChanging = currentLevel.things.find(
    table => table.id === thingId
  );
  tableForChanging.userId = userId;
  return newState;
};

export const rotateSelectedThing = (state, thingId) => {
  const newState = clone(state);
  const currentLevel = newState.levels[state.currentOfficeNum];
  const rotatedThing = currentLevel.things.find(item => item.id === thingId);
  if (!isNil(rotatedThing)) {
    rotatedThing.position =
      rotatedThing.position === "vertical" ? "horizontal" : "vertical";
    return newState;
  } else {
    // if not found item by id, it is error
    console.log(NOT_FOUND_ERROR);
    return state;
  }
};

export const removeSelectedThing = (state, thingId) => {
  const newState = clone(state);
  const currentLevel = newState.levels[state.currentOfficeNum];
  const removingThing = currentLevel.things.find(item => item.id === thingId);
  const indexOfRemovungThing = currentLevel.things.indexOf(removingThing);
  currentLevel.things.splice(indexOfRemovungThing, 1);
  return newState;
};

export const setCoordinatesOfThing = (
  state: LOL,
  thingId: string,
  newX: number,
  newY: number
) => {
  const movedThing = state.things.find(
    (item: ThingType) => item.id === thingId
  );
  if (!isNil(movedThing)) {
    movedThing.coordinates = { x: newX, y: newY };
  } else {
    // if not found item by id, it is error
    console.log(NOT_FOUND_ERROR);
  }
  return state;
};
