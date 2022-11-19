import CardAdd from './add';
import CardLogin from './login';
import React from 'react';
interface CardProps {
    children: React.ReactNode | React.ReactNode[];
    title: string;
}
declare function Card(props: CardProps): JSX.Element;
declare const _default: typeof Card & {
    Add: typeof CardAdd;
    Login: typeof CardLogin;
};
export default _default;
