import { useContext } from "react";
import Card from "../components/Card";
import { UserContext } from "../contexts/userContext";

const About = () => {
  const [state, dispatch] = useContext(UserContext);
  return (
    <div>
      <div className="d-flex justify-content-center aligin-items-center">
        <h1>ini adalah about</h1>
      </div>
      <Card title="halo ini dari parent" description="description" />
      <div>aowkdoakwdokad</div>
    </div>
  );
};

export default About;
