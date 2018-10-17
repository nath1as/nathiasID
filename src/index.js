import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./normalize.css";
import "./index.css";
import {Helmet} from "react-helmet";

let ico = require("./favicon.ico");

ReactDOM.render(
  <div>
    <Helmet>
      <link rel="icon" href={ ico } />
    </Helmet>
    <Main />,
  </div>,
  document.getElementById("root")
);
