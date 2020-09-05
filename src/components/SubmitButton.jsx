import React from "react";

const SubmitButton = () => {
  return (
    <React.Fragment>
      <input
        className={
          "appearance-none w-full py-3 bg-teal-600 text-white text-lg font-bold transition duration-150 ease-in-out hover:bg-green-400 hover:text-gray-100 transform hover:scale-105 focus:outline-none"
        }
        type="button"
        value="Submit"
        name={"submit"}
      />
    </React.Fragment>
  );
};

export default SubmitButton;
