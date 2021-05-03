import React from "react";
import { CardItem } from "../card-item/cart-item.component";
import "./card-list.styles.css";

export const CardList = ({ monsters }) => {
  return (
    <ul className="card-list">
      {monsters.map((monster) => (
        <CardItem monster={monster} key={monster.id} />
      ))}
    </ul>
  );
};
