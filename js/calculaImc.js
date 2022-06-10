var titulo = document.querySelector(".titulo");
titulo.textContent  = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var tdImc = pacientes[i].querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        //console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        //console.log("Altura inválido");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");
    }


    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}


function validaPeso(peso){
    if(peso <= 0 || peso >= 1000){
        //console.log("Peso inválido");
        return false;
    }
    return true;
}

function validaAltura(altura){
    if(altura <= 0 || altura >= 3.00){
        //console.log("Altura inválido");
        return false;
    }
    return true;
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso/(altura*altura);

    return imc.toFixed(2);
}

