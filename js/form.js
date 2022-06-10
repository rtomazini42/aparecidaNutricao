
var botaoAdicionar = document.querySelector("#adicionar-paciente");





botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);
    
    

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

    form.reset();


});


function obtemPacienteDoFormulario(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    pacienteTr.appendChild(montaTd(paciente.nome,"nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(`info-${classe}`);
    return td;
}