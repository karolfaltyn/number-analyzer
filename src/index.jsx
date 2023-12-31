import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

//FIXME: CHANGE RENDER METHOD TO createRoot (REACT 18)
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
