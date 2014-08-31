window.addEventListener('load', function(){

    // tant qu'on reste appuyé sur le bouton
    $('bouton').addEventListener('touchstart', function () { // mousedown à la souris
        pressButton();
    });

    // quand on relâche le bouton
    $('bouton').addEventListener('touchend', function () { // mouseup à la souris
        releaseButton();
    });
 
}, false);

function $(x) {return document.getElementById(x);}

function pressButton(){
    // image du bouton enfoncé
    $('image').src="img/bouton_enfonce.png";
}

function releaseButton(){
    // image du bouton relâché
    $('image').src="img/bouton_relache.png";

    // le son est joué une fois
    var sound = $("son");
    sound.play();
}
