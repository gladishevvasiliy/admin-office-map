import { ROTATE_THING, CHANGE_COORDINATES_OF_THING } from "../res/constants";
import data from "../res/source.json";
import { AnyAction } from "redux";

const initialState: Array<Object> = data.things;

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ROTATE_THING: {
      console.log("ROTATE_THING");
      console.log(action.payload);
      return state;
    }
    case CHANGE_COORDINATES_OF_THING: {
      const { thingHTMLId, newX, newY } = action.payload;
      const movedObject = state.find(
        item => `table-${item.id}` === thingHTMLId
      );

      movedObject.coordinates = { x: newX, y: newY };
    }

    default: {
      return state;
    }
  }
};
