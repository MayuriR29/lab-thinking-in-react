import React, { Component } from "react";
import { activity } from "./seedData.js";
import Child from "./Child";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activity: activity
    };
    console.log("in constructor ");
  }

  componentWillMount() {
    console.log("inside componentWillMount");
    console.log(
      "componentWillMount window.",
      window.innerWidth,
      window.innerHeight
    );
  }

  componentDidMount() {
    console.log("in componentDidMount");
  }
  handleClick = () => {};

  render() {
    console.log("parent in render", this.state.activity);
    return (
      <div>
        <div className="container">
          <div id="sidebar">
            <button onClick={this.handleClick}>+</button>
            <h3>
              {this.state.activity.map((eachValue, index) => {
                return <ul key={index}>{eachValue.titlename}</ul>;
              })}
            </h3>
          </div>
          <Child list={this.state.activity} />
        </div>
      </div>
    );
  }
}

export default App;
