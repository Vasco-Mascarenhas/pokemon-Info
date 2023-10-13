import React from "react";
import "./card.css";
const Card = ({ id, children, cardClick }) => {
  return (
    <div id={id} className="card" onClick={cardClick}>
      {children}
    </div>
  );
};

export default Card;
