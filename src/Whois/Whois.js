import React, { Component } from "react";
import nathias from "../files/img/nathias.png";
import "./Whois.css";

class Whois extends Component {
  render() {
    return (
      <div>
        <article className="whois">
          <img alt="nathias" src={nathias} />
          <p>class Nathias(Philosopher, Coder):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; name = Matija<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; surname = Potocnik Pribosic<br/>


                &nbsp;&nbsp;&nbsp;&nbsp; education =: doctor philosophia<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; experience =: list<br/>
          </p>
        </article>
      </div>
    );
  }
}

export default Whois;
