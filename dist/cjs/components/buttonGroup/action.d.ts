import React from 'react';
interface ButtonGroupActionProps {
    onEdit: string;
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
}
declare function ButtonGroupAction(props: ButtonGroupActionProps): JSX.Element;
export default ButtonGroupAction;
