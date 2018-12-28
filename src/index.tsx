import * as React from "react";
import ReactDOM from "react-dom";
import Main from "../src/components/containers/Main/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt, faUndo, faIgloo } from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);
library.add(faTrashAlt);
library.add(faUndo);
library.add(fas);
// library.add(faUndo);

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
