import React from "react";
import { UserCard } from "./components/UserCard";

class App extends React.Component {
  state = {
    user: {
      name: "Raul Luis",
      location: "San Francisco de Macorís, DR",
      foodType: "Pussy",
      age: 19,
      likes: "Gang, Money, Hoes, PUBG, Extra Viejo",
      twitterUsername: "cayacoa_",
      twitterLink: "https://twitter.com/cayacoa_",
      avatar:
        "https://pbs.twimg.com/profile_images/1296005768920137730/Ouhg8dxG_400x400.jpg",
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

  render() {
    return (
      <div className={"container mx-auto p-4 subpixel-antialiased"}>
        <UserCard user={this.state.user} keyTranslation={this.keyTranslation} />
      </div>
    );
  }
}

export default App;
