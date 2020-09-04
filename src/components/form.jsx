import React, { Component } from "react";
import Input from "./input";
import AvatarInput from "./AvatarInput";

class Form extends Component {
  render() {
    return (
      <div className={"container mx-auto p-4 subpixel-aliased"}>
        <form
          className={"mx-auto bg-white rounded-lg md:w-2/6 p-6 shadow-xl"}
          /*onSubmit={}*/
        >
          <Input
            id={"name"}
            name={"name"}
            placeholder={"Full Name"}
            type={"text"}
          />
          <Input
            id={"location"}
            name={"location"}
            placeholder={"Location"}
            type={"text"}
          />{" "}
          <Input
            id={"foodType"}
            name={"foodType"}
            placeholder={"Eats"}
            type={"text"}
          />
          <Input id={"age"} name={"age"} placeholder={"Age"} type={"text"} />
          <Input
            id={"twitter"}
            name={"twitter"}
            placeholder={"Twitter username"}
            type={"text"}
          />
          <AvatarInput
            id={"avatar"}
            name={"avatar"}
            placeholder={"Upload your avatar"}
            type={"file"}
            accept={"image/*"}
          />
        </form>
      </div>
    );
  }
}

export default Form;
