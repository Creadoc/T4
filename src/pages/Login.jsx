import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ authenticate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [userData, setUserData] = useState([]);

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
        setUserData(response.data);
        authenticate();
        console.log("userData: ", userData);
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
                  //this below stops the function from reloading the page
                  //e.preventDefault();
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
                  //this below stops the function from reloading the page
                  e.preventDefault();
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
        {userData.map((user, idx) => {
          return (
            <p key={idx}>
              {user.user_id}, {user.username}, {user.firstName}, {user.lastName}
              , {user.password}
            </p>
          );

          //(
          //  <ul key={idx}>
          //    <li>{user.username}</li>
          //    <li>{user.user_id}</li>
          //    <li>{user.email}</li>
          //    <li>{user.firstName}</li>
          //    <li>{user.lastName}</li>
          //  </ul>
          //);

          //<p key={idx}>{user.user_id}</p>;
        })}
      </div>
    </div>
  );
}

export default Login;
