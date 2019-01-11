import {
  ROTATE_THING,
  CHANGE_COORDINATES_OF_THING,
  REMOVE_THING,
  ADD_THING,
  CHANGE_USER
} from "../res/constants";
import data from "../res/mapData.json";
import { AnyAction } from "redux";
import { isNil } from "lodash";

const NOT_FOUND_ERROR = "Error. Not found item by id.";

const initialState = data.mapData.levels[2].things;

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_THING: {
      const newThing = action.payload;
      const newThings = [...state];
      const newThingId = newThings[newThings.length - 1].id + 1;
      newThing.id = newThingId;
      newThings.push(newThing);
      return newThings;
    }

    case CHANGE_USER: {
      const { thingId, userId } = action.payload;
      console.log(state);
      const newState = state.slice(0);
      const tableForChanging = newState.find(table => table.id === thingId);
      tableForChanging.userId = userId;
      return newState;
    }

    case ROTATE_THING: {
      const thingId = action.payload;
      const newThings = [...state];

      const rotatedThing = newThings.find(item => item.id === thingId);
      if (!isNil(rotatedThing)) {
        rotatedThing.position =
          rotatedThing.position === "vertical" ? "horizontal" : "vertical";
        return newThings;
      } else {
        // if not found item by id, it is error
        console.log(NOT_FOUND_ERROR);
        return state;
      }
    }

    case REMOVE_THING: {
      const thingId = action.payload;
      const newThings = [...state];

      const removingThing = newThings.find(item => item.id === thingId);
      const indexOfRemovungThing = newThings.indexOf(removingThing);
      newThings.splice(indexOfRemovungThing, 1);
      return newThings;
    }

    case CHANGE_COORDINATES_OF_THING: {
      const { thingId, newX, newY } = action.payload;
      const movedThing = state.find(item => item.id === thingId);
      if (!isNil(movedThing)) {
        movedThing.coordinates = { x: newX, y: newY };
      } else {
        // if not found item by id, it is error
        console.log(NOT_FOUND_ERROR);
      }

      return state;
    }

    default: {
      return state;
    }
  }
};
