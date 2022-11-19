import Button from '../button';
import React from 'react';
import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';

interface ButtonGroupActionProps {
  editLink: string
  deleteLink: string
}
function ButtonGroupAction(props: ButtonGroupActionProps): JSX.Element {
  const { editLink, deleteLink } = props;

  return (
    <ButtonToolbar aria-label="Toolbar button action">
      <ButtonGroup aria-label="Button group edit" className="me-2">
        <Button.Edit href={editLink} />
      </ButtonGroup>
      <ButtonGroup aria-label="Button group delete">
        <Button.Delete href={deleteLink} />
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default ButtonGroupAction;
