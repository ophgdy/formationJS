/**
 * variable de config des routes
 */
const routeConfig = {
  route: [
    {
      path: "/thumbnail",
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
  #currentRoute;
  get currentRoute() {
    return this.#currentRoute;
  }
  /**
   * manage la route en cours
   */
  handleRoute() {
    const pathName = location.pathname;
    this.#currentRoute = routeConfig.route.find(
      (route) => route.path === pathName
    );
  }
  /**
   * navigate to
   * @param {string} patName chmin commencant par /
   */
  changeRoute(pathName) {}
}
export const router = new Router();
router.handleRoute();
router.changeRoute();
console.log(router.currentRoute);
