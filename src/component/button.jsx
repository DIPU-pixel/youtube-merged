import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-1 rounded-md bg-gray-200/80 text-sm w-max">{name}</button>
    </div>
  );
};

export default Button;
