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
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
      <title>nathias ID</title>

      <link rel="icon" href={ ico } />
    </Helmet>
    <Main />,
  </div>,
  document.getElementById("root")
);
