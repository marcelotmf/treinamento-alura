var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    //Extrai os dados do form
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    //Cria tr e td para cada paciente
    //var pacienteTr = montaTr(paciente);

/*
    if(!validaPaciente(paciente)){
      alert("Peso Invalido");
      return;
    }
*/
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
      exibeMensagensDeErro(erros);
      return;
    }

    //Coloca os valores dentro da tabela
    //var tabela = document.querySelector("#tabela-pacientes");

    //tabela.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";  //Limpa o conteudo
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

/*    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
*/
//OU MAIS OTIMIZANDO AINDA

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

/*
function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
      return true;
    }else {
      return false;
    }
}
*/
function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome == 0){
      erros.push("O nome é obrigatório")
    }

    if(!validaPeso(paciente.peso)){
      erros.push("O Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
      erros.push("A Altura é inválida");
    }

    if(paciente.peso == 0){
      erros.push("O peso é obrigatório")
    }

    if(paciente.altura == 0){
      erros.push("A altura é obrigatória")
    }

    if(paciente.gordura == 0){
      erros.push("A gordura é obrigatória")
    }

    return erros;
}
