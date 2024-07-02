// функция хук
import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";

function Counter() {
  // let count = 0;

  // const onPlus = () => {
  //   count += 1;
  // };

  // const onMinus = () => {
  //   count -= 1;
  // };

  // функция хук useState() возвращает массив из 2х элементов
  // 1 - состояние (переменная состояния). Может быть
  // 2 - функция, которая меняет это состояние

  // по умолчанию count - undefined, если мы ничего не передали в функцию useState()
  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount((prevValue) => {
      // console.log(prevValue);
      return prevValue + 1;
    });
  };

  const onMinus = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;