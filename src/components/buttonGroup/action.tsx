import ButtonEdit from '../button/edit';
import ButtonDelete from '../button/delete';
import React from 'react';
import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';

interface ButtonGroupActionProps {
  onEdit: string
  onDelete: React.MouseEventHandler<HTMLButtonElement>
}
function ButtonGroupAction(props: ButtonGroupActionProps): JSX.Element {
  const { onEdit, onDelete } = props;

  return (
    <ButtonToolbar aria-label="Toolbar button action">
      <ButtonGroup aria-label="Button group edit" className="me-2">
        <ButtonEdit href={onEdit} />
      </ButtonGroup>
      <ButtonGroup aria-label="Button group delete">
        <ButtonDelete onClick={onDelete} />
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default ButtonGroupAction;
