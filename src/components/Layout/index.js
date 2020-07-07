import React from "react";
import Nav from "./Nav";
import { Switch } from "react-router-dom";
import SwitchRoutes from "./SwitchRoutes";
import { ArticleProvider } from "../../pages/AddArticle/ArticleContext";

const Layout = () => {
  return (
    <div className="layout">
      <ArticleProvider>
        <Nav />
        <Switch>
          <SwitchRoutes />
        </Switch>
      </ArticleProvider>
    </div>
  );
};

export default Layout;
