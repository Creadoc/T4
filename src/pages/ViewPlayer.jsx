import { Button } from "react-bootstrap";
import profile from "../assets/blank-profile-picture.png";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";
import "../components/layout/ViewPlayer.Module.css";

function ViewPlayer({ logout }) {
  const navigate = useNavigate();
  const lOut = () => {
    logout();
    navigate("../Home");
  };

  return (
    <div className="viewPlayerContainer">
      <div className="playerContainer">
        <Card border="dark" style={{ width: "22rem" }}>
          <Card.Img src={profile} />
          <Card.Body>
            <Card.Title className="text-center">Player1</Card.Title>
            <Card.Text className="text-center">
              Place favorite quote here.
            </Card.Text>
            <ButtonGroup vertical>
              <Button className="viewStats" variant="primary">
                View Stats
              </Button>
              <Button className="tournaments" variant="primary">
                Tournaments
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
        <Button onClick={lOut}>Logout</Button>
      </div>
    </div>
  );
}

export default ViewPlayer;
