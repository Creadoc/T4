import React from "react";
import LoginForm from "../components/layout/LoginForm";

function Login() {
  return (
    <div className="loginContainer">
      <div className="formContainer">
        <h2>Welcome Back!</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
