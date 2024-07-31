const ErrorMessage = (props) => {
  return <>{props.items.length === 0 && <h3>No food Item Available</h3>}</>;
};

export default ErrorMessage;
