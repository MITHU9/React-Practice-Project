import "./foodInput.css";
const FoodInput = (props) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item....."
      onChange={props.handleOnChange}
    />
  );
};

export default FoodInput;
