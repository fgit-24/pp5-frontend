import { Component } from "react";

export class StateExample extends Component {
  constructor() {
    super();

    this.state = {
      name: "Test",
    };
  }

  handleClick = () => {
    // this.setState({ name: "Another Name" });
    this.setState({
      name: this.state.name === "Test Again" ? "Test Ok" : "Test Again",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Change Text
        </button>
      </div>
    );
  }
}

export default StateExample;
