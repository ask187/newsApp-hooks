import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Col, Row } from "react-bootstrap";

import Card from "./Card";
export default function GridComp(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-08&sortBy=publishedAt&apiKey=aaf84b4926c54f50a1c6b412a0f458bc"
    ).then((d) => setData(d.data.articles));
  }, []);
  console.log(data);
  return (
    <div className="grid-container">
      <Row>
        {data.length > 1 &&
          data.map((article) => (
            <Col md={5} xs={12} className="grid-item">
              <Card author={article} />
            </Col>
          ))}
      </Row>
    </div>
  );
}
