import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
function App() {
  const [foodItems, setFoodItems] = useState([
    "Pizza",
    "Burger",
    "Fries",
    "Sweet",
    "Potato",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      const newItem = event.target.value;
      event.target.value = "";
      setFoodItems([...foodItems, newItem]);
    }
  };
  return (
    <Container>
      <h1 className="colorHeading">Healthy Food</h1>
      <FoodInput handleAddItem={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems foodList={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
