import * as React from "react";
import ReactDOM from "react-dom";
import Main from "../src/components/containers/Main/index";

const App = () => (
  <React.Fragment>
    <Main />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
