import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  return (
    <div className="login-form-component">
      <p className="title-login-form">Login form</p>
        <Input
          name={"email"}
          type={"text"}
          placeholder={"Enter your email"}
          label={"Email"}
        />
        <Input
          name={"password"}
          type={"text"}
          placeholder={"Enter your password"}
          label={"Password"}
        />
      <Button name={"Login"} type={"button"} />
    </div>
  );
}

export default LoginForm;
