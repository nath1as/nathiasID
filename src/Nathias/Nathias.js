import React, { Component } from "react";
import "./Nathias.css";

// const nths = `
//  █▄                                               
//  ███▄                                             
//  ███▀█▄                                           
//  ███  ▀█▄              █                          
//  ███   ███             █     ▄              ▄▄▄   
//  ███   ███     ▄█▄     █     █       ▄█▄  ▄█▀ ▀▀  
//  ███   ███   ▄█▀ ▀█▄  ▀█▀ ▄▄▄█ ▀   ▄█▀ ▀█▄ ▀█▄▄   
//  ███   ███ ▄██▄   ▄██▄ █▄ █  █ █ ▄██▄   ▄██▄  ▀█▄ 
//  ███   ███                   █          ▄▄▄▄▄▄▄█▀ 
//  ███   ███
//  ███   █▀
//  ███
//  ███
//  █▀
// `;

const n = `
 █▄
 ███▄
 ███▀█▄
 ███  ▀█▄
 ███   ███
 ███   ███
 ███   ███
 ███   ███
 ███   ███
 ███   ███
 ███   █▀
 ███
 ███
 █▀
`;
const a = `
    ▄█▄
  ▄█▀ ▀█▄
▄██▄   ▄██▄
`;

const t = `
  █
  █
  █
 ▀█▀
  █▄
`;
const h = `
    ▄
    █
 ▄▄▄█
 █  █
    █
`;
const i = `
 ▀
 █
`;
const s = `
     ▄▄▄   
   ▄█▀ ▀▀  
    ▀█▄▄   
       ▀█▄ 
 ▄▄▄▄▄▄▄█▀ 
`;
//  ███   ███             █     ▄              ▄▄▄   
//  ███   ███     ▄█▄     █     █       ▄█▄  ▄█▀ ▀▀  
//  ███   ███   ▄█▀ ▀█▄  ▀█▀ ▄▄▄█ ▀   ▄█▀ ▀█▄ ▀█▄▄   
//  ███   ███ ▄██▄   ▄██▄ █▄ █  █ █ ▄██▄   ▄██▄  ▀█▄ 
//  ███   ███                   █          ▄▄▄▄▄▄▄█▀ 

class Logo extends Component {
  render() {
    return (
      <div className="logo-wrap">
        <pre id="logo" className="glitch">
          <pre id="n"> { n } </pre>
          <pre id="a"> { a } </pre>
          <pre id="t"> { t } </pre>
          <pre id="h"> { h } </pre>
          <pre id="i"> { i } </pre>
          <pre id="a2"> { a } </pre>
          <pre id="s"> { s } </pre>
        </pre>
      </div>
    );
  }
}

export default Logo;
