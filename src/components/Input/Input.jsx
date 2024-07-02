import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input-component"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
