var botaoAdicionar = document.querySelector("#buscarPaciente");

botaoAdicionar.addEventListener("click", function(){
    //event.preventDefault();

    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        //console.log(xhr.responseText);
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
            adicionarPaciente(paciente);
        });
        
    });
    xhr.send();
});