import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./normalize.css";
import "./index.css";
import Favicon from 'react-favicon';

ReactDOM.render(
  <div>
    <Favicon url="./favicon.ico" />
    <Main />,
  </div>,
  document.getElementById("root")
);
