import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ authenticate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const getAll = () => {
    Axios.post("http://localhost:3001/getAllUsers", {}).then((response) => {
      if (response.data.message) {
        console.log("there was an issue with get all");
        setLoginStatus(response.data.message);
        console.log(response.data.message);
      } else {
        //returned all users, from our API call hopefully
        console.log(response.data);
      }
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/emailLogin", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log(response.data.message);
      } else {
        //a user was returned from our API call
        setLoginStatus(response.data[0].username);
        //navigate("/Home");
        console.log(response.data[0].username);
        console.log(response.data[0]);
        authenticate();
        //getAll();
      }
    });
  };

  return (
    <div className="loginContainer">
      <div className="formContainer">
        <h2>Welcome Back!</h2>
        <>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div className="loginButton"></div>
          </Form>
          <Button
            className="loginBtn"
            variant="primary"
            type="submit"
            onClick={login}
          >
            Login
          </Button>
          <div>{loginStatus}</div>
        </>
      </div>
    </div>
  );
}

export default Login;
