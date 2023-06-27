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
    currentMeme.ImageId = evt.target.value;
    renderMeme();
  });
}
function renderMeme(meme) {
  if (undefined === meme) {
    meme = currentMeme;
  }
  var svg = document.querySelector("#editor-viewer svg");
  var texteElement = svg.querySelector("text");
  texteElement.innerHTML=meme.text;
  texteElement.style.fill = meme.color;
  texteElement.style.textDecoration = meme.underline ? "underline" : "none";
  texteElement.setAttribute('x',meme.x);
  texteElement.setAttribute('y',meme.y);
}
function loadSelectImage(image) {
  var select = document.forms["meme-form"]['imageId'];
  var optBase=document.createElement('option');
  optBase.value="etry";
  optBase.innerHTML='text visuel';
  select.appendChild(optBase)
  image.forEach(function(img){
    var opt=optBase.cloneNode(true);
    opt.value=img.id;
    opt.innerHTML=img.titre;
    select.appendChild(opt);
       
  });
}
