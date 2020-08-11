import { lazy } from "react";
const routes = [
  {
    path: "/",
    name: "home",
    component: lazy(() => import("../../pages/Home")),
  },
  {
    path: "/add",
    name: "Add article",
    component: lazy(() => import("../../pages/AddArticle")),
  },
];

export default routes;
