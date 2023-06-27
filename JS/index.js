/**
 * fonction d'initialisation
 * @returns {undefined} aucun retour
 */
function init(params) {
    var currentDate=new Date();
    console.log(currentDate.toISOString());
    var footer=document.getElementsByTagName('footer')[0];
    footer.innerHTML=(new Date()).toISOString();
    footer.style.color='white';
    footer.style.backgroundColor='rgba(50,50,50,0.2)';
    footer.style.fontStyle='italic';
    footer.style.textDecoration='Underline';
}
document.addEventListener('DOMContentLoaded',function(evt){
    console.log(evt);
    init()
})

