import React, { Component } from "react";
import github from './files/img/githubPIXEL.png';
import facebook from './files/img/facebookPIXELtest.png';

class Contact extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>email: <a
            href="mailto:n@th1.as"
            title='email'
            target='_blank'
            rel='noopener noreferrer'>
           n@th1.as
          </a></li>
          <li>tox: <a
            title='tox'
            target='_blank'
            rel='noopener noreferrer'>
           123219391391
          </a></li>
          <li>irc: nathias</li>
          <li>keybase: nathias</li>
        </ul>
        <ul>
          <li><img src={github} alt="github" />github</li>
          <li><img />academia.edu</li>
          <li><img />deviantart</li>

          <li><img />reddit</li>
          <li><img />twitter</li>
          <li><img />instagram</li>
          <li><img />linkedin</li>
          <li><img src={facebook} alt="facebook" />facebook</li>
        </ul>

      </div>
    );
  }
}

export default Contact;
