/**
 * variable de config des routes
 */
const routeConfig = {
  route: [
    {
      path: "/thumbail",
      initialisation: undefined,
      templateUrl: "/view/thumbnail.html",
    },
    {
      path: "/",
      initialisation: undefined,
      templateUrl: "/view/home.html",
    },
    {
      path: "/break",
      initialisation: undefined,
      templateUrl: "/view/templateQuiExistePasSurLeServeur.html",
    },
  ],
};

class Router {
  handleRoute() {
    const pathName = location.pathname;
    console.log(pathName);
  }
  /**
   * navigate to
   * @param {string} patName chmin commencant par /
   */
  changeRoute(pathName) {}
}
const router = new this.router();
router.handleRoute();
router.changeRoute();
