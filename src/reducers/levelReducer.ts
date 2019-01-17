import {
  ROTATE_THING,
  CHANGE_COORDINATES_OF_THING,
  REMOVE_THING,
  ADD_THING,
  CHANGE_USER,
  CHANGE_OFFICE
} from "../res/constants";
import data from "../res/mapData.json";
import { AnyAction } from "redux";
import { isNil, clone } from "lodash";
import {
  addThingToLevel,
  changeUserOfThing,
  rotateSelectedThing,
  removeSelectedThing
} from "../utils/utilsForReducer";
const uuid = require("uuid");

// const initialState = data.mapData.levels[LEVEL];
const initialState = { levels: data.mapData.levels, currentOfficeNum: 2 };

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_THING: {
      return addThingToLevel(state, action.payload);
    }

    case CHANGE_USER: {
      return changeUserOfThing(state, action.payload);
    }

    case CHANGE_OFFICE: {
      const newOfficeNum = action.payload;
      return { ...state, currentOfficeNum: newOfficeNum };
    }

    case ROTATE_THING: {
      return rotateSelectedThing(state, action.payload);
    }

    case REMOVE_THING: {
      return removeSelectedThing(state, action.payload);
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
