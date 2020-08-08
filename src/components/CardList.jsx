import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Row } from "react-bootstrap";
import CardItem from "./CardItem";

export default function CardList(props) {
  let [data, setData] = useState([]);
  let selectedNav = props.selectedTab;
  useEffect(() => {
    //initial Render
    Axios.get(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-08&sortBy=publishedAt&apiKey=aaf84b4926c54f50a1c6b412a0f458bc"
    ).then((d) => setData(d.data.articles));
  }, []);

  useEffect(() => {
    //Choosing the appropriate APIs
    let reqApi =
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-08&sortBy=publishedAt&apiKey=aaf84b4926c54f50a1c6b412a0f458bc";
    if (selectedNav === "Bitcoin") {
      reqApi =
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-08&sortBy=publishedAt&apiKey=aaf84b4926c54f50a1c6b412a0f458bc";
    }
    if (selectedNav === "US") {
      reqApi =
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aaf84b4926c54f50a1c6b412a0f458bc";
    }
    if (selectedNav === "Apple") {
      reqApi =
        "http://newsapi.org/v2/everything?q=apple&from=2020-08-07&to=2020-08-07&sortBy=popularity&apiKey=aaf84b4926c54f50a1c6b412a0f458bc";
    }
    if (selectedNav === "TechCrunch") {
      reqApi =
        "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aaf84b4926c54f50a1c6b412a0f458bc";
    }
    if (selectedNav === "WallStreet") {
      reqApi =
        "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=aaf84b4926c54f50a1c6b412a0f458bc";
    }

    Axios.get(reqApi).then((d) => setData(d.data.articles));
  }, [selectedNav]);

  return (
    <Row id="allCardsContainer">
      {data.map((item, ind) => {
        return <CardItem index={ind} item={item} />;
      })}
    </Row>
  );
}
