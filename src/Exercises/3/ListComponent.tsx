import React, { useState, useCallback } from "react";
import Chiled from "./Chiled";

function ListComponent({ list }) {
  const [likeCount, setLikeCount] = useState(0);

  // TODO: Optimize this function so it doesn't get recreated on every render.
  // const handleLike = (id) => {
  //   console.log(`Liked item ${id}`);
  //   setLikeCount((prev) => prev + 1);
  // };

  const handleLike = useCallback((id) => {setLikeCount((prev) => prev + 1)
    console.log(`Liked item ${id}`);},[likeCount])

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.value}
          <Chiled onClick={() => handleLike(item.id)}>Like</Chiled>
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;
