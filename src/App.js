import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Bitcoin");
  return (
    <div className="App">
      <Navbar selectedTab={selectedTab} selectTab={setSelectedTab} />

      <CardList selectedTab={selectedTab} />
    </div>
  );
}

export default App;
