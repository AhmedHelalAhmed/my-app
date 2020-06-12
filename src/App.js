import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increament = () => {
    this.setState({
      counter: ++this.state.counter,
    });
  };

  decreament = () => {
    this.setState({
      counter: --this.state.counter,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.increament}>Increament</button>
        <button onClick={this.decreament}>Decreament</button>

        <div>{this.state.counter}</div>
      </div>
    );
  }
}
