import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import pfp_AMackey100 from "../assets/pfp_AMackey100.jpg";
import pfp_UAGamer7 from "../assets/pfp_UAGamer7.jpg";
import pfp_Player1 from "../assets/pfp_Player1.jpg";

function Leaderboard() {
  return (
    <div className="homeContainer">
      <div className="featured li">
        <h1>Featured Players:</h1>
        <div class="card-group">
          <Card border="dark" style={{ width: "13rem" }}>
            <Card.Img src={pfp_Player1} />
            <Card.Body>
              <Card.Title className="">Player1</Card.Title>
              <Card.Text className="">
                <p>Rank: 1st</p>
                <p>ELO Rating: 2470</p>
              </Card.Text>
              <ButtonGroup vertical>
                <Button className="" variant="primary">
                  View Profile
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>

          <Card border="dark" style={{ width: "13rem" }}>
            <Card.Img src={pfp_UAGamer7} />
            <Card.Body>
              <Card.Title className="">UAGamer7</Card.Title>
              <Card.Text className="">
                <p>Rank: 2nd</p>
                <p>ELO Rating: 2470</p>
              </Card.Text>
              <ButtonGroup vertical>
                <Button className="" variant="primary">
                  View Profile
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>

          <Card border="dark" style={{ width: "13rem" }}>
            <Card.Img src={pfp_AMackey100} />
            <Card.Body>
              <Card.Title className="">AMackey100</Card.Title>
              <Card.Text className="">
                <p>Rank: 3rd</p>
                <p>ELO Rating: 2000</p>
              </Card.Text>
              <ButtonGroup vertical>
                <Button className="" variant="primary">
                  View Profile
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
      <h1>Lifetime Standings</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Placement</th>
            <th>Username</th>
            <th>ELO Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st</td>
            <td>Player1</td>
            <td>2340</td>
          </tr>

          <tr>
            <td>2nd</td>
            <td>UAGamer7</td>
            <td>2170</td>
          </tr>

          <tr>
            <td>3rd</td>
            <td>AMackey100</td>
            <td>2000</td>
          </tr>

          <tr>
            <td>4th</td>
            <td>DYocum01</td>
            <td>1980</td>
          </tr>

          <tr>
            <td>5th</td>
            <td>AEvans01</td>
            <td>1970</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Leaderboard;
