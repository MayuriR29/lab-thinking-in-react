import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("in child constructor ");
  }

  componentWillMount() {
    console.log("Child inside componentWillMount");
  }

  componentDidMount() {
    console.log("Child in componentDidMount");
  }

  render() {
    console.log("in child render");
    return (
      <div>
        <h3>
          Child
          {this.props.list.map((eachValue, index) => {
            return <ul key={index}>{eachValue.titlename}</ul>;
          })}
        </h3>
      </div>
    );
  }
}

export default Child;
