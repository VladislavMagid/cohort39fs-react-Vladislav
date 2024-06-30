import "./styles.css";

function Card({userData}) {

  const{avatar, firstName, lastName, hobby, job} = userData;

  return (
    <div className="Card-component">
      <div className="avatar-homer">
        <img id="homer" src={avatar} alt="Homer Simpson-photo" />
      </div>
      <p>Name: {firstName} {lastName} </p>
      <p>Job: {job}  </p>
      <p>Hobbys: {hobby} </p>
    </div>
  );
}

export default Card;
