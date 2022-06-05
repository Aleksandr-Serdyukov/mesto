const button = document.querySelector('.profile__editing');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
let formName = document.querySelector('.profile__title');
let formSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_description');

function closePopup() {
  popup.classList.remove('popup_opened');
}

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = formName.textContent;
  jobInput.value = formSubtitle.textContent;
}

button.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

// popup.addEventListener('click', function(e) {
    // if (e.target === e.currentTarget) {
        // closePopup();
    // }
// });

function formSubmitHandler (evt) {
    evt.preventDefault();
    formName.textContent = nameInput.value;
    formSubtitle.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
