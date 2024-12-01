import { Component } from "react";

class ClassA extends Component {
  render(props) {
    return <h3>This is my {this.props.email}</h3>;
  }
}

export default ClassA;
