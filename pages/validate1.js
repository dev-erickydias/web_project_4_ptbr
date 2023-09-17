// Função para desativar os Botões
function desativarButton() {
  submitForm.disabled = true;
  addSubmit.disabled = true;
}

desativarButton();


function addTextNome () {
  if (inputNome.value.length >= 2 && inputNome.value.length <= 40) {
    spanInputName.textContent = ""
  } else {
    spanInputName.textContent = "Preencha esse campo."
  }
}
function addTextJob () {
  if (inputJob.value.length >= 2 && inputJob.value.length <= 200) {
    spanInputJob.textContent = ""
  } else {
    spanInputJob.textContent = "Preencha esse campo."
  }
}
// Validação do Formulario edit
function pegarValor(event) {
  if ((inputNome.value.length >= 2 && inputNome.value.length <= 40) && (inputJob.value.length >= 2 && inputJob.value.length <= 200)) {
    addTextNome ()
    addTextJob () 
    submitForm.disabled = false;
  } else {
    addTextNome ()
    addTextJob () 
    submitForm.disabled = true;
  }
}
inputNome.addEventListener("input", pegarValor);
inputJob.addEventListener("input", pegarValor);

// Validação do Formulario de ADD
// addInputName e addInputImagem
/*

function addTextAdd () {
  if (addInputName.value.length >= 2 && addInputName.value.length <= 40) {
    spanInputAddName.textContent = ""
  } else {
    spanInputAddName.textContent = "Preencha esse campo."
  }
}

function addTextAdd () {
  if (addInputName.value.length >= 2 && addInputName.value.length <= 40) {
    spanInputAddName.textContent = ""
  } else {
    spanInputAddName.textContent = "Preencha esse campo."
  }
}

function addTextLink () {
  if (addInputImage.value.startswith("http")) {
    spanInputAddName.textContent = ""
  } else {
    spanInputAddName.textContent = "Por favor, insira um endereço web."
  }
}
function pegarValor(event) {
  if ((addInputName.value.length >= 2 && addInputName.value.length <= 40) && (addInputImage.value.startswith("http"))) {
    addTextAdd ()
    addTextLink ()  
    addSubmit.disabled = false;
  } else {
    addTextAdd ()
    addTextLink ()  
    addSubmit.disabled = true;
  }
}

// addInputImage.value.startswith("http") 
*/