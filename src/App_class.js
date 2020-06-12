import React, { Component } from "react";
import Header from "./Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.decreament = this.decreament.bind(this);
  }

  increament = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decreament() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    return (
      <div className="container text-center pt-5">
        <br />

        <button className="btn btn-primary mt-3" onClick={this.increament}>
          Increament
        </button>
        <br />

        <button className="btn btn-primary mt-3" onClick={this.decreament}>
          Decreament
        </button>
        <br />
        <Header header="Ahmed" />
        <br />
        <h1 className="mt-3">{this.state.counter}</h1>
      </div>
    );
  }
}
