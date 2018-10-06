import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Void from "./Void";
import Logo from "./Logo";
import Id from "./Id";
import Contact from "./Contact";
import Resume from "./Resume";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Logo />
          <nav>
            <ul classNam>
              <li><NavLink exact to="/">main()</NavLink></li>
              <li><NavLink exact to="/id"><span>id()</span></NavLink></li>
              <li><NavLink exact to="/contact">contact()</NavLink></li>
            </ul>
            <div>
              <Route exact path="/" component={Void}/>
              <Route path="/id" component={Id}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/resume" component={Resume}/>
            </div>
          </nav>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
