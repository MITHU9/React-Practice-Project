import "./foodItems.css";
import Item from "./Item";
const FoodItems = (props) => {
  const handleBuy = (item) => {
    console.log(`${item} purchased!`);
  };
  return (
    <ul className="list-group">
      {props.foodList.map((food) => (
        <Item key={food} food={food} handleBuy={() => handleBuy(food)}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
