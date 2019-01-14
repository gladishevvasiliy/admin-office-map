import {
  ROTATE_THING,
  CHANGE_COORDINATES_OF_THING,
  REMOVE_THING,
  ADD_THING,
  CHANGE_USER
} from "../res/constants";
import data from "../res/mapData.json";
import { AnyAction } from "redux";
import { isNil, clone, isEmpty } from "lodash";
import { Level, User } from "../utils/Models";

const NOT_FOUND_ERROR = "Error. Not found item by id.";

const LEVEL = 2;

const initialState = data.mapData.levels[LEVEL];

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_THING: {
      const newThing = action.payload;
      const newState = clone(state);
      console.log(isEmpty(newState.things));
      const newThingId = isEmpty(newState.things)
        ? 0
        : newState.things[newState.things.length - 1].id + 1;
      newThing.id = newThingId;
      newState.things.push(newThing);
      return newState;
    }

    case CHANGE_USER: {
      const { thingId, userId } = action.payload;
      const newState = clone(state);
      const tableForChanging = newState.things.find(
        table => table.id === thingId
      );
      tableForChanging.userId = userId;
      return newState;
    }

    case ROTATE_THING: {
      const thingId = action.payload;
      const newState = clone(state);

      const rotatedThing = newState.things.find(item => item.id === thingId);
      if (!isNil(rotatedThing)) {
        rotatedThing.position =
          rotatedThing.position === "vertical" ? "horizontal" : "vertical";
        return newState;
      } else {
        // if not found item by id, it is error
        console.log(NOT_FOUND_ERROR);
        return state;
      }
    }

    case REMOVE_THING: {
      const thingId = action.payload;
      const newState = clone(state);

      const removingThing = newState.things.find(item => item.id === thingId);
      const indexOfRemovungThing = newState.things.indexOf(removingThing);
      newState.things.splice(indexOfRemovungThing, 1);
      return newState;
    }

    case CHANGE_COORDINATES_OF_THING: {
      const { thingId, newX, newY } = action.payload;
      const movedThing = state.things.find(item => item.id === thingId);
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
