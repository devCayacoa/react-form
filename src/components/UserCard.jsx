import React from "react";
import { UserData } from "./UserData";

export const UserCard = (props) => {
  const user = props.user;
  let userInfo = [];
  for (const key in user) {
    if (user.hasOwnProperty(key)) {
      if (key !== "avatar" && key !== "name" && key !== "twitterLink") {
        userInfo.push({
          id: key,
          key: key,
          title: props.keyTranslation[key],
          content:
            key === "twitterUsername" ? (
              <a href={user.twitterLink} className={"text-blue-500"}>
                {"@" + user[key]}
              </a>
            ) : (
              user[key]
            ),
        });
      }
    }
  }
  return (
    <div className={"shadow-xl p-3 w-full md:w-2/6 bg-white mx-auto rounded"}>
      <div className="mx-auto w-11/12">
        <img
          src={user.avatar}
          className="avatar w-full mx-auto rounded"
          alt={" "}
        />
        <h1 className="name text-3xl font-bold text-teal-600">{user.name}</h1>
        {userInfo.map((elem) => (
          <UserData
            id={elem.id}
            key={elem.key}
            title={elem.title}
            content={elem.content}
          />
        ))}
      </div>
    </div>
  );
};
