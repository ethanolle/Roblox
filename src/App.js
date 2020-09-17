import CardList from "./components/CardList";
import { robots } from "./components/robots";
import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
export default function App() {
  const [searchInfo, setSearchInfo] = useState("");
  const [robotsList, setRobotsList] = useState(robots);

  const onSearchChange = (event) => {
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setRobotsList(filteredRobots);
  };
  return (
    <div className="tc">
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={robotsList} />
    </div>
  );
}

//thats a comment
