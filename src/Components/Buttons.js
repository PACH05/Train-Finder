import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  text-decoration: none;
  background-color: black;
  color: white;
  padding: 0.6rem 1.6rem;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin-left: 2rem;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: grey;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  white-space: nowrap;
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
