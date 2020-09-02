import React from "react";
import Nav from "./Nav";
import { Switch } from "react-router-dom";
import SwitchRoutes from "./SwitchRoutes";
import { AuthProvider } from "../../Auth";

const Layout = () => {
  return (
    <AuthProvider>
      <div className="layout">
        <Nav />
        <Switch>
          <SwitchRoutes />
        </Switch>
      </div>
    </AuthProvider>
  );
};

export default Layout;
