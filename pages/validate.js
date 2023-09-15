// Função para desativar os Botões
function desativarButton() {
  submitForm.disabled = true;
  addSubmit.disabled = true;
}
desativarButton();

// Função de Validação e add o ativado ao Input Name 
function validar() {
  inputNome.classList.add("active");
}
// Função de Validação Que renove a Desativação
function validarRemove() {
  inputNome.classList.remove("active");
}

// Validação do Formulario edit
function pegarValor(event) {

  if ((inputNome.value.length >= 2 && inputNome.value.length <= 40) && (inputJob.value.length >= 2 && inputJob.value.length <= 200)) {
    // return true
    submitForm.disabled = false;
    return validarRemove();
  } else {
    //return false
    submitForm.disabled = true;
    return validar();
  }

}
inputNome.addEventListener("input", pegarValor);
inputJob.addEventListener("input", pegarValor);

// Validação do Formulario de ADD
// addInputName e addInputImagem

// so preciso checar se tem http e https 
function validarAdd(event) {
  if ((addInputName.value.length >= 2 && addInputName.value.length <= 30) && (addInputImage.value == URL)) {
    addSubmit.disabled = false;
  } else {
    addSubmit.disabled = true;
  }
}

addInputImage.addEventListener("input", validarAdd)