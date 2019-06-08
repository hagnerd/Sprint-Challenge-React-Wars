import React from 'react'
import PropTypes from 'prop-types'

export default function StarWarsCharacter({ name, birthYear, height, gender }) {
  return (
    <li>
      <h3>{name}</h3>
      <h4>General Information</h4>
      <ul>
        <li>Born: {birthYear}</li>
        <li>Height: {height}</li>
        <li>Gender: {gender}</li>
      </ul>
    </li>
  )
}

StarWarsCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
}
