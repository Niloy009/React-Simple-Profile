import React, { Component } from "react";
import Profile from "./profile";
import Skills from "./profile/skills";

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <div style={{ marginTop: "30px" }}>
          <h3>List of Developers</h3>
          <p>Mr. X</p>
          <Skills skillA="React" skillB="Angular" skillC="Vue" />
          <p>Mr. Y</p>
          <Skills skillA="NodeJS" skillB="ExpressJS" skillC="MongoDB" />
        </div>
      </div>
    );
  }
}

export default App;
