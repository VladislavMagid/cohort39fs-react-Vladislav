import "./styles.css";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const add = (a, b) => {
  console.log(a + b);
};

add(1, 3);

function Lesson03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No job",
    hobby: "cooking",
    avatar: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "skating",
    avatar: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };



  return (
    <div className="lesson03-wrapper">
      {/* <Card
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
        avatar={homerSimpson.avatar}
      />
      <Card
        firstName={margeSimpson.firstName}
        lastName={margeSimpson.lastName}
        job={margeSimpson.job}
        hobby={margeSimpson.hobby}
        avatar={margeSimpson.avatar}
      />
      <Card
        firstName={bartSimpson.firstName}
        lastName={bartSimpson.lastName}
        job={bartSimpson.job}
        hobby={bartSimpson.hobby}
        avatar={bartSimpson.avatar}
      /> */}
      <Card userData = {homerSimpson}/>
      <Card userData = {margeSimpson}/>
      <Card userData = {bartSimpson}/>
      <Button buttonName={"get user data"}/>
      <Button buttonName={"delete user data"}/>
      <Button buttonName={"update user data"} />
    </div>
  );
}

export default Lesson03;
