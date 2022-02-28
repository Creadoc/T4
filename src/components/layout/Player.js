import React from "react";
import profile from "../../assets/blank-profile-picture.png";
import "./ViewPlayer.Module.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function Player() {
  return (

    <div className="playerContainer">
      <Card className="playerCard" border="dark">
        <Card.Img src={profile}/>
        <Card.Body>
          <Card.Title className="text-center">Player1</Card.Title>
          <Card.Text className="text-center">
            Place favorite quote here.
          </Card.Text>
          <ButtonGroup vertical>
          <Button className="viewStats" variant="primary">View Stats</Button>
          <Button className="tournaments" variant="primary">Tournaments</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Player;
