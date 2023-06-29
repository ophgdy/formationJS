import { Meme } from "../metier/Meme.js";
import { ressource } from "../metier/Ressources.js";

const baseView = "#thumbnail";
const PREVIEW_CONTAINER = "#thumbnail-container";
export const initTumbnail = () => {
  if (ressource.isLoaded) {
    initPreview();
  } else {
    ressource.loadRessources(() => {
      initPreview();
    });
  }
};

const initPreview = () => {
  const ListContainer= document.querySelector(PREVIEW_CONTAINER);
  const basePreviewer=document.querySelector('#thumbnail-meme-')
  ressource.memes.forEach(m => {
    const newPreview=basePreviewer.cloneNode(true);
    newPreview.querySelector('a').href +=m.id
    newPreview.querySelector(".thumbnail-meme-title").innerHTML =m.titre
    newPreview.id+=m.id;
    ListContainer.appendChild(newPreview);
    const img=ressource.images.find(im=>im.id===m.imageId)
    Meme.render(m,'#'+newPreview.id,img)
    
  });
};
