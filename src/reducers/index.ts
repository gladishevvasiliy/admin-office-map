import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  levelData: levelReducer,
  users: usersReducer
});

export default rootReducer;
