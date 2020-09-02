import { lazy } from "react";
const routes = [
  {
    path: "/",
    name: "home",
    component: lazy(() => import("../../pages/Home")),
    private: true,
  },
  {
    path: "/add",
    name: "Add article",
    component: lazy(() => import("../../pages/AddArticle")),
    private: true,
  },
  {
    path: "/login",
    name: "Login",
    component: lazy(() => import("../../pages/Login")),
  },
];

export default routes;
