import React from "react";
import Dog from "./Dog";

export default function DogList({ breeds }) {
  return (
    <ul className="dogbreed-list">
      {breeds.map(breed => (
        <Dog key={breed.breed} {...breed} />
      ))}
    </ul>
  );
}
