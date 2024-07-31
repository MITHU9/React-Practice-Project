import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
function App() {
  const [text, setText] = useState("New Item Added!");
  const foodList = ["Pizza", "Burger", "Fries", "Sweet", "Potato"];
  // let textToShow = "New Item Added!";
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
    // textToShow = event.target.value;
  };
  return (
    <Container>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodList}></ErrorMessage>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{text}</p>
      <FoodItems foodList={foodList}></FoodItems>
    </Container>
  );
}

export default App;
