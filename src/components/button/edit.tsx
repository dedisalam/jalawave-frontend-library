import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';

interface ButtonEditProps {
  href: string
}
function ButtonEdit(props: ButtonEditProps): JSX.Element {
  const { href } = props;
  return (
    <LinkContainer to={href}>
      <Button variant="warning" size="sm">
        <PencilFill />
        {' '}
        Edit
      </Button>
    </LinkContainer>
  );
}

export default ButtonEdit;
