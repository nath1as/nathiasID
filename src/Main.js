import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Menu from "./Menu/Menu";
import Logo from "./Nathias/Nathias";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Logo />
          <Menu />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
