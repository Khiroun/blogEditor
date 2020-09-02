import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import app from "../base";
import { AuthContext } from "../Auth";
import { Container, Form, Button } from "react-bootstrap";
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      console.log("Submitting");
      const { email, password } = event.target.elements;
      try {
        const response = await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        console.log({ response });
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) return <Redirect to="/" />;
  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button variant="primary" role="submit">
          Log In
        </button>
      </form>
    </Container>
  );
};

export default Login;
