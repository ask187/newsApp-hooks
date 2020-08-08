import React from "react";
import { Row, Col } from "react-bootstrap";
import CardFooter from "./CardFooter";

export default function Card(props) {
  console.log(props);
  let article = props.author;
  return (
    <div
      className="container"
      style={{
        padding: "0",
        // border: "2px solid black",
        height: "500px",
        position: "relative",
        borderRadius: "26px",
        boxShadow: "rgb(195 195 195)` 17px 13px 20px 0px",
      }}
    >
      <div
        className="image-holder"
        style={{
          padding: "0px",
          margin: "0px",
          width: "100%",
          position: "absolute",
          height: "200px",
          left: "0px",
          //   padding: "0px",
          //   margin: "0px",
        }}
      >
        <img
          src={article.urlToImage}
          alt="Girl in a jacket"
          width="100%"
          height="200px"
          style={{
            position: "relative",
            left: "0px",
            margin: "0px",
            borderTopRightRadius: "26px",
            borderTopLeftRadius: "26px",
          }}
        />
      </div>
      <span
        style={{
          position: "relative",
          padding: "10px",
          border: "2px solid black",
          top: "190px",
          background: "black",
          color: "white",
          fontWeight: "bolder",
        }}
        className="category"
      >
        {article.source.name}
      </span>
      <div
        style={{
          padding: "13px",
          background: "#b9eeff",
          height: "200px",
          position: "absolute",
          top: "250px",
        }}
        className="content-container"
      >
        <div
          className="content-headline"
          style={{
            maxHeight: "45px",
            fontWeight: "bolder",
            fontSize: "large",
            overflow: "hidden",
          }}
        >
          {article.title}
        </div>
        <div className="content-content">{article.content}</div>
      </div>

      <div style={{ bottom: "0px", position: "absolute" }} className="footer">
        <CardFooter author={article.author} />
      </div>
    </div>
  );
}
