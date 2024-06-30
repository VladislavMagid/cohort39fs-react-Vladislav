import "./styles.css";

function Button({buttonName}) {
  console.log(buttonName);
  return <button className="button-component">{buttonName}</button>;
}

export default Button;
