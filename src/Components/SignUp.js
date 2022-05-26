import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignUp() {

  const [email, setEmail] = useState("");
 const [name, setName] = useState("")
 const [num, setNum] = useState("")
  const [password, setPassword] = useState("");
  function handleSubmit(event) {

    event.preventDefault();

  }

  return (
    <div>
    <div>
    <h2> Sign Up </h2>
    <br></br>
  </div>
  <div className="boxsgn">
     
    <div className="Login">

      <Form className="fields" onSubmit={handleSubmit}>

        <Form.Group className="lgb" size="lg" controlId="email">
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="lgb" size="lg" controlId="email">
          <Form.Control
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="lgb" size="lg" controlId="email">
          <Form.Control
            type="text"
            placeholder="Phone Number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="lgb" size="lg" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="lgb" size="lg" controlId="password">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="logb" block size="lg" type="submit">
          Sign Up
        </Button>
      </Form>

    </div>
  </div>
  </div>
  );

}