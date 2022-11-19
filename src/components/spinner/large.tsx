import React from 'react';
import { Spinner } from 'react-bootstrap';

function SpinnerLarge(): JSX.Element {
  return (
    <Spinner className="d-block m-auto" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerLarge;
