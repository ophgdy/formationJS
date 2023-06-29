import { Meme } from "./metier/Meme.js";
import { ressource } from "./metier/Ressources.js";

let currentMeme;
let currentImage;
const VIEW_EDITOR_CSS_SELECTOR = "#editor";
export const initEditor = () => {
  initFormEvent();
  if (ressource.isLoaded) {
    initSelectImages();
    setCurrentMeme(new Meme());
  } else {
    ressource.loadRessources((res) => {
      initSelectImages();
      setCurrentMeme(new Meme());
    });
  }
};
const initFormEvent = () => {
  var form = document.forms["meme-form"];
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
    // renderMeme();
  });

  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });

  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });

  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });

  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
  // var form=document.forms['meme-form'];
  // form['fontSize'].addEventListener('input', function(evt){
  //     cursrentMeme.fonySize=evt.target.value
  // })

  form["imageId"].addEventListener("change", function (evt) {
    currentMeme.imageId = Number(evt.target.value);
    currentImage = ressource.images.find(
      (images) => images.id === currentMeme.imageId
    );
    Meme.render(currentMeme, VIEW_EDITOR_CSS_SELECTOR, currentImage);
  });
};
const initFormValues = () => {
  const form = document.forms["meme-form"];
  form["titre"].value = currentMeme.titre;
  form["text"].value = currentMeme.text;
  form["x"].value = currentMeme.x;
  form["y"].value = currentMeme.y;
  form["imageId"].value = currentMeme.imageId;
  form["color"].value = currentMeme.color;
};
const setCurrentMeme = (meme) => {
  currentMeme = meme;
  initFormValues();
  const images = ressource.images.find((im) => im.id === meme.imageId);
  Meme.render(meme, VIEW_EDITOR_CSS_SELECTOR, images);
};
const initSelectImages = () => {
  var select = document.forms["meme-form"]["imageId"];
  var optBase = document.createElement("option");
  optBase.value = "etry";
  optBase.innerHTML = "text visuel";
  select.appendChild(optBase);
  ressource.images.forEach(function (images) {
    var opt = optBase.cloneNode(true);
    opt.value = images.id;
    opt.innerHTML = images.titre;
    select.appendChild(opt);
  });
};
