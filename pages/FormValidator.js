
export default class FormValidator {
  constructor(formSelector, handleFormPopup) {
    this._formSelector = formSelector
    this._abrirPopup = handleFormPopup
  }
  _getTemplate() {
    const formElement = document.querySelector(this._formSelector)
    return formElement;
  }
  generateValidate() {
    this._element = this._getTemplate();
    console.log(this)
  }
  ativarButton() {

    this._element.querySelector(".button").disabled = false;
    this._element.querySelector(".button").classList.remove("disability");

  }
}
