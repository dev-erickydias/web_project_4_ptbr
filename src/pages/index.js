//Aqui é a Programação do Button de edição do perfil.

//Parte de fazer o pupup abrir, alem de fazer tudo o que for editado ficar na tela.
const profileButton = document.querySelector('.profile__button');
const profileForm = document.querySelector('.form__edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputNome = document.querySelector('.nome');
const inputJob = document.querySelector('.job');
const formClose = document.querySelector('.form__close')
const submitForm = document.querySelector('.submit__button')


inputNome.value = 'Jacques Cousteau';
inputJob.value = 'Explorar';

profileButton.addEventListener('click', () => {
  profileForm.style.display = 'block';
  inputNome.style.value = 'jack'
});
profileForm.addEventListener('submit', (event) => {
    event.preventDefault()
  profileTitle.textContent = inputNome.value;
  profileSubtitle.textContent = inputJob.value;
});

// Aqui irei programar para ele fechar com click fora do pupup, no X e no submit 

formClose.addEventListener('click', () => {
  profileForm.style.display = 'none'
})

submitForm.addEventListener('click', () => {
  profileForm.style.display = 'none'
})