import { Component } from "react";

export class StateExample extends Component {
  constructor() {
    super();

    this.state = {
      name: "Florian",
    };
  }

  render() {
    return <h1>{this.state.name}</h1>;
  }
}

export default StateExample;
