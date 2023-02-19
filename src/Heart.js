import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function CardWithLikes({ title, content, onLike }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    onLike(1);
  };

  return (
    <button onClick={handleLike}>
      <FontAwesomeIcon icon={faHeart} />
      <span>{likes}</span>
    </button>
  );
}

export default CardWithLikes;
