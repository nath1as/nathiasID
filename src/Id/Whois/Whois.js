import React, { Component } from "react";
import nathias from "../../files/img/nathias.png";
import "./Whois.css";

class Whois extends Component {
  render() {
    return (
      <div>
        <article className="whois">
          <img alt="nathias" src={nathias} />
          <p className="bio">
            <h3> Hello!</h3>
            I am a philosopher and a coder interested in epistemology as theory of abstraction, which I consider as the intersection of philosophy, linguistics and computer science. My philosophical project is the development of a modern rationalism  compatible with naturalism and the discoveries of natural sciences.
          </p>
        </article>
      </div>
    );
  }
}

export default Whois;
