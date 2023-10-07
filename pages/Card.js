const popupElement = document.querySelector("#popupcard")
const popupImage = document.querySelector("#popup-image");
const popupCloseButton = popupElement.querySelector(".close-image");

export default class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector
    this._title = data.name;
    this._image = data.link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add("popup_opened");
  }

  _handleClosePopup() {
    popupImage.src = "";
    popupElement.classList.remove("popup_opened");
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
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
