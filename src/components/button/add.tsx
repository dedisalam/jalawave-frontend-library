import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';

interface ButtonAddProps {
  href: string
}
function ButtonAdd(props: ButtonAddProps): JSX.Element {
  const { href } = props;
  return (
    <LinkContainer to={href}>
      <Button variant="success" size="sm">
        <PencilFill />
        {' '}
        Add
      </Button>
    </LinkContainer>
  );
}

export default ButtonAdd;
