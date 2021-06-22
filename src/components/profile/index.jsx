import React, { Component } from "react";
import "./style.css";
import Bio from "./bio";
import Skills from "./skills";
import Links from "./links";

class Profile extends Component {
  me = {
    name: "Niloy Saha Roy",
    title: "Masters in Data Science at TU Dortmund",
    skillA: "Python",
    skillB: "Javascript",
    skillC: "Java",
  };
  render() {
    return (
      <div className="Container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <Links />
      </div>
    );
  }
}

export default Profile;
