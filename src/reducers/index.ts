import { combineReducers } from "redux";
import thingsReducer from "./thingsReducer";

const rootReducer = combineReducers({
  things: thingsReducer
});

export default rootReducer;
