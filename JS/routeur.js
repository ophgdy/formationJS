import { initEditor } from "./editor.js";
import { initHome } from "./js-view/home.js";
import { initTumbnail } from "./js-view/thumbnail.js";
/**
 * variable de config des routes
 */
const routeConfig = {
  route: [
    {
      path: "/thumbnail",
      initialisation: initTumbnail,
      templateUrl: "/view/thumbnail.html",
    },
    {
      path: "/",
      initialisation: initHome,
      templateUrl: "/view/home.html",
    },
    {
      path: "/break",
      initialisation: undefined,
      templateUrl: "/view/templateQuiExistePasSurLeServeur.html",
    },
    {
      path: /\/editor(\/(?<id>\d*))?/,
      initialisation: initEditor,
      templateUrl: "/view/editor.html",
    },
  ],
};

class Router {
  #currentRoute;
  #params={};
  get params(){return this.#params;}
  get currentRout() {
    return this.#currentRoute;
  }
  constructor() {
    document.addEventListener("DOMContentLoaded", (evt) => {
      this.#initRouterLinks();
    });
  }
  /**
   * manage la route en cours
   */
  handleRoute() {
    const pathName = location.pathname;
    console.log(pathName)
    this.#params={}
    this.#currentRoute = routeConfig.route.find(
      (route) =>{ 
        if (route.path instanceof RegExp){
          //c'est une regex
          const regReturn=route.path.exec(pathName)
          if(null!==regReturn){
            //ca a match
            this.#params={...regReturn.groups}
            return true;
          }
          else return false
        }
        else{
          //c'est une chaine
          return route.path=== pathName
        }}
    );
    this.#istanciateRouteTemplete();
  }
  /**
   * navigate to
   * @param {string} patName chmin commencant par /
   */
  changeRoute(pathName) {
    history.pushState(undefined, undefined, pathName);
    this.handleRoute();
  }

  #istanciateRouteTemplete() {
    if (undefined !== this.#currentRoute.templateText) {
      this.#loadCurrentDOMContent();
    } else {
      fetch(this.#currentRoute.templateUrl)
        .then((resp) => resp.text())
        .then((t) => {
          this.#currentRoute.templateText = t;
          this.#loadCurrentDOMContent();
        });
    }
  }

  /**
   * changement du com avec le contenu text/html de le noeuds du selecteur en parametre
   * @param {string} domContainerSelector css selecteur du oeud a charger pour la vue
   */
  #loadCurrentDOMContent(domContainerSelector = "article") {
    document.querySelector(domContainerSelector).innerHTML =
      this.#currentRoute.templateText;
    this.#initRouterLinks(domContainerSelector);
    if (undefined !== this.#currentRoute.initialisation) {
      this.#currentRoute.initialisation();
    }
  }
  #initRouterLinks(baseSelector = "body") {
    const links = document.querySelectorAll(baseSelector + " a");
    links.forEach((link) => {
      link.removeEventListener("click", this.#handelLinkEvent);
      link.addEventListener("click", this.#handelLinkEvent);
    });
  }
  #handelLinkEvent=(evt) => {
    evt.preventDefault();
    this.changeRoute(evt.target.href);
  }
}
export const router = new Router();
