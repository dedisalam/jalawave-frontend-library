import React from 'react';
import { Card } from 'react-bootstrap';

interface CardLoginProps {
  children: React.ReactNode | React.ReactNode[]
}
function CardLogin(props: CardLoginProps): JSX.Element {
  const { children } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">Login</Card.Title>
        <hr />
        {children}
      </Card.Body>
    </Card>
  );
}

export default CardLogin;
