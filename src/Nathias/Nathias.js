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

// const n = `
//  █▄
//  ███▄
//  ███▀█▄
//  ███  ▀█▄
//  ███   ███
//  ███   ███
//  ███   ███
//  ███   ███
//  ███   ███
//  ███   ███
//  ███   █▀
//  ███
//  ███
//  █▀
// `;
// const a = `
//     ▄█▄
//   ▄█▀ ▀█▄
// ▄██▄   ▄██▄
// `;

// const t = `
//   █
//   █
//   █
//  ▀█▀
//   █▄
// `;
// const h = `
//     ▄
//     █
//  ▄▄▄█
//  █  █
//     █
// `;
// const i = `
//  ▀
//  █
// `;
// const s = `
//      ▄▄▄   
//    ▄█▀ ▀▀  
//     ▀█▄▄   
//        ▀█▄ 
//  ▄▄▄▄▄▄▄█▀ 
// `;

class Logo extends Component {
  render() {
    return (
      <div className="logo-wrap">
        <pre id="logo" className="glitch">
          { nths }
        </pre>
      </div>
    );
  }
}

export default Logo;
