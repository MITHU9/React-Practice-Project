import "./container.css";
const Container = (props) => {
  return <div className="itemContainer">{props.children}</div>;
};

export default Container;
