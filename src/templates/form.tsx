import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface TemplateFormProps {
  children: React.ReactNode | React.ReactNode[]
}
function TemplateForm(props: TemplateFormProps): JSX.Element {
  const { children } = props;
  return (
    <Row className="p-1 g-2">
      <Col lg={{ span: 6 }}>
        {children}
      </Col>
    </Row>
  );
}

export default TemplateForm;
