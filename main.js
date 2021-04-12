const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");
// ecoute event
myBtn.addEventListener('click', headsOrTails);
// fonction quand click
function headsOrTails(){
    var aleatoir = Math.random();
    if(aleatoir<0.5){
        var resultaleatoir = "Heads";
    }else{
        var resultaleatoir = "Tails";
    }
    console.log(result);
    document.getElementById("result").innerHTML = resultaleatoir;
}