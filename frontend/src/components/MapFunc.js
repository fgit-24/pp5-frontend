import { Component } from "react";

class MapFunc extends Component {
  myElements = (names) => {
    return names.map((name) => <div key={name}>{`${name}`}</div>);
  };

  render() {
    return <h2>{this.myElements(this.props.names)}</h2>;
  }
}

export default MapFunc;
