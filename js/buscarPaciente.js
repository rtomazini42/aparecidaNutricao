var botaoAdicionar = document.querySelector("#buscarPaciente");

botaoAdicionar.addEventListener("click", function(){
    //event.preventDefault();

    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.hospitalexpress.com.br/pacientes");
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
        
    });
    xhr.send();
});