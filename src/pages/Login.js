import React, { useCallback, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import app from "../base";
import { AuthContext } from "../Auth";
import { Container, Form, Button, Modal, Spinner } from "react-bootstrap";

const LoadingModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Loading</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            width: "30vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner animation="grow" />
        </Modal.Body>
      </Modal>
    </>
  );
};

const Login = ({ history }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      setLoading(true);
      try {
        const response = await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) return <Redirect to="/" />;
  return (
    <Container>
      <LoadingModal show={loading} setShow={setLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Control name="email" type="email" placeholder="Email" />
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
