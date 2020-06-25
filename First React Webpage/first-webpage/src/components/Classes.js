import React, { Component } from "react";
import User_function from "./User_function";

class Classes extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <User_function age="20">John</User_function>
        <User_function age="25">Jack</User_function>
        <User_function age="30">Jill</User_function>
      </div>
    );
  }
}

export default Classes;
