import * as React from "react";
import ReactDOM from "react-dom";
import Main from "../src/components/containers/Main/index";

//redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
