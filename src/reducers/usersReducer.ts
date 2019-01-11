// import { CHANGE_USER } from "../res/constants";
import mapData from "../res/mapData.json";
import { AnyAction } from "redux";

const initialState = mapData.mapData.levels[2].users;

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    // case CHANGE_USER: {
    //   console.log(action.payload);
    // }

    default: {
      return state;
    }
  }
};
