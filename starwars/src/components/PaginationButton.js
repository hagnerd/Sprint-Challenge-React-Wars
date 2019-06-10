import React from "react";
import PropTypes from "prop-types";

import "./PaginationButton.css";

export default function PaginationButton({ disabled, children, handleClick }) {
  return (
    <button
      disabled={disabled}
      className={`btn ${disabled && "dbtn-disabled"}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

PaginationButton.propTypes = {
  children: PropTypes.string.isRequired
};
