
//Aqui é a Programação do Button de edição do perfil.

//Parte de fazer o pupup abrir, alem de fazer tudo o que for editado ficar na tela.
const profileButton = document.querySelector('.profile__button');
const profileForm = document.querySelector('.form');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputNome = document.querySelector('.form__name');
const inputJob = document.querySelector('.form__job');
const formClose = document.querySelector('.form__close')
const submitForm = document.querySelector('.button__submit')
const addButton = document.querySelector('.button__add')
const formulario = document.querySelector('#formulario')
const addClose = formulario.querySelector('.form__close')
const addInputName = formulario.querySelector('#input__name')
const addInputImage = formulario.querySelector('#input__image')
const addSubmit = formulario.querySelector('#add__submit')
const cardTemplate = document.querySelector('#template');
const cardElement = cardTemplate.content.cloneNode(true);
const cards = document.querySelector('.cards')
const cardName = cardElement.querySelector('.card__title');
const cardImage = cardElement.querySelector('.card__image');

// array com os cards que serão adicionados a ul
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Vanois National...",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];
// adicionando o valor dos inputs nos titulos 
inputNome.value = profileTitle.textContent;
inputJob.value = profileSubtitle.textContent;



// evento de click no botao de editar o perfil 
profileButton.addEventListener('click', () => {
  profileForm.style.display = 'block';
  profileFotm.style.overflow = 'hidden';
  inputNome.style.value = 'jack'
});
addButton.addEventListener('click', () => {
  formulario.style.display = 'block';
  formulario.style.overflow = 'hidden';
});

function createCard(card) {
  const cardTemplate = document.querySelector('#template');
  const cardElement = cardTemplate.content.cloneNode(true);
  const cards = document.querySelector('.cards')
  const cardName = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  
  cardName.textContent = card.name;
  cardImage.src = card.link
  cardImage.alt = card.name

  const cardList = cardElement.querySelector('.card');
  cards.append(cardList)
}

// evento de submit no botão de salvar o formulario
profileForm.addEventListener('submit', (event) => {
    event.preventDefault()
  profileTitle.textContent = inputNome.value;
  profileSubtitle.textContent = inputJob.value;
});

// Aqui irei programar para ele fechar com click no X e no submit do botao add e do botão edit
formClose.addEventListener('click', () => {
  profileForm.style.display = 'none'
})
submitForm.addEventListener('click', () => {
  profileForm.style.display = 'none'
})
addClose.addEventListener('click', () => {
  formulario.style.display = 'none'
})
addSubmit.addEventListener('click', () => {
  formulario.style.display = 'none'
})
initialCards.forEach(createCard);

// adicionando a funcao de remover os card
function removeCardElement(event) {
  const cardToRemove = event.target.closest('.card');
  if (cardToRemove) {
    cardToRemove.remove();
  }
}

// Adicionei um evento de clique a cada botão de remoção de card
cards.addEventListener('click', (event) => {
  if (event.target.classList.contains('del')) {
    removeCardElement(event);
  }
});
