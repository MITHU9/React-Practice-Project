import "./foodInput.css";
const FoodInput = (props) => {
  return (
    <div className="inputItem">
      <input
        type="text"
        placeholder="Enter Food Item....."
        onKeyDown={props.handleAddItem}
      />
    </div>
  );
};

export default FoodInput;
