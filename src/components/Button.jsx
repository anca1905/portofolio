import React from "react";

const Button = (props) => {
  const { text = "Click Me", classname, type } = props;
  return (
    <div>
      <button
        type={type}
        className={`bg-blue-600 rounded-md py-3 px-2 ${classname} hover:bg-blue-300`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
