import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>COMMS</h2>
        <ul>
          <li>email: <a
            href="mailto:n@th1.as"
            title='email'
            target='_blank'
            rel='noopener noreferrer'>
           n@th1.as
          </a></li>
          <li>tox: <a
            href="mailto:n@th1.as"
            title='tox'
            target='_blank'
            rel='noopener noreferrer'>
           123219391391
          </a></li>
          <li>irc: nathias @ freenode, quakenet, snoo, etc. </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
