import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class Navbar2 extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={4}>hi</Col>

          <Col xs={4}>bye</Col>

          <Col xs={4}>ten</Col>
        </Row>
      </div>
    );
  }
}
