import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={props.className}
        style={{ cursor: "pointer", outline: "none" }}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;

