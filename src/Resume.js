import React, { Component } from "react";
import pdf from './files/resume-EN.pdf';

class Resume extends Component {
  render() {
    return (
      <div>
        <h3> Resume </h3>
        <a href={pdf}>Slovenscina</a>
        <a href={pdf}>English</a>
      </div>
    );
  }
}
 
export default Resume;
