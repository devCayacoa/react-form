import React from "react";
import { UserCard } from "./components/UserCard";
import Form from "./components/form";

class App extends React.Component {
  state = {
    user: {
      name: "Raul Luis",
      location: "San Francisco de Macorís, DR",
      foodType: "Pussy",
      age: 19,
      likes: "Gang, Money, Hoes, PUBG, Extra Viejo",
      twitterUsername: "cayacoa_",
      // twitterLink: "https://twitter.com/cayacoa_",
      avatar:
        "https://pbs.twimg.com/profile_images/1296005768920137730/Ouhg8dxG_400x400.jpg",
    },

    avatarState: {
      labelText: "Upload your avatar",
      img: null,
      faDisappear: { display: "block" },
      showImg: { display: "none" },
    },
  };

  keyTranslation = {
    name: "Name",
    location: "Location",
    foodType: "Eats",
    age: "Age",
    likes: "Likes",
    twitterUsername: "Twitter",
  };

  handleSubmit(e) {}

  handleChange = (e) => {
    const user = this.state.user;
    user[e.target.id] = e.target.value;
    this.setState({ user: user });
  };

  handleChangeAvatar = (e) => {
    const avatarState = this.state.avatarState;
    const user = this.state.user;
    const fileUploaded = e.target.files[0];
    const faDisappear = fileUploaded
      ? { display: "none" }
      : { display: "block" };
    const showImg = fileUploaded ? { display: "block" } : { display: "none" };
    const labelText = fileUploaded ? fileUploaded.name : "Upload a picture";

    // Check if a file was uploaded and change the state to display it
    if (fileUploaded) {
      let reader = new FileReader();
      let url = reader.readAsDataURL(fileUploaded);
      reader.onloadend = (e) => {
        avatarState.img = [reader.result];
        user.avatar = [reader.result];
        this.setState({
          user: user,
          avatarState: avatarState,
        });
      };
    }
    avatarState.labelText = labelText;
    avatarState.faDisappear = faDisappear;
    avatarState.showImg = showImg;

    this.setState({
      avatarState: avatarState,
    });
  };
  render() {
    return (
      <div className={"container mx-auto p-4 subpixel-antialiased"}>
        <div className={"flex items-start"}>
          <Form
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onChangeAvatar={this.handleChangeAvatar}
            avatarState={this.state.avatarState}
            user={this.state.user}
            keyTranslation={this.keyTranslation}
          />
          <UserCard
            user={this.state.user}
            keyTranslation={this.keyTranslation}
          />
        </div>
      </div>
    );
  }
}

export default App;
