import React from "react";
import bg from "../assets/homeBG.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import cardimg from '../assets/login.png';
function Home() {
    return (

        <div className="homeContainer">
            <div className="header">
                <img className="bg" src={bg} />
                <h1 className="welcome">Welcome to Smash Tournament Brackets</h1>
                <p className="intro">With SMTB you will be able to Create A Real Gaming Community where
                    users can create teams, fight matches and manage tournaments. What are you waiting for?
                    Start today!</p>
            </div>
            <div className="upcoming">
                <h1>Upcoming Tournaments:</h1>
                <ul>
                    <li>
                        <Card border="dark" style={{ width: '22rem' }}>
                            <Card.Img src={cardimg} />
                            <Card.Body>
                                <Card.Title className="">Tournament 1</Card.Title>
                                <Card.Text className="">
                                    <p>Location: UAFS</p>
                                    <p>Time: 7:30 p.m.</p>
                                    <p>Date: March 1st, 2022</p>
                                </Card.Text>
                                <ButtonGroup vertical>
                                    <Button className="" variant="primary">View Bracket</Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </li>
                    <li>
                        <Card border="dark" style={{ width: '22rem' }}>
                            <Card.Img src={cardimg} />
                            <Card.Body>
                                <Card.Title className="">Tournament 1</Card.Title>
                                <Card.Text className="">
                                    <p>Location: UAFS</p>
                                    <p>Time: 7:30 p.m.</p>
                                    <p>Date: March 1st, 2022</p>
                                </Card.Text>
                                <ButtonGroup vertical>
                                    <Button className="" variant="primary">View Bracket</Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </li><li>
                        <Card border="dark" style={{ width: '22rem' }}>
                            <Card.Img src={cardimg} />
                            <Card.Body>
                                <Card.Title className="">Tournament 1</Card.Title>
                                <Card.Text className="">
                                    <p>Location: UAFS</p>
                                    <p>Time: 7:30 p.m.</p>
                                    <p>Date: March 1st, 2022</p>
                                </Card.Text>
                                <ButtonGroup vertical>
                                    <Button className="" variant="primary">View Bracket</Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </li><li>
                        <Card border="dark" style={{ width: '22rem' }}>
                            <Card.Img src={cardimg} />
                            <Card.Body>
                                <Card.Title className="">Tournament 1</Card.Title>
                                <Card.Text className="">
                                    <p>Location: UAFS</p>
                                    <p>Time: 7:30 p.m.</p>
                                    <p>Date: March 1st, 2022</p>
                                </Card.Text>
                                <ButtonGroup vertical>
                                    <Button className="" variant="primary">View Bracket</Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </li>
                    <li><a href="/TournamentList"><Button className="moreTournies">See More...</Button></a></li>
                </ul>
            </div>
        </div>

    );

}

export default Home;