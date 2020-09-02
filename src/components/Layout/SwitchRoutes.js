import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes from "./routes";

const SwitchRoutes = () => {
  return (
    <div className="page">
      {routes.map((r) => {
        if (r.private) {
          return (
            <PrivateRoute
              path={r.path}
              exact={true}
              component={r.component}
              key={`page${r.path}`}
            />
          );
        } else
          return (
            <Route
              path={r.path}
              exact={true}
              component={r.component}
              key={`page${r.path}`}
            />
          );
      })}
    </div>
  );
};

export default SwitchRoutes;
