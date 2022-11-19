import CardAdd from './add';
import CardLogin from './login';
import React from 'react';
import { Card as CardBS } from 'react-bootstrap';

interface CardProps {
  children: React.ReactNode | React.ReactNode[]
  title: string
}
function Card(props: CardProps): JSX.Element {
  const { children, title } = props;
  return (
    <CardBS className="shadow-sm">
      <CardBS.Body>
        <CardBS.Title className="lh-base">
          {title}
        </CardBS.Title>
        <hr />
        {children}
      </CardBS.Body>
    </CardBS>
  );
}

export default Object.assign(Card, {
  Add: CardAdd,
  Login: CardLogin,
});
