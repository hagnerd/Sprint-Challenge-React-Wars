import React from "react";
import PaginationButton from "./PaginationButton";
import PropTypes from "prop-types";

import "./Pagination.css";

export default function Pagination({
  handlePrevClick,
  handleNextClick,
  isPrevLinkDisabled,
  isNextLinkDisabled
}) {
  return (
    <footer className="pagination-container">
      <PaginationButton
        disabled={isPrevLinkDisabled}
        handleClick={handlePrevClick}
      >
        Previous Page
      </PaginationButton>
      <PaginationButton
        disabled={isNextLinkDisabled}
        handleClick={handleNextClick}
      >
        Next Page
      </PaginationButton>
    </footer>
  );
}

Pagination.propTypes = {
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  isPrevLinkDisabled: PropTypes.bool.isRequired,
  isNextLinkDisabled: PropTypes.bool.isRequired
};
