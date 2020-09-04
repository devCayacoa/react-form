import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
const AvatarInput = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id} className={""}>
        <div
          className={
            "p-4 mb-8 w-full bg-gray-200 text-gray-500 text-center rounded focus:outline-none focus:bg-white focus:shadow-outline opacity-90 transition duration-100 ease-in-out hover:opacity-100 hover:bg-gray-300 hover:placeholder-gray-800"
          }
        >
          <p className={""}>
            <FontAwesomeIcon
              icon={faArrowCircleUp}
              className={"my-2 mx-auto text-4xl block align-middle"}
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
