import { useState } from "react";
import "./foodItems.css";
import Item from "./Item";
const FoodItems = (props) => {
  const [activeItem, setActiveItem] = useState([]);
  const handleBuy = (item, event) => {
    console.log(`${item} purchased!`);
    let neItems = [...activeItem, item];
    setActiveItem(neItems);
  };
  return (
    <ul className="list-group">
      {props.foodList.map((food, index) => (
        <Item
          key={index}
          food={food}
          bought={activeItem.includes(food)}
          handleBuy={(event) => handleBuy(food, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
