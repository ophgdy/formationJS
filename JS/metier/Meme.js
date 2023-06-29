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
