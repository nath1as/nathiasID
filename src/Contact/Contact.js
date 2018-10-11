import React, { Component } from "react";
import ReactCopyButtonWrapper  from "react-copy-button-wrapper";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <article className="contact">
          <h3>COMM --</h3>
          <ul>
            <li>┌[▓▒░<div><a
              href="mailto:n@th1.as"
              title='email'
              target='_blank'
              rel='noopener noreferrer'>
             email: n@th1.as
            </a></div></li>
            <li>├[▓▒░<ReactCopyButtonWrapper text='F09170548175AED60A1C6252CDBDCFB2191182D4876A466AE1D2D98A5712BC0624FBB803D056'><button>tox: nathias</button></ReactCopyButtonWrapper>
            </li>
            <li>├[▓▒░<div><a
              href="irc:freenode"
              title='irc'
              target='_blank'
              rel='noopener noreferrer'>irc: nathias</a></div></li>
            <li>└[▓▒░<div><a
              href="https://keybase.io/nathias"
              title='keybase'
              target='_blank'
              rel='noopener noreferrer'>keybase: nathias</a></div></li>
          </ul>
          <h3>PROJ --</h3>
          <ul>
            <li>┌[▓▒░<a
              href="https://github.com/nath1as"
              title='github'
              target='_blank'
              rel='noopener noreferrer'>
              <div>github</div></a></li>
            <li>├[▓▒░<a
              href="https://independent.academia.edu/nathias"
              title='academia.edu'
              target='_blank'
              rel='noopener noreferrer'>
              <div>academia.edu</div></a></li>
            <li>└[▓▒░<a
              href="https://www.deviantart.com/nihiln3gativum"
              title='deviantart'
              target='_blank'
              rel='noopener noreferrer'>
              <div>deviantart</div></a></li>
          </ul>
          <h3>SOC --</h3>
          <ul>
            <li>┌[▓▒░<a
              href="https://independent.academia.edu/nathias"
              title='academia.edu'
              target='_blank'
              rel='noopener noreferrer'>
              <div>twitter</div></a></li>
            <li>├[▓▒░<a
              href="https://www.instagram.com/nihilnegativum"
              title='instagram'
              target='_blank'
              rel='noopener noreferrer'>
              <div>instagram</div></a></li>
            <li>├[▓▒░<a
              href="https://www.linkedin.com/in/nathias"
              title='academia.edu'
              target='_blank'
              rel='noopener noreferrer'>
              <div>linkedin</div></a></li>
            <li>└[▓▒░<a
              href="https://www.facebook.com/nath1as"
              title='academia.edu'
              target='_blank'
              rel='noopener noreferrer'>
              <div>facebook</div></a></li>
          </ul>
        </article>
      </div>
    );
  }
}

export default Contact;
