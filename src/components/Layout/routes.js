import { lazy } from "react";
const Home = lazy(() => import("../../pages/Home"));
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add article",
    component: lazy(() => import("../../pages/AddArticle")),
  },
];

export default routes;
