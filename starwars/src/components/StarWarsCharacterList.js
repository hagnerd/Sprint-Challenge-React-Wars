import React from "react";
import StarWarsCharacter from "./StarWarsCharacter";
import PropTypes from "prop-types";

export default function StarWarsCharacterList({ characters }) {
  return (
    <ul>
      {characters.map(character => {
        console.log(character["birth_year"]);

        return (
          <StarWarsCharacter
            key={character.url}
            name={character.name}
            height={character.height}
            gender={character.gender}
            birthYear={character["birth_year"]}
          />
        );
      })}
    </ul>
  );
}

StarWarsCharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      birth_year: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};
