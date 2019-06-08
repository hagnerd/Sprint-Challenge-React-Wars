import React from "react";
import StarWarsCharacter from "./StarWarsCharacter";
import PropTypes from "prop-types";

export default function StarWarsCharacterList({ characters }) {
  return (
    <ul>
      {characters.map(character => (
        <StarWarsCharacter key={character.url} {...character} />
      ))}
    </ul>
  );
}

StarWarsCharacterList.propTypes = {
  characters: PropTypes.shape({
    ...StarWarsCharacter.propTypes,
    url: PropTypes.string
  })
};
