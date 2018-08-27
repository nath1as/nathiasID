import React, { Component } from "react";
import github from './files/img/githubPIXEL.png';
import facebook from './files/img/facebookPIXELtest.png';

class Contact extends Component {
  render() {
    return (
      <div>
        <article>
          <h3>COMMS:</h3>
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
          <h3>SOCIAL:</h3>
          <ul>
            <li><img />github</li>
            <li><img />academia.edu</li>
            <li><img />deviantart</li>

            <li><img />reddit</li>
            <li><img />twitter</li>
            <li><img />instagram</li>
            <li><img />linkedin</li>
            <li><img />facebook</li>
          </ul>
        </article>
      </div>
    );
  }
}

export default Contact;
