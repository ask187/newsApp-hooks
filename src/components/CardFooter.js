import React from "react";
import { Col, Row } from "react-bootstrap";

export default function CardFooter(props) {
  return (
    <div>
      <Row>
        <Col md={3}>{props.author}</Col>
        <Col md={3}> hello</Col>
      </Row>
    </div>
  );
}
