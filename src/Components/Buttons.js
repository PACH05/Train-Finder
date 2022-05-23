import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  text-decoration: none;
  background-color: black;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: grey;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

function Buttons() {
  return (
    <div>
      <div className="buttons">
        <div className="buttonlogin">
          <Button to="/login">Login</Button>
        </div>
        <div className="buttonsign">
          <Button to="/signup">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
