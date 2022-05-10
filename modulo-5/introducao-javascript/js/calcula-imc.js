var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    //Caputurar dados da tela
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    //Validar dados
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
      console.log("Peso Invalido");
      pesoValido = false;
      tdImc.textContent = "Peso Inválido";
      //paciente.style.color = "red";
      paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
      console.log("Altura Invalida");
      alturaValida = false;
      tdImc.textContent = "Altura Inválida";
      //paciente.style.color = "red";
      paciente.classList.add("paciente-invalido");
    }

    if(!pesoValido && !alturaValida){
      console.log("Altura e Peso Inválidos");
      tdImc.textContent = "Altura e Peso Inválidos";
      //paciente.style.color = "red";
      paciente.classList.add("paciente-invalido");
    }

    //Calcular o imc
    if(pesoValido && alturaValida){
      var imc = calculaImc(peso,altura);
      tdImc.textContent = imc;
    }
}

function validaPeso(peso){
  if (peso >= 0 && peso < 1000) {
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura){
  if (altura >= 0 && altura <= 3.0) {
    return true;
  }else {
    return false;
  }
}

function calculaImc(peso,altura){

  var imc = 0;
  imc = (peso / (altura * altura));
  return imc.toFixed(2);
}

//console.log(tdPeso);
//console.log(peso);
//console.log(altura);
//console.log(imc);
