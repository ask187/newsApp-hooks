import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Footer(props) {
  return (
    <div
      style={{
        height: "inherit",
        display: "grid",
      }}
    >
      <Row>
        <Col xs={12} id="authorName">
          {props.item.author}
        </Col>
      </Row>
      <Row>
        <Col id="publishedAt" xs={12}>
          {props.item.publishedAt}
        </Col>
      </Row>
    </div>
  );
}
