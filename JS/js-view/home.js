import { router } from "../routeur.js";

export const initHome = () => {
  document.querySelector("#home button").addEventListener("click", () => {
    router.changeRoute("/thumbnail");
  });
};
