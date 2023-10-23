export default class Card {
  constructor(data, cardSelector, handleImagePopup, ) {
    this._cardSelector = cardSelector
    this._title = data.name;
    this._image = data.link;
    this._abrirPopupComImage = handleImagePopup
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector(".card__image").addEventListener("click", () => {
      this._abrirPopupComImage(this._image);
    });
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._image
    this._element.querySelector(".card__title").textContent = this._title;

    return this._element;
  }
}
