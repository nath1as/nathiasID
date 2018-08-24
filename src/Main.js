import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Id from "./Id";
import Contact from "./Contact";
import Blog from "./Blog";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <nav>
          <ul>
            <li><NavLink exact to="/">main()</NavLink></li>
            <li><NavLink to="/id">id()</NavLink></li>
            <li><NavLink to="/contact">contact()</NavLink></li>
          </ul>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/id" component={Id}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/blog" component={Blog}/>
          </div>
        </nav>
      </HashRouter>
    );
  }
}

export default Main;
