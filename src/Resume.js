import React, { Component } from "react";
import pdf from './files/resume-EN.pdf';

class Resume extends Component {
  render() {
    return (
      <div>
        <a href={pdf}>English resume</a>
      </div>
    );
  }
}
 
export default Resume;
