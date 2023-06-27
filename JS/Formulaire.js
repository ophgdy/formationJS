var currentMeme = new Meme();
//console.log(currentMeme);
function InitMemeEditor() {
    var form=document.forms['meme-form'];

    form['titre'].addEventListener('input', function(evt){
        currentMeme.titre=evt.target.value
    })
    
    form['text'].addEventListener('input', function(evt){
        currentMeme.text=evt.target.value
    })
    
    form['x'].addEventListener('input', function(evt){
        currentMeme.x=Number (evt.target.value);
    })
    
    form['y'].addEventListener('input', function(evt){
        currentMeme.y=Number (evt.target.value);
    })
    // var form=document.forms['meme-form'];
    // form['color'].addEventListener('input', function(evt){
    //     currentMeme.color=evt.target.value
    // })
    // var form=document.forms['meme-form'];
    // form['fontSize'].addEventListener('input', function(evt){
    //     cursrentMeme.fonySize=evt.target.value
    // })
    
    form['imageId'].addEventListener('change', function(evt){
        cursrentMeme.ImageId=evt.target.value
    })}