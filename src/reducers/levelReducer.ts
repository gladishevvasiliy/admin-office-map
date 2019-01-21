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
import {
  addThingToLevel,
  changeUserOfThing,
  rotateSelectedThing,
  removeSelectedThing,
  setCoordinatesOfThing
} from "../utils/utilsForReducer";

// const initialState = data.mapData.levels[LEVEL];
const initialState = { levels: data.mapData.levels, currentOfficeNum: 0 };

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
      setCoordinatesOfThing(state, thingId, newX, newY);
    }

    default: {
      return state;
    }
  }
};
