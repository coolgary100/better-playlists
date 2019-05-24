import React, { Component } from "react";
import "./App.css";

let defaultStyle = {
  color: "blue"
};

class Aggregate extends Component {
  render() {
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2 style={defaultStyle}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  state = {};
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text" />
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  state = {};
  render() {
    return (
      <div style={{ ...defaultStyle, display: "inline-block", width: "10%" }}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1 style={{ ...defaultStyle, fontSize: "54px" }}>Title</h1>
      <Aggregate />
      <Aggregate />
      <Filter />
      <Playlist />
      <Playlist />
      <Playlist />
    </div>
  );
}

export default App;
