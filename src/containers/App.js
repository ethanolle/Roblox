import CardList from "../components/CardList";
import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import Scroll from "../components/Scroll";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [robotsList, setRobotsList] = useState([]);

  useEffect(() => {
    getRobots();
  }, []);

  const getRobots = async () => {
    let data;
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        data = response;
      });
    setRobots(data.data);
    setRobotsList(data.data);
  };

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
      <Scroll>
        <CardList robots={robotsList} />
      </Scroll>
    </div>
  );
}

//thats a comment
