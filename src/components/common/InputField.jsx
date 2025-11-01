import React from "react";

const InputField = (props) => {
  return (
    <div>
      <input
      name={props.name}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        className={props.className}
      />
    </div>
  );
};

export default InputField;
