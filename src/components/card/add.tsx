import ButtonAdd from '../button/add';
import React from 'react';
import { Card as CardBS } from 'react-bootstrap';

interface CardAddProps {
  children: React.ReactNode | React.ReactNode[]
  title: string
  href: string
}
function CardAdd(props: CardAddProps): JSX.Element {
  const { children, title, href } = props;
  return (
    <CardBS className="shadow-sm">
      <CardBS.Body>
        <CardBS.Title className="d-flex justify-content-between lh-base">
          {title}
          <ButtonAdd href={href} />
        </CardBS.Title>
        <hr />
        {children}
      </CardBS.Body>
    </CardBS>
  );
}

export default CardAdd;
