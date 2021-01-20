import React from "react";

import PropTypes from "prop-types";
import { Container, Previous, Next, Wrapper } from "./styles";

export default function Paginator({
  total,
  page,
  limit,
  previousIcon,
  nextIcon,
  handlePaginator,
}) {
  if (limit === 0) {
    throw new Error("Limit cannot be zero");
  }

  const div = total / limit;
  const activePrevious = page <= 1;
  const activeNext = page >= div;
  const pages = Math.ceil(div);

  return (
    <Wrapper>
      <Container>
        <Previous
          type="button"
          disabled={activePrevious}
          onClick={() => handlePaginator(page - 1)}
        >
          {previousIcon || null}
          <span>Previous</span>
        </Previous>
        <Next
          type="button"
          disabled={activeNext}
          onClick={() => handlePaginator(page + 1)}
        >
          {nextIcon || null}
          <span>Next</span>
        </Next>
      </Container>

      <span>
        Page {page || 1} of {pages || 1}. Total of {total} records.
      </span>
    </Wrapper>
  );
}

Paginator.propTypes = {
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  handlePaginator: PropTypes.func.isRequired,
  previousIcon: PropTypes.instanceOf(Object),
  nextIcon: PropTypes.instanceOf(Object),
};

Paginator.defaultProps = {
  previousIcon: null,
  nextIcon: null,
};
