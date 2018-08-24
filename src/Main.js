import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Redirect,
} from "react-router-dom";
import Void from "./Void";
import Id from "./Id";
import Contact from "./Contact";
import Resume from "./Resume";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <nav className="nav">
          <ul>
            <li><NavLink exact to="/">main()</NavLink></li>
            <li><NavLink to="/id">id()</NavLink></li>
            <li><NavLink to="/contact">contact()</NavLink></li>
          </ul>
          <div>
            <Route exact path="/" component={Void}/>
            <Route path="/id" component={Id}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/resume" component={Resume}/>
          </div>
        </nav>
      </HashRouter>
    );
  }
}

export default Main;
