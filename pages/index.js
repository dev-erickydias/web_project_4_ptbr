//Aqui é a Programação do Button de edição do perfil.

//Parte de fazer o pupup abrir, alem de fazer tudo o que for editado ficar na tela.
const profileButton = document.querySelector(".profile__button");
const popupUserForm = document.querySelector("#popup-user-form");
const formEdit = document.querySelector('.form__itens')
const formAdd = document.querySelector('#form__itens')
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputNome = document.querySelector(".form__name");
const inputJob = document.querySelector(".form__job");
const formClose = document.querySelector(".form__close");
const submitForm = document.querySelector(".button__submit");
const addButton = document.querySelector(".button__add");
const popupCardForm = document.querySelector("#popup-card-form");
const addClose = popupCardForm.querySelector(".form__close");
const addInputName = popupCardForm.querySelector("#input__name");
const addInputImage = popupCardForm.querySelector("#input__image");
const addSubmit = popupCardForm.querySelector("#add__submit");
const cardTemplate = document.querySelector("#template");
const cardElement = cardTemplate.content.cloneNode(true);
const cards = document.querySelector(".cards");
const cardName = cardElement.querySelector(".card__title");
const cardImage = cardElement.querySelector("#card__image");
const cardUnlick = cardElement.querySelector(".card__unlick");
const popupImage = document.querySelector('#popup-image')
const imgClose = popupImage.querySelector('.close_image')
// array com os cards que serão adicionados a ul
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Vanois National...",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
// adicionando o valor dos inputs nos titulos
inputNome.value = profileTitle.textContent;
inputJob.value = profileSubtitle.textContent;

// evento de click no botao de editar o perfil
profileButton.addEventListener("click", () => {
  popupUserForm.classList.add('popup_opened')
});

// evento de click no botao de adicionar
addButton.addEventListener("click", () => {
  popupCardForm.classList.add('popup_opened')
});



// função de crear cards
function createCard(card) {
  const cardTemplate = document.querySelector("#template");
  const cardElement = cardTemplate.content.cloneNode(true);
  const cards = document.querySelector(".cards");
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardName.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  

  const cardList = cardElement.querySelector(".card");
  cards.append(cardList);

  cardImage.addEventListener('click', (event) => {
    popupImage.classList.add('popup_opened')
    popupImage.querySelector('.card__image')?.remove()
    popupImage.append(cardImage.cloneNode(true))
    
  })
}


// evento de submit no botão de salvar o formulario
popupUserForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileTitle.textContent = inputNome.value;
  profileSubtitle.textContent = inputJob.value;
});

popupCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardsitem = {
    name: addInputName.value,
    link: addInputImage.value,
  }
  createCard(cardsitem)
  
  addInputName.value = ''
  addInputImage.value = ''
});

// Aqui irei programar para ele fechar com click no X e no submit do botao add e do botão edit
formClose.addEventListener("click", () => {
  popupUserForm.classList.remove('popup_opened')
});
submitForm.addEventListener("click", () => {
  popupUserForm.classList.remove('popup_opened')
});
addClose.addEventListener("click", () => {
  popupCardForm.classList.remove('popup_opened')
});
addSubmit.addEventListener("click", () => {
  popupCardForm.classList.remove('popup_opened')
});  

imgClose.addEventListener("click", () => {
  popupImage.classList.remove('popup_opened')
});


window.addEventListener('load', () => {
  initialCards.forEach(createCard);
})

// adicionando a funcao de remover os card
function removeCardElement(event) {
  const cardToRemove = event.target.closest(".card");
  if (cardToRemove) {
    cardToRemove.remove();
  }
}

// Adicionei um evento de clique a cada botão de remoção de card passando a função removeCardElement
cards.addEventListener("click", (event) => {
  if (event.target.classList.contains("del")) {
    removeCardElement(event);
  }
});

// interação com o botao de lick
cards.addEventListener("click", (event) => {
  if (event.target.classList.contains("card__unlick")) {
    const cardUnlick = event.target;
    const isLiked = cardUnlick.getAttribute("data-liked") === "true";

    if (isLiked) {
      cardUnlick.src = "./src/image/unlike.png"; // Alteração da imagem para "não curtir"
      cardUnlick.setAttribute("data-liked", "false");
    } else {
      cardUnlick.src = "./src/image/liked.png"; // Alteração da imagem para "curtir"
      cardUnlick.setAttribute("data-liked", "true");
    }
  }
});
