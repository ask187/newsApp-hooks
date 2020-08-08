import React from "react";
import { Col } from "react-bootstrap";

import Footer from "./Footer";
export default function CardItem(props) {
  return (
    <Col xs={12} md={4}>
      <div
        style={{ position: "relative" }}
        id={`cardBox${props.index}`}
        className="cardBox"
      >
        <div
          id="img-holder"
          style={{
            // border: "2px solid black",
            height: "200px",
            maxHeight: "200px",
          }}
        >
          <img
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              height: "inherit",
              maxHeight: "inherit",
              width: "100%",
            }}
            src={props.item.urlToImage}
            alt="alternate text"
            className="image"
          />
        </div>
        <div style={{ textAlign: "center" }} id="content">
          <h3
            style={{
              maxHeight: "50px",
              margin: "15px 5px 5px",
              overflow: "hidden",
            }}
          >
            {props.item.title}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "5px",
              height: "150px",
              fontSize: "larger",
              overflow: "hidden",
            }}
          >
            {props.item.description}
          </div>
        </div>
        <div
          style={{
            padding: "5px",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            paddingLeft: "10px",
            height: "50px",
            width: "100%",
            maxHeight: "50px",
            position: "absolute",
            bottom: "0px",
            background: "lightGrey",
          }}
        >
          <Footer item={props.item} />
        </div>
      </div>
    </Col>
  );
}
