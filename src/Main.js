import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Id from "./Id";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Nathias</h1>
        <ul className="header">
          <li><a href="/">main()</a></li>
          <li><a href="/id">id()</a></li>
          <li><a href="/contact">contact()</a></li>
        </ul>
        <div className="content">

        </div>
      </div>
    );
  }
}
 
export default Main;
