import React from "react";
import ReactDOM from "react-dom";
import {FetchPosters} from "./components/FetchPostersV2";

const App = () => {
  return <FetchPosters/>;
};
ReactDOM.render(<App />, document.querySelector("#root"));
