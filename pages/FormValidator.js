export default class FormValidator {
  constructor(formElement, submitButton, config) {
    this.config = config;
    this.submitButton = submitButton;
    this.formElement = formElement;
    this.inputList = Array.from(formElement.querySelectorAll('input'));
    this.spanList = Array.from(formElement.querySelectorAll('span'));
  }
  _checkInputValidity(inputElement) {
    const isValid = inputElement.validity.valid;
    if (!isValid) {
      inputElement.classList.add(this.config.inputErrorClass);
    } else {
      inputElement.classList.remove(this.config.inputErrorClass);
    }
  }

  _toggleButtonState() {
    const isFormValid = this.inputList.every(
      (inputElement) => inputElement.validity.valid,
    );
    if (isFormValid) {
      this.submitButton.removeAttribute('disabled');
      this.submitButton.classList.remove(this.config.buttonErrorClass);
    } else {
      this.submitButton.setAttribute('disabled', true);
      this.submitButton.classList.add(this.config.buttonErrorClass);
    }
  }
  
  _hideInputError(errorElement) {
    errorElement.classList.remove('form__error_active');
  }

  _showInputError(errorElement, message) {
    errorElement.classList.add('form__error_active');
    errorElement.textContent = message;
  }
  enableValidation() {
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
        this._hideInputError(inputElement.nextElementSibling);
        this._showInputError(inputElement.nextElementSibling, inputElement.validationMessage);
      });
    });
  }
}
