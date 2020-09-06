import React from "react";
import Input from "./Input";
import AvatarInput from "./AvatarInput";
import SubmitButton from "./SubmitButton";

const Form = (props) => {
  const inputs = [];
  const user = props.user;
  for (const key of Object.keys(user)) {
    if (user.hasOwnProperty(key) && key !== "avatar") {
      inputs.push({
        id: key,
        name: key,
        placeholder: props.keyTranslation[key],
        type: key === "age" ? "number" : "text",
      });
    }
  }

  return (
    <React.Fragment>
      <form
        className={"mx-auto bg-white rounded-lg md:w-2/6 p-6 shadow-2xl"}
        onSubmit={props.onSubmit}
      >
        {inputs.map((elem) => {
          return (
            <Input
              id={elem.id}
              key={elem.id}
              name={elem.name}
              placeholder={elem.placeholder}
              type={elem.type}
              onChange={props.onChange}
            />
          );
        })}
        <AvatarInput
          id={"avatar"}
          name={"avatar"}
          placeholder={"Upload your avatar"}
          type={"file"}
          accept={"image/*"}
          avatarState={props.avatarState}
          onChangeAvatar={props.onChangeAvatar}
        />
        <SubmitButton />
      </form>
    </React.Fragment>
  );
};

export default Form;
