import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface TemplateLoadingProps {
  children: React.ReactNode | React.ReactNode[]
}
function TemplateLoading(props: TemplateLoadingProps): JSX.Element {
  const { children } = props;
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center min-vh-100">
        <Col md={4}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default TemplateLoading;
