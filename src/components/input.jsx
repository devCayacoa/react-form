import React from "react";
const Input = (props) => {
  return (
    <React.Fragment>
      <input
        className={
          "pl-2 py-3 mb-8 w-full bg-gray-200 text-gray-800 rounded focus:outline-none focus:bg-white focus:shadow-outline opacity-90 transition duration-100 ease-in-out hover:opacity-100 hover:bg-gray-300 hover:placeholder-gray-800"
        }
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
    </React.Fragment>
  );
};

export default Input;
