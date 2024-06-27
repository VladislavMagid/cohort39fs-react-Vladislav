import "./styles.css";
import homer from "../../assets/homer-simpson.jpg";

function Card() {
  return (
    <div className="Card-component">
      <div className="avatar-homer">
        <img id="homer" src={homer} alt="Homer Simpson-photo" />
      </div>
      <p>Name: Homer Simpson </p>
      <p>Profession: Nuclear safety inspector </p>
      <p>Hobbys: Donuts, Duff beer, and eating</p>
    </div>
  );
}

export default Card;
