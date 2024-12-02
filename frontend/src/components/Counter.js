import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.count}</h2>
        <button onClick={this.increase} className="btn btn-primary">
          Increase
        </button>
        <button onClick={this.decrease} className="btn btn-primary">
          Decrease
        </button>
      </div>
    );
  }
}

export default Counter;
