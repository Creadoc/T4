import { Link } from "react-router-dom";
import "./MainNavigation.css";
import { Nav, Navbar, Container, NavDropdown, Form } from 'react-bootstrap';
import logo from "../../assets/SMTB.PNG"
import profile from "../../assets/blank-profile-picture.png";
function MainNavigation() {
  return (
    <>
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home"><img className="logo" src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/TournamentList">Tournaments</Nav.Link>
              <Nav.Link href="#">Page</Nav.Link>
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                <NavDropdown.Item href="/ViewPlayer">View Player</NavDropdown.Item>
                <NavDropdown.Item href="ViewProfile">View Profile</NavDropdown.Item>
                <NavDropdown.Item href="ForgotPassword">Forgot Password</NavDropdown.Item>
              </NavDropdown>
              <Container>
                <Form>
                  <Form.Control classname="bar" placeholder="Search" />
                  <button type="button" className="btn btn-warning">
                    <svg width="15px" height="15px">
                      <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                    </svg>
                  </button>
                </Form>
              </Container>
            </Nav>
            <NavDropdown title="Player1" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown>

            <img className="profile" src={profile} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavigation;
