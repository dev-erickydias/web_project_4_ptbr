function desativarButton() {
  submitForm.disabled = true;
  submitForm.classList.add("disability");
  addSubmit.disabled = true;
  addSubmit.classList.add("disability");
}
desativarButton();

function ativarButton() {
  submitForm.disabled = false;
  submitForm.classList.remove("disability");
  addSubmit.disabled = false;
  addSubmit.classList.remove("disability");
}

// Valide todas as configurações
function enableValidation(event) {
  const inputs = document.querySelectorAll(config.inputSelector);
  
  inputs.forEach((element) => {
    element.addEventListener("input", (event) => {
      const id = event.target.id
      if (id == "input__title" || id == "input__image") {
        var inputOne = inputs[2]
        var inputTwo = inputs[3]
      } else {
        var inputOne = inputs[0]
        var inputTwo = inputs[1]
      }
      const inputElement = event.target;
      const errorElement = inputElement.closest(".popup__form-inputs").querySelector(config.errorSelector);

      if (inputOne.validity.valid && inputTwo.validity.valid) {
        hideInputError(errorElement);
        ativarButton();
      } else {
        showInputError(errorElement, inputElement.validationMessage);
        desativarButton();
      }
    });
  });
}

function hideInputError(errorElement) {
  errorElement.classList.remove("form__error_active");
}

function showInputError(errorElement, message) {
  errorElement.classList.add("form__error_active");
  errorElement.textContent = message;
}

const config = {
  formSelector: ".popup",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".button",
  inactiveButtonClass: ".disability",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  errorSelector: ".popup__form",
};

enableValidation(config);
