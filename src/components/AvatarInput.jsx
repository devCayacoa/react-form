import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
const AvatarInput = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id} className={""}>
        <div
          className={
            "p-4 mb-8 w-full bg-gray-300 text-gray-600 text-center rounded focus:outline-none focus:bg-white focus:shadow-outline transition duration-100 ease-in-out hover:bg-gray-400 hover:text-gray-800"
          }
        >
          <p className={""}>
            <FontAwesomeIcon
              icon={faArrowCircleUp}
              className={
                "my-2 mx-auto text-4xl block align-middle animate-bounce"
              }
            />
            {props.placeholder}
          </p>
        </div>
        <input
          style={{ opacity: 0, position: "absolute", zIndex: -1 }}
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          accept={props.accept}
        />
      </label>
    </React.Fragment>
  );
};

export default AvatarInput;
