import React, { Component } from "react";
import "./Work.css";
import Code from "./Code/Code";
import Philosophy from "./Philosophy/Philosophy";

class Work extends Component {
  render() {
    return (
      <div>
        <article className="work">
          <Philosophy />
          <Code />
        </article>
      </div>
    );
  }
}

export default Work;
