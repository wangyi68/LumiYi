import routes from "../config/routes";

import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Games from "../pages/Games";
import Specs from "../pages/Specs";
import NotFound from "../pages/404";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/Projects/projectsInfo";
import Pinterest from "../pages/Pinterest";
import Contact from "../pages/Contact";

const routeComponents = {
  home: Home,
  about: About,
  skill: Skills,
  games: Games,
  projects: Projects,
  specs: Specs,
  pinterest: Pinterest,
  contact: Contact,
  projectDetails: ProjectDetails,
  notfound: NotFound,
};

const publicRoutes = Object.entries(routes).map(([key, path]) => ({
  path,
  component: routeComponents[key],
}));

const privateRoutes = [];

export { publicRoutes, privateRoutes };
