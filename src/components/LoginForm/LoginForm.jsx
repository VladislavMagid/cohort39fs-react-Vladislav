import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  {
    /* Пример работы с onClick */
  }
  // const clickOnMe = (event, someAttr) => {
  //   console.log(event);
  //   console.log(someAttr);
  //   console.log("Trigger on button works, button is clicked");
  // };
  const loginUser = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("User logged in succesfully")
  };
  return (
    <div className="login-form-component">
      <p className="title-login-form">Login form</p>
      <Input
        name="email"
        type="text"
        placeholder="Enter your email"
        label="Email"
      />
      <Input
        name="password"
        type="text"
        placeholder="Enter your password"
        label="Password"
      />
      <Button onClick={loginUser} name="Login" type="submit" />
      {/* Пример работы с тригерами */}
      {/* <button onClick={(event)=> {clickOnMe(event, "some message")}} className="button-click" type="button">
        Click me!
      </button> */}
    </div>
  );
}

export default LoginForm;
