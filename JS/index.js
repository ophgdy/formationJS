/**
 * fonction d'initialisation
 * @returns {undefined} aucun retour
 */
function init(params) {
  document
    .querySelector("#flexSwitchCheckDefault")
    .addEventListener("change", function (evt) {
      changetheme(evt.target.checked);
    });
  var currentDate = new Date();
  console.log(currentDate.toISOString());
  var footer = document.getElementsByTagName("footer")[0];
  footer.innerHTML = new Date().toISOString();
  footer.style.color = "white";
  footer.style.backgroundColor = "rgba(50,50,50,0.2)";
  footer.style.fontStyle = "italic";
  footer.style.textDecoration = "Underline";
}
/**
 * changement d'état du theme
 * @param {boolean} isDark etat du choix de theme dark/clear
 */
function changetheme(isDark) {
  var nav = document.getElementsByTagName("nav")[0];
  var slider = document.getElementById("flexSwitchCheckDefault");
  var lbl = document.querySelector("#theme label");
  if (isDark) {
    document.body.className = "dark";
    nav.classList.replace("navbar-light", "navbar-dark");
    nav.classList.replace("bg-light", "bg-dark");
    slider.checked = true;
    lbl.innerHTML = "Dark";
  } else {
    document.body.className = "";
    nav.classList.replace("navbar-dark", "navbar-light");
    nav.classList.replace("bg-dark", "bg-light");
    slider.checked = false;
    lbl.innerHTML = "Clear";
  }
}
document.addEventListener("DOMContentLoaded", function (evt) {
  console.log(evt);
  init();
});
