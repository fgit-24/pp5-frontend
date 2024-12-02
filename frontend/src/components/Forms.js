import { Component } from "react";

class Forms extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => {
            this.state.setState({ username: e.target.value });
          }}
          className="form-control"
          placeholder="Please enter name"
        ></input>
        <input
          type="text"
          className="form-control"
          value={this.state.password}
          onChange={(e) => {
            this.state.setState({ password: e.target.value });
          }}
          placeholder="Please enter password"
        ></input>
        <button className="btn btn-primary">Login</button>
      </div>
    );
  }
}

export default Forms;
