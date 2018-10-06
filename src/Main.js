import React, { Component } from "react";
import {
  HashRouter,
} from "react-router-dom";
import Menu from "./Menu";
// import Location from "./Location";


class Main extends Component {

  render() {
    return (
      <HashRouter>
        <Menu />
      </HashRouter>
    );
  }
} 

export default Main;
