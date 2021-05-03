import { useState } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const like = () => {
    set_numLikes(numLikes + 1);
  };
  const disLike = () => {
    set_numLikes(numLikes - 1);
  };

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={like}>Like</button>
        <button onClick={disLike}>dislike</button>
      </p>
    </div>
  );
}
