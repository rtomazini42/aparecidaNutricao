

var nightMode = false;
var botaoNoturno = document.querySelector("#modoNoturno");

botaoNoturno.addEventListener("click", function(event){
    event.preventDefault();
    modoNoturno();
    nightMode = !nightMode.valueOf();
});

function modoNoturno(){
    
    var site = document.querySelector("body");
    var cabecario = document.querySelectorAll("th");
    if(nightMode == false){
        site.classList.add("night");
        cabecario.forEach(function(element){
            element.classList.add("nightTH");
        });
        return;  
    
    } else {
        site.classList.remove("night");  
        cabecario.forEach(function(element){
            element.classList.remove("nightTH");
        });
        return;     
    }
}