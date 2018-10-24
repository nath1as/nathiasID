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
 ███   ███                   █          ▄▄▄▄▄▄▄█▀ 
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
        <pre id="logo" className="glitch">
          <code> { nths } </code>
        </pre>
      </div>
    );
  }
}

export default Logo;
