import React from "react";
import RegisterForm from "../components/layout/RegisterForm";
import bg from "../assets/homeBG.png";

function Register() {
  return (
    <div className="registerContainer">
      <div className="registerFormContainer">
        <h2>Create an Account</h2>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
