import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Redirect,
} from "react-router-dom";
import Whois from "./Whois";

class Id extends Component {
  render() {
    return (
      <HashRouter>
        <nav>
          <ul>
            <li><NavLink exact to="/id/whois">whois()</NavLink></li>
          </ul>
          <div>
            <Route exact path="/id/whois" component={Whois}/>
          </div>
        </nav>
      </HashRouter>
    );
  }
}
 
export default Id;
