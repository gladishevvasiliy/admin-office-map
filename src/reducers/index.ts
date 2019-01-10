import { combineReducers } from "redux";
import thingsReducer from "./thingsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  things: thingsReducer,
  users: usersReducer
});

export default rootReducer;
