import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Link,
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
        <div>
          <ul className="header">
            <li><NavLink exact to="/">main()</NavLink></li>
            <li><NavLink to="/id">id()</NavLink></li>
            <li><NavLink to="/contact">contact()</NavLink></li>
            <li><NavLink to="/blog">blog()</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/id" component={Id}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/blog" component={Blog}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
