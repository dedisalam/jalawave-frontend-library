import React from 'react';
interface CardAddProps {
    children: React.ReactNode | React.ReactNode[];
    title: string;
    href: string;
}
declare function CardAdd(props: CardAddProps): JSX.Element;
export default CardAdd;
