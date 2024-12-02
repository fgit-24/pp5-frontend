import { Component } from "react";

class MapFunc extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeBtn()} className="btn btn-primary">
          Map here
        </button>
      </div>
    );
  }
}

export default MapFunc;
