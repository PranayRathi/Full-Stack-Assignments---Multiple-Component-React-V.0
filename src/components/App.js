import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 data-ns-test="project-name">Inventory Management of Project</h1>
        <p data-ns-test="project-description">
          For College Students to keep track of project data
        </p>
      </>
    );
  }
}

export default App;
