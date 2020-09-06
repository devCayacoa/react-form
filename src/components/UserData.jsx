import React from "react";

export const UserData = (props) => {
  const id = props.id;
  const title = props.title;
  const content = props.content;
  return (
    <div className={"mb-4 ml-1"}>
      <h3
        className={`text-lg ${
          props.id === "twitterUsername" ? "text-blue-600" : " "
        }`}
        id={id}
      >
        <span className={"block text-gray-700 text-sm"}>{title}</span>
        {content}
      </h3>
    </div>
  );
};
