import React from "react";
import PropTypes from "prop-types";

export default function StarWarsCharacter({ name, birthYear, height, gender }) {
  return (
    <li className="character">
      <h3 className="character-name">{name}</h3>
      <h4>General Information</h4>
      <ul>
        <li>
          <span className="bold">Born:</span> {birthYear}
        </li>
        <li>
          <span className="bold">Height:</span> {height}
        </li>
        <li>
          <span className="bold">Gender:</span> {gender}
        </li>
      </ul>
    </li>
  );
}

StarWarsCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
};
