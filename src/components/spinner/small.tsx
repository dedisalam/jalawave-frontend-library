import React from 'react';
import { Spinner } from 'react-bootstrap';

function SpinnerSmall(): JSX.Element {
  return (
    <Spinner size="sm" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerSmall;
