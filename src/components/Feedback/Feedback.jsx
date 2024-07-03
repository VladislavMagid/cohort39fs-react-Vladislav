import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";

function Feedback() {
  const [countLikes, setLike] = useState(0);

  const [countDislikes, setDislike] = useState(0);

  const like = () => {
    setLike((prevValue) => {
      return prevValue + 1;
    });
  };

  const dislike = () => {
    setDislike((prevValue) => {
      return prevValue + 1;
    });
  };

  const recet = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-control">
        <Button name="Like" onClick={like} />
      </div>
      <p className="count-of-likes">{countLikes}</p>
      <div className="button-control">
        <Button name="Dislike" onClick={dislike} />
      </div>
      <p className="count-of-dislikes">{countDislikes}</p>
      <div className="button-control">
        <Button name="Reset Results" onClick={recet} />
      </div>
    </div>
  );
}

export default Feedback;
