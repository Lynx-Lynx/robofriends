import React from "react";
import "../styles/Card.css";

const Card = ({ username, catchPhrase, id }) => {
  return (
    <div className="tc dib pa3 ma2 grow bw2 shadow-5 card">
      <img alt="robots" src={`https://robohash.org/${id}`} />
      <div>
        <h2>@{username}</h2>
        <p>{catchPhrase}</p>
      </div>
    </div>
  );
};

export default Card;
