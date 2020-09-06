import React from "react";
const Input = (props) => {
  return (
    <React.Fragment>
      <input
        className={`appearance-none pl-2 py-3 mb-8 w-full bg-gray-400 placeholder-gray-700 rounded focus:outline-none focus:bg-white focus:shadow-outline transition duration-100 ease-in-out hover:bg-gray-500 hover:placeholder-gray-800 `}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      />
    </React.Fragment>
  );
};

export default Input;
