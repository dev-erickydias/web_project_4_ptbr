function desativarButton() {
  submitForm.disabled = true;
  submitForm.classList.add("disability")
  addSubmit.disabled = true;
  addSubmit.classList.add("disability")
}
desativarButton();

function ativarButton() {
    submitForm.disabled = false;
    submitForm.classList.remove("disability")
    addSubmit.disabled = false;
    addSubmit.classList.remove("disability")
  }

// Valide todas as configurações
function enableValidation() {
  const inputs = document.querySelectorAll(config.inputSelector);
  inputs.forEach(function (input) {
    input.addEventListener("input", function (event) {
      const inputElement = event.target;
      const errorElement = inputElement.closest(".form__input-container").querySelector(config.errorSelector);
      if (inputElement.validity.valid) {
        hideInputError(errorElement);
        ativarButton()
      } else {
        showInputError(errorElement, inputElement.validationMessage);
        desativarButton()
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
  inputSelector: ".form__input",
  submitButtonSelector: ".button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  errorSelector: ".form__error",
};

enableValidation(config);
