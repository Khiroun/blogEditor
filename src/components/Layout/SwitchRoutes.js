import React from "react";
import { Route } from "react-router-dom";
import routes from "./routes";

const SwitchRoutes = () => {
  return (
    <div className="page">
      {routes.map((r) => {
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
