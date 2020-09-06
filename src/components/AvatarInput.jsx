import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const AvatarInput = (props) => {
  const state = props.avatarState;
  return (
    <React.Fragment>
      <label htmlFor={props.id} className={""}>
        <div
          className={
            "p-4 mb-8 w-full bg-gray-400 text-gray-700 text-center rounded focus:outline-none focus:bg-white focus:shadow-outline transition duration-100 ease-in-out hover:bg-gray-500 hover:text-gray-800"
          }
        >
          <p>
            <FontAwesomeIcon
              icon={faArrowCircleUp}
              style={state.faDisappear}
              className={
                "my-2 mx-auto text-4xl block align-middle animate-bounce"
              }
            />
            <img
              src={state.img}
              style={state.showImg}
              className={
                "border-4 p-2 mb-2 border-gray-500 border-white w-1/4 mx-auto bg-white"
              }
              alt={"User uploaded files"}
            />
            {state.labelText}
          </p>
        </div>
        <input
          style={{ opacity: 0, position: "absolute", zIndex: -1 }}
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          accept={props.accept}
          onChange={props.onChangeAvatar}
        />
      </label>
    </React.Fragment>
  );
};

export default AvatarInput;
