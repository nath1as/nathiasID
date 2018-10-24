import React, { Component } from "react";
import "./Nathias.css";

const nths = `
 █▄
 ███▄
 ███▀█▄
 ███  ▀█▄              █
 ███   ███             █     ▄              ▄▄▄   
 ███   ███     ▄█▄     █     █       ▄█▄  ▄█▀ ▀▀  
 ███   ███   ▄█▀ ▀█▄  ▀█▀ ▄▄▄█ ▀   ▄█▀ ▀█▄ ▀█▄▄   
 ███   ███ ▄██▄   ▄██▄ █▄ █  █ █ ▄██▄   ▄██▄  ▀█▄ 
 ███   ███                █             ▄▄▄▄▄▄▄█▀ 
 ███   ███
 ███   █▀
 ███
 ███
 █▀
`;

class Logo extends Component {
  render() {
    return (
      <div className="logo-wrap">
        <code className="logo-wrap">
          <pre id="logo" className="glitch">
            { nths }
          </pre>
        </code>
      </div>
    );
  }
}

export default Logo;
