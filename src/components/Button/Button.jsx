import "./styles.css";

// function Button({name, type, onClick}) {
//   return (
//     <button onClick={onClick} className="button-component" type={type}>
//       {name}
//     </button>
//   );
// }

import "./styles.css";

function Button({ type = "button", name = "Send", onClick }) {  
  return (
    <button onClick={onClick} type={type} className="button-component">
      {name}
    </button>
  );
}

export default Button;


