import React, { Component } from "react";
import nathias from "../files/img/nathias.png";
import "./Whois.css";

class Whois extends Component {
  render() {
    return (
      <div>
        <article className="whois">
          <img alt="nathias" src={nathias} />
          <p> I am an unaffiliated researcher of abstraction, blablabla bla Sunt sit ipsam ea sed ut ut optio iure. Possimus incidunt nulla inventore excepturi vero corporis quae aut. Quia enim non qui nostrum. Nisi soluta molestias corporis voluptatem vel sequi. Accusamus itaque aut ea voluptas autem nihil tempore.… </p>
        </article>
      </div>
    );
  }
}

export default Whois;
