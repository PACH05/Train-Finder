import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (
    <div>
    <div>
    <h2> Login </h2>
    <br></br>
  </div>
  <div className="box">
     
    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <Form.Group className="lgb" size="lg" controlId="email">

          <Form.Control
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />

        </Form.Group>

        <Form.Group className="lgb" size="lg" controlId="password">

          <Form.Control

            type="password"
            placeholder="Password"
            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <Button className="logb" block size="lg" type="submit">

          Login

        </Button>

      </Form>

    </div>
  </div>
  </div>
  );

}
