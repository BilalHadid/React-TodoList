import React, { Component } from "react";
import { render } from "react-dom";
import Heady from "./ComponentsTodo/headerComponent";
import Zoo from "./ComponentsTodo/Adding";

class App extends Component {
  render() {
    return (
      <div>
        {/* This should be Header not Heady */}
        <Heady />
        <div>
          {/* What is this Zoo? Name your components correctly */}
          <Zoo />
        </div>
        <div></div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
