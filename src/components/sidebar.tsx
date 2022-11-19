import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

interface SidebarProps {
  data: {
    id: string,
    link: string,
    label: string
  }[]
}
function Sidebar(props: SidebarProps): JSX.Element {
  const { data } = props;
  return (
    <Card>
      <ListGroup variant="flush">
        {
          data.map((item) => (
            <LinkContainer to={item.link} key={item.id}>
              <ListGroupItem action href={item.link}>
                {item.label}
              </ListGroupItem>
            </LinkContainer>
          ))
        }
      </ListGroup>
    </Card>
  );
}

export default Sidebar;
