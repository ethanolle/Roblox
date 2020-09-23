import React from "react";
import Card from "./Card";
function CardList({ robots }) {
  if (robots) {
    return robots.map((robot, i) => {
      return (
        <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
      );
    });
  } else {
    return <h1>test</h1>;
  }
}

export default CardList;
