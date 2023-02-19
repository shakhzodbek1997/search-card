import React from "react";
import CardWithLikes from "./Heart";

const Card = ({ name, email, username, id}) => {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 pointer">
      <img src={`https://robohash.org/${  id}?200x200 `} alt="Jane Doe"/>
      <div>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p>{email}</p>
        <CardWithLikes title="My Card" content="Lorem ipsum dolor sit amet" />
      </div>
    </div>
  );
}

export default Card;