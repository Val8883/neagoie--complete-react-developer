import React from "react";
import "./card-item.styles.css";

export const CardItem = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <li className="card-container">
      <img
        src={`http://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
};
