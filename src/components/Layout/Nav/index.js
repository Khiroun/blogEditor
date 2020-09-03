import React from "react";

import routes from "../routes";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar bg="light">
      <Nav>
        {routes.map((r, i) => {
          return (
            <Nav.Link key={r.name + r.path + i}>
              <Link to={r.path}>{r.name}</Link>
            </Nav.Link>
          );
        })}
      </Nav>
    </Navbar>
  );
};

export default MyNav;
