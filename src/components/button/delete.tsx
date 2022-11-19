import React from 'react';
import { Button } from 'react-bootstrap';
import { Trash3Fill } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';

interface ButtonDeleteProps {
  href: string
}
function ButtonDelete(props: ButtonDeleteProps): JSX.Element {
  const { href } = props;
  return (
    <LinkContainer to={href}>
      <Button variant="danger" size="sm">
        <Trash3Fill />
        {' '}
        Edit
      </Button>
    </LinkContainer>
  );
}

export default ButtonDelete;
