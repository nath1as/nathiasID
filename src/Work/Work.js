import React, { Component } from "react";
import philosophy from "../files/data/philosophy-work.json";
import "./Work.css";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: Object.values(philosophy).length - 3,
      max: Object.values(philosophy).length,
      philosophy: philosophy,
    };

    this.upScroll = this.upScroll.bind(this);
    this.downScroll = this.downScroll.bind(this);
  }

  upScroll() {
    if (this.state.counter < this.state.max - 3) {
      this.setState({
        counter: this.state.counter + 1,

      });
    }
  }

  downScroll() {
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter - 1,

      });
    }
  }
  render() {
    const { philosophy } = this.state;
    const philosophyWork = Object.values(philosophy);

    let firstWork = this.state.counter + 2;
    let secondWork = this.state.counter + 1;
    let thirdWork = this.state.counter ;

    return (
      <div>
        <article className="work">
          <div className="up-scroll"
            onClick={this.upScroll}>
            ▲
          </div>
          <h2>PHILOSOPHY --</h2>
          <ul>
            <li><a
              href={philosophyWork[firstWork].link}
              title={philosophyWork[firstWork].publication}
              target='_blank'
              rel='noopener noreferrer'>
              ┌[▓▒░<div>{philosophyWork[firstWork].name}
              </div>
            </a></li>
            <li><a
              href={philosophyWork[secondWork].link}
              title={philosophyWork[secondWork].publication}
              target='_blank'
              rel='noopener noreferrer'>
            ├[▓▒░<div>{philosophyWork[secondWork].name}
              </div>
            </a></li>
            <li><a
              href={philosophyWork[thirdWork].link}
              title={philosophyWork[thirdWork].publication}
              target='_blank'
              rel='noopener noreferrer'>
            └[▓▒░<div>{philosophyWork[thirdWork].name}
              </div>
            </a></li>
          </ul>
          <div className="down-scroll"
            onClick={this.downScroll}>
            ▼
          </div>

          <h2>CODE --</h2>
          <ul>
            <li><a
              href="https://github.com/nath1as"
              title='github'
              target='_blank'
              rel='noopener noreferrer'>
             ┌[▓▒░<div>Name of project</div>
            </a></li>
            <li><a
              href="https://independent.academia.edu/nathias"
              title='academia.edu'
              target='_blank'
              rel='noopener noreferrer'>
            ├[▓▒░<div>Name of project</div>
            </a></li>
            <li><a
              href="https://www.deviantart.com/nihiln3gativum"
              title='deviantart'
              target='_blank'
              rel='noopener noreferrer'>
              └[▓▒░<div>Name of project</div>
            </a></li>
          </ul>
        </article>
      </div>
    );
  }
}

export default Work;
