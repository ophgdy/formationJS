var currentMeme = new Meme();
//console.log(currentMeme);
function InitMemeEditor() {
  var form = document.forms["meme-form"];

  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;
    renderMeme();
  });

  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;
    renderMeme();
  });

  form["x"].addEventListener("input", function (evt) {
    currentMeme.x = Number(evt.target.value);
    renderMeme();
  });

  form["y"].addEventListener("input", function (evt) {
    currentMeme.y = Number(evt.target.value);
    renderMeme();
  });

  form["color"].addEventListener("input", function (evt) {
    currentMeme.color = evt.target.value;
    renderMeme();
  });
  // var form=document.forms['meme-form'];
  // form['fontSize'].addEventListener('input', function(evt){
  //     cursrentMeme.fonySize=evt.target.value
  // })

  form["imageId"].addEventListener("change", function (evt) {
    currentMeme.imageId = Number(evt.target.value);
    renderMeme();
  });
  loadSelectImage(images);
}
function renderMeme(meme) {
  if (undefined === meme) {
    meme = currentMeme;
  }
  var svg = document.querySelector("#editor-viewer svg");
  var texteElement = svg.querySelector("text");
  var imgElement = svg.querySelector("image");
  var img = images.find(function (img) {
    return img.id === meme.imageId;
  });

  imgElement.setAttribute("xlink:href", undefined!==img? img.url:"");

  svg.setAttribute(
  "viewBox",`0 0 ${undefined !== img? img.w:500} ${undefined !== img? img.h:500}`);
  texteElement.innerHTML = meme.text;
  texteElement.style.fill = meme.color;
  texteElement.style.textDecoration = meme.underline ? "underline" : "none";
  texteElement.setAttribute("x", meme.x);
  texteElement.setAttribute("y", meme.y);
}
function loadSelectImage(image) {
  var select = document.forms["meme-form"]["imageId"];
  //vidange mon select
  var children = select.children[0].cloneNode(true);
  for (var index = 1; index < children.length; index++) {
    children[index].remove();
  }
  var optBase = document.createElement("option");
  optBase.value = "etry";
  optBase.innerHTML = "text visuel";
  select.appendChild(optBase);
  image.forEach(function (img) {
    var opt = optBase.cloneNode(true);
    opt.value = img.id;
    opt.innerHTML = img.titre;
    select.appendChild(opt);
  });
}
