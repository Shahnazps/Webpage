import React from "react";

const User_function = (props) => {
  return (
    <div>
      {" "}
      Name: {props.children} | Age: {props.age}
    </div>
  );
};

export default User_function;
