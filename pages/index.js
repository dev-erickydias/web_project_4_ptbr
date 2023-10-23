// array com os cards que serão adicionados a ul7
import { initialCards } from "./initialCards.js"

// FormValidate Class
import FormValidator from "./FormValidator.js";

// crear cards
import Card from "./Card.js";
import { fecharComEsc } from './utils.js';
import { abrirPopup } from './utils.js';


//Parte de fazer o pupup abrir, alem de fazer tudo o que for editado ficar na tela.

const profileButton = document.querySelector(".profile__button");
const popupUserForm = document.querySelector("#popup-user-form");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputNome = document.querySelector(".popup__form-name");
const inputJob = document.querySelector(".popup__form-job");
const formClose = document.querySelector(".popup__form-close");
const submitForm = document.querySelector("#button__submit");
const addButton = document.querySelector(".profile__button-add");
const popupCardForm = document.querySelector("#popup-card-form");
const addClose = popupCardForm.querySelector("#close-add");
const addInputName = popupCardForm.querySelector("#input__title");
const addInputImage = popupCardForm.querySelector("#input__image");
const addSubmit = popupCardForm.querySelector("#add__submit");
const cards = document.querySelector(".cards");
const popupImage = document.querySelector("#popupcard");
const imgClose = popupImage.querySelector(".close-image");
const overlay = document.querySelector(".overlay");
const overlayAdd = document.querySelector("#overlay-add");
const overlayImage = document.querySelector("#overlay-image");
const addFormFirst = document.querySelector("#first");
const editForm = document.querySelector(".popup__form-edit");


window.addEventListener("load", () => {
  const cardArr = initialCards.map((data) => new Card(data, "#template", openPopupWithImage));
  cardArr.forEach((card) => {
  const cardElement =  card.generateCard()
  cards.append(cardElement)
  })
});
const configFormValidate = {inputErrorClass:"popup__form_theme__red", buttonErrorClass: "disability"}
const configSpanValidate = { spanErrorClass: "form__error_active"}

new FormValidator(addFormFirst, addSubmit, configFormValidate, configSpanValidate).enableValidation()
new FormValidator(editForm, submitForm, configFormValidate, configSpanValidate).enableValidation()
//new FormValidator("#first", " ")._enableValidation()



// adicionando o valor dos inputs nos titulos
inputNome.value = profileTitle.textContent;
inputJob.value = profileSubtitle.textContent;

function openPopupWithImage (image) {
  popupImage.classList.add("popup_opened")
  document.addEventListener("keydown", (event) => {
    fecharComEsc(event, popupImage)
  }) 
  popupImage.querySelector(".popup-container__image").src = image
}
profileButton.addEventListener("click", () => {
  abrirPopup(popupUserForm)
})
addButton.addEventListener("click", () => {
  abrirPopup(popupCardForm)
})

popupCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardsitem = {
    name: addInputName.value,
    link: addInputImage.value,
  };

  const newCard = new Card(cardsitem, "#template", openPopupWithImage)
  const cardElement =  newCard.generateCard()
  cards.prepend(cardElement)


  addFormFirst.reset();
});

// evento de submit no botão de salvar o formulario
popupUserForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileTitle.textContent = inputNome.value;
  profileSubtitle.textContent = inputJob.value;
});



// Aqui irei programar para ele fechar com click no X e no submit do botao add e do botão edit
formClose.addEventListener("click", () => {
  popupUserForm.classList.remove("popup_opened");
});
submitForm.addEventListener("click", () => {
  popupUserForm.classList.remove("popup_opened");
});
addClose.addEventListener("click", () => {
  popupCardForm.classList.remove("popup_opened");
});
addSubmit.addEventListener("click", () => {
  popupCardForm.classList.remove("popup_opened");
});

imgClose.addEventListener("click", () => {
  popupImage.classList.remove("popup_opened");
});



// adicionando a funcao de remover os card
function removeCardElement(event) {
  const cardToRemove = event.target.closest(".card");
  if (cardToRemove) {
    cardToRemove.remove();
  }
}

function deleteCard(event) {
  if (event.target.classList.contains("del")) {
    removeCardElement(event);
  }
}
cards.addEventListener("click", deleteCard);

function lickImage(event) {
  if (event.target.classList.contains("card__unlick")) {
    const cardUnlick = event.target;
    const isLiked = cardUnlick.getAttribute("data-liked") === "true";

    if (isLiked) {
      cardUnlick.src = "./image/unlike.png"; // Alteração da imagem para "não curtir"
      cardUnlick.setAttribute("data-liked", "false");
    } else {
      cardUnlick.src = "./image/liked.png"; // Alteração da imagem para "curtir"
      cardUnlick.setAttribute("data-liked", "true");
    }
  }
}
// interação com o botao de lick
cards.addEventListener("click", lickImage);

// fechar o popup precionando Fora dele
overlay.addEventListener("click", () => {
  popupUserForm.classList.remove("popup_opened");
});
overlayAdd.addEventListener("click", () => {
  popupCardForm.classList.remove("popup_opened");
});
overlayImage.addEventListener("click", () => {
  popupImage.classList.remove("popup_opened");
});

