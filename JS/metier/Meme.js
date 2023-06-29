import REST_ADR, {RESSOURCE_PATH} from "../Config.js";
export class Meme {
  titre = "";
  text = "";
  x = 0;
  y = 20;
  imageId = -1;
  fontSize = 20;
  fontSize = 40;
  fontWeigt = "500";
  underline = false;
  italic = false;
  color='#000000'
  save(callback) {
    fetch(REST_ADR + RESSOURCE_PATCH.memes,{
      method :"POST",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
      },
      body: JSON.stringify(this),
    })
    .then((e)=>e.json)
    .then((o)=>{
      if (undefined !== callback){
        callback(o)
      }

    })
 }

  static render(meme,selecterCss,images) {
    const svg = document.querySelector(selecterCss+" svg");
    svg.setAttribute(
        "viewBox",
        `0 0 ${undefined !== images ? images.w : 500} ${
            undefined !== images ? images.h : 500}`
    )
    const texteElement = svg.querySelector("text");
    const imgElement = svg.querySelector("image");
    imgElement.setAttribute("xlink:href",undefined!==images?images.url:"")
    texteElement.innerHTML=meme.text;
    texteElement.style.fill = meme.color;
    texteElement.style.textDecoration = meme.underline ? "underline" : "none";
    texteElement.setAttribute('x',meme.x);
    texteElement.setAttribute('y',meme.y);
  }
}
