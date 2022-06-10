var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    //console.log(event.target);
    //console.log("Você clicou na tabela");
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();//pegar o pai do elemento que foi clicado
    },500)
     

});

//pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//        this.remove();
//    });
//});