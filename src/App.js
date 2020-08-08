import React, { useState } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import GridComp from "./components/GridComp";
import CardList from "./components/CardList";
import Navbar2 from "./components/Navbar2";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Bitcoin");
  return (
    <div className="App">
      <Navbar selectedTab={selectedTab} selectTab={setSelectedTab} />

      {/* <GridComp selectedTab={selectedTab} /> */}
      <CardList selectedTab={selectedTab} />
    </div>
  );
}

export default App;
