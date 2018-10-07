import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Whois from "../Whois/Whois";
import Work from "../Work/Work";
import "./Id.css";

class Id extends Component {
  render() {
    return (
      <HashRouter>
        <nav className="submenu">
          <ul>
            <li><NavLink exact to="/id/whois">whois</NavLink></li>
            <li><NavLink exact to="/id/work">work</NavLink></li>
            <li>
              <a
                href='http://www.abstraction.sh'
                title='abstraction'
                // target='_blank'
                rel='noopener noreferrer'>
                blog
              </a>
            </li>
          </ul>
          <div>
            <Route exact path="/id/whois" component={Whois}/>
            <Route exact path="/id/work" component={Work}/>
          </div>
        </nav>
      </HashRouter>
    );
  }
}

export default Id;
