import React, { Component } from "react";

export default class Heading extends Component<any> {
  render() {
    return (
      <div className="heading">
        <h1 className="title">2048</h1>
        <div className="scores-container">
          <div className="score-container">{this.props.score}</div>
          <span>&nbsp;</span>
          <div className="best-container">{this.props.best}</div>
        </div>
      </div>
    );
  }
}
