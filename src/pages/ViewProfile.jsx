import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import img from "../assets/blank-profile-picture.png";
import Profile from "../components/Profile";
/*
  shorten and center form
*/
function ViewProfile() {
  return (
    <div className="profileContainer">
      <Profile />
    </div>
  );
}

export default ViewProfile;
