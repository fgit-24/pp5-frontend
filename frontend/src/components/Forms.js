import { Component } from "react";

class Forms extends Component {
  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="form-control"
          placeholder="Please enter name"
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter password"
        ></input>
      </div>
    );
  }
}

export default Forms;
