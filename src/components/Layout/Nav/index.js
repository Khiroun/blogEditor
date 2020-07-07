import React from "react";

import routes from "../routes";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        {routes.map((r, i) => {
          return (
            <li key={r.name + r.path + i}>
              <Link to={r.path}>{r.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
