import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface TemplateTableProps {
  children: React.ReactNode | React.ReactNode[]
}
function TemplateTable(props: TemplateTableProps): JSX.Element {
  const { children } = props;
  return (
    <Row className="p-1 g-2">
      <Col>
        {children}
      </Col>
    </Row>
  );
}

export default TemplateTable;
