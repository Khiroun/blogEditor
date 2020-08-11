import React from "react";
import Nav from "./Nav";
import { Switch } from "react-router-dom";
import SwitchRoutes from "./SwitchRoutes";

const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <Switch>
        <SwitchRoutes />
      </Switch>
    </div>
  );
};

export default Layout;
