import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Redirect,
} from "react-router-dom";
import Whois from "./Whois";
import Online from "./Online";

class Id extends Component {
  render() {
    return (
      <HashRouter>
        <nav className="submenu">
          <ul>
            <li><NavLink exact to="/id/whois">whois()</NavLink></li>
            <li><NavLink exact to="/id/online">online()</NavLink></li>
            <li>
              <a
                href='https://abstraction.sh'
                title='abstraction'
                target='_blank'
                rel='noopener noreferrer'>
               blog()
              </a>
            </li>
          </ul>
          <div>
            <Route exact path="/id/whois" component={Whois}/>
            <Route exact path="/id/online" component={Online}/>
          </div>
        </nav>
      </HashRouter>
    );
  }
}
 
export default Id;
