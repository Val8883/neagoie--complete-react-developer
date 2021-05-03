import React, { Component } from "react";
import { CardList } from "../card-list/card-list.component";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ monsters: user }));
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        <CardList monsters={monsters} />
      </div>
    );
  }
}
