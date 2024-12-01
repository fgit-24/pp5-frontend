import { Component } from "react";

class ClassA extends Component {
  clickMe() {
    alert(`This is the email!`);
  }

  render(props) {
    return (
      <div>
        <h3>This is my {this.props.email}</h3>
        <button onClick={this.clickMe}>Click for Email</button>
      </div>
    );
  }
}

export default ClassA;
