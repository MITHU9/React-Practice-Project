import "./item.css";
const Item = (props) => {
  return (
    <li className={`list-group-item color ${props.bought && "active"}`}>
      <span>{props.food}</span>
      <button type="button" className="btn btn-info" onClick={props.handleBuy}>
        Buy
      </button>
    </li>
  );
};

export default Item;
