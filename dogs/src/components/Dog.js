import React from "react";

function capitalize(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

export default function Dog({ breed, subBreeds }) {
  return (
    <li className="card dogbreed-list-item">
      <h4>{capitalize(breed)}</h4>
      {subBreeds.length !== 0 ? (
        <ul>
          {subBreeds.map(subBreed => (
            <li key={subBreed}>{capitalize(subBreed)}</li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
