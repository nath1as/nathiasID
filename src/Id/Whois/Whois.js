import React, { Component } from "react";
import nathias from "../../files/img/nathias.png";
import "./Whois.css";
import Typing from 'react-typing-animation';

class Whois extends Component {
  render() {
    return (
      <div>
        <article className="whois">
          <img alt="nathias" src={nathias} />
          <p className="bio">
            <Typing speed={20}>
              <span>
                <h3>Hello!</h3>
                <p> I am a philosopher and a coder interested in the intersection of philosophy, linguistics and computer science. My philosophical project is the development of a rationalist epistemology compatible with naturalism and nihilism.</p>
                <p>Vitae omnis quia quod. Omnis incidunt facere eius totam atque. Et veritatis ea ut veritatis optio voluptatem enim. Ex necessitatibus aut aperiam et consequuntur et. Labore necessitatibus assumenda consequatur voluptatem vero enim dicta sintVitae omnis quia quod. Omnis incidunt facere eius totam atque. Et veritatis ea ut veritatis optio voluptatem enim. Ex necessitatibus aut aperiam et consequuntur et. Labore necessitatibus assumenda consequatur voluptatem vero enim dicta sint..</p>
              </span>
            </Typing>
          </p>
        </article>
      </div>
    );
  }
}

export default Whois;