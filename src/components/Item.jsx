import "./item.css";
const Item = (props) => {
  return (
    <li className="list-group-item color">
      {props.food}
      <button type="button" className="btn btn-info" onClick={props.handleBuy}>
        Buy
      </button>
    </li>
  );
};

export default Item;
