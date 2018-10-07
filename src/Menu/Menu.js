import React, { Component } from "react";
import {
  Route,
  NavLink,
} from "react-router-dom";
import Void from "../Void/Void";
import Id from "../Id/Id";
import Contact from "../Contact/Contact";
import Resume from "../Resume";
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import "./Menu.css";

class Menu extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  render() {
    const { location } = this.props;
    const locationArray = location.pathname.split('/');
    const display = locationArray[locationArray.length -1];
    const menu = () => {
      if (display.length <= 1 ) {
        return 'void';
      } else {
        return '';
      }
    }
    const id = () => {
      if (display === 'id') {
        return 'id';
      } else if (display === 'work') {
        return 'work';
      } else if (display === 'whois') {
        return 'whois';
      } else {
        return '';
      }
    }
    const contact = () => {
      if (display === 'contact') {
        return 'contact';
      } else {
        return '';
      }
    }

    return (
        <div>
          <nav className="main-nav">
            <ul >
              <li>
                <NavLink exact to="/">
                  menu({ menu() })
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/id">
                  id({ id() })
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact">
                  contact({ contact() })
                </NavLink>
              </li>
            </ul>
            <div>
              <Route exact path="/" component={Void}/>
              <Route path="/id" component={Id}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/resume" component={Resume}/>
            </div>
          </nav>
        </div>
    );
  }
}

export default withRouter(Menu);

