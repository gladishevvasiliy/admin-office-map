import {
  ROTATE_THING,
  CHANGE_COORDINATES_OF_THING,
  REMOVE_THING,
  ADD_THING
} from "../res/constants";
import data from "../res/source.json";
import { AnyAction } from "redux";

const initialState: Array<Object> = data.things;

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
    case ROTATE_THING: {
      const thingId = action.payload;
      const newThings = [...state];

      const rotatedThing = newThings.find(item => item.id === thingId);

      rotatedThing.position =
        rotatedThing.position === "vertical" ? "horizontal" : "vertical";
      return newThings;
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

      movedThing.coordinates = { x: newX, y: newY };
      return state;
    }

    default: {
      return state;
    }
  }
};
