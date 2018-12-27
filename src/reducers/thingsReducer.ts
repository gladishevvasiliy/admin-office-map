import { ROTATE_THING, CHANGE_COORDINATES_OF_THING } from "../res/constants";
import data from "../res/source.json";
import { AnyAction } from "redux";

const initialState: Array<Object> = data.things;

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ROTATE_THING: {
      const thingId = action.payload;
      const newThings = [...state];

      const rotatedThing = newThings.find(item => item.id === thingId);

      rotatedThing.position =
        rotatedThing.position === "vertical" ? "horisontal" : "vertical";
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
