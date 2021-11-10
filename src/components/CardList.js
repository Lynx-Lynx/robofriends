import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((user, i) => {
        return (
          <Card
            id={robots[i].id}
            username={robots[i].username}
            catchPhrase={robots[i].company.catchPhrase}
          />
        );
      })}
    </>
  );
};

export default CardList;
