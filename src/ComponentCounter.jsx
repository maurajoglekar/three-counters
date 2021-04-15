import React, { Component } from "react";

// Counter component using a component
class ComponentCounter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <section>
        <h1>Counter using react Component</h1>
        <div className="counter">
          <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
      </section>
    );
  }
}

export default ComponentCounter;
