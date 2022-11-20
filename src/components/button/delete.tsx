import React from 'react';
import { Button } from 'react-bootstrap';
import { Trash3Fill } from 'react-bootstrap-icons';

interface ButtonDeleteProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
function ButtonDelete(props: ButtonDeleteProps): JSX.Element {
  const { onClick } = props;
  return (
    <Button variant="danger" size="sm" onClick={onClick}>
      <Trash3Fill />
      {' '}
      Delete
    </Button>
  );
}

export default ButtonDelete;
