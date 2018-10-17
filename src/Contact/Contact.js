import React, { Component } from "react";
import ReactCopyButtonWrapper  from "react-copy-button-wrapper";
import "./Contact.css";
import Typing from 'react-typing-animation';

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
              <Typing speed={10}>
             email: n@th1.as
              </Typing>
            </a></div></li>
            <li>├[▓▒░<ReactCopyButtonWrapper text='F09170548175AED60A1C6252CDBDCFB2191182D4876A466AE1D2D98A5712BC0624FBB803D056'><button>
              <Typing speed={10}>
                <Typing.Delay ms={280} />
                  tox: nathias
                </Typing>
                  </button></ReactCopyButtonWrapper>
            </li>
            <li>├[▓▒░<div><a
              href="irc:freenode"
              title='irc'
              target='_blank'
              rel='noopener noreferrer'>
              <Typing speed={10}>
                <Typing.Delay ms={750} />
                irc: nathias
              </Typing>
            </a></div></li>
            <li>└[▓▒░<div><a
              href="https://keybase.io/nathias"
              title='keybase'
              target='_blank'
              rel='noopener noreferrer'>
              <Typing speed={10}>
                <Typing.Delay ms={980} />
                keybase: nathias
              </Typing>
            </a></div></li>
          </ul>
          <h3>PROJ --</h3>
          <ul>
            <li>┌[▓▒░<a
              href="https://github.com/nath1as"
              title='github'
              target='_blank'
              rel='noopener noreferrer'>
              <div>
                <Typing speed={10}>
                <Typing.Delay ms={30} />
                  github
                </Typing>
              </div></a></li>
            <li>├[▓▒░<a
              href="https://independent.academia.edu/nathias"
              title='academia.edu'
              target='_blank'
              rel='noopener noreferrer'>
              <div>
                <Typing speed={10}>
                <Typing.Delay ms={200} />
                  academia.edu
                </Typing>
              </div></a></li>
            <li>└[▓▒░<a
              href="https://www.deviantart.com/nihiln3gativum"
              title='deviantart'
              target='_blank'
              rel='noopener noreferrer'>
              <div>
                <Typing speed={10}>
                <Typing.Delay ms={860} />
                  deviantart
                </Typing>
              </div></a></li>
          </ul>
          <h3>SOC --</h3>
          <ul>
            <li>┌[▓▒░<a
                href="https://twitter.com/nath1as"
              title='twitter'
              target='_blank'
              rel='noopener noreferrer'>
              <div>
                <Typing speed={10}>
                <Typing.Delay ms={25} />
                  twitter
                </Typing>
              </div></a></li>
            <li>├[▓▒░<a
              href="https://www.instagram.com/nath1as"
              title='instagram'
              target='_blank'
              rel='noopener noreferrer'>
              <div>
                <Typing speed={10}>
                <Typing.Delay ms={250} />
                  instagram
                </Typing>
              </div></a></li>
            <li>├[▓▒░<a
              href="https://www.linkedin.com/in/nathias"
              title='linkedin'
              target='_blank'
              rel='noopener noreferrer'>
              <div>
                <Typing speed={10}>
                <Typing.Delay ms={930} />
                  linkedin
                </Typing>
              </div></a></li>
            <li>└[▓▒░<a
              href="https://www.facebook.com/nath1as"
              title='evilbook'
              target='_blank'
              rel='noopener noreferrer'>
              <div>
                <Typing speed={10}>
                <Typing.Delay ms={990} />
                  facebook
                </Typing>
              </div></a></li>
          </ul>
        </article>
      </div>
    );
  }
}

export default Contact;
