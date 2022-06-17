const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const button = document.querySelector('.profile__editing');
const buttonAdd = document.querySelector('.profile__button-add'); // новый
const popup = document.querySelector('.popup');
const popupCard = document.querySelector('.popup-card'); // новый
const popupCloseButton = document.querySelector('.popup__close-button');
const popupCloseButtonCard = document.querySelector('.popup-card__close'); // новый
let formName = document.querySelector('.profile__title');
let formSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_description');
const itemTemplate = document.querySelector('.item__template').content; // скопировали ul в form
const cards = document.querySelector('.cards'); // ul списка html
const formElementCard = document.querySelector('.popup-card__form') // form новго попапа
const popupCreate = document.querySelector('.popup-card__create');  // popup кнопка "Создать"
const placeInput = document.querySelector('.popup-card__path_field_place'); // добавить описание
const linkInput = document.querySelector('.popup-card__path_field_path'); // добавить ссылку на фото
const likeButton = document.querySelector('.cards__like');
const cardDelete = document.querySelector('.cards__delete');

function renderItem (text) {
  const test = itemTemplate.querySelector('.cards__card').cloneNode(true);
  test.querySelector('.cards__name').textContent = text.name;
  test.querySelector('.cards__image').src = text.link;
  test.querySelector('.cards__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('cards__like_active');
  });
ы
  test.querySelector('.cards__delete').addEventListener('click', function() {
    deleteCard(test);
  });

  test.querySelector('.cards__image').addEventListener('click', function() {
    popupFullImg.src = test.querySelector('.cards__image').src;
    titleImg.textContent = test.querySelector('.cards__name').textContent;
    openPopupImg();
  });

  cards.appendChild(test);
}

function openPopupImg() { 
  popupImg.classList.add('popup_opened');
}

function deleteCard (item) {
  item.remove();
}

function renderItemAdd () { // ЭТО ДОБАВЛЕНИЕ КАРТОЧКИ
  const test = itemTemplate.querySelector('.cards__card').cloneNode(true);
  test.querySelector('.cards__name').textContent = placeInput.value;
  test.querySelector('.cards__image').src = linkInput.value;
  cards.insertAdjacentElement('afterbegin', test);
}

function createItem (evt) {
  evt.preventDefault();
  closePopupCard();
  renderItemAdd();
 }

formElementCard.addEventListener('submit', createItem);

initialCards.forEach(renderItem);

function closePopup() {
  popup.classList.remove('popup_opened');
}

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = formName.textContent;
  jobInput.value = formSubtitle.textContent;
}

function closePopupCard() { // закрытие попапа добавления фото
  popupCard.classList.remove('popup_opened');
}

function openPopupCard() { // открытие попапа добавления фото
  popupCard.classList.add('popup_opened');
}

function closePopupImg() { // закрытие попапа увеличенного фото
  popupImg.classList.remove('popup_opened');
}

const buttonImg = document.querySelector('.cards__image'); // сама картинка, на нее кликаем
const contentImg = document.querySelector('.popup-image__content'); // все внутренности попапа
const popupClosebuttonImg = document.querySelector('.popup-image__close');
const titleImg = document.querySelector('.popup-image__title'); // название фото в попапе
const popupImg = document.querySelector('.popup-image'); // весь попап
const popupName = document.querySelector('.cards__name'); // название на странице
const popupFullImg = document.querySelector('.popup-img__img'); // картинка в попапе

button.addEventListener('click', openPopup);
buttonAdd.addEventListener('click', openPopupCard);

popupCloseButton.addEventListener('click', closePopup);
popupCloseButtonCard.addEventListener('click', closePopupCard);
popupClosebuttonImg.addEventListener('click', closePopupImg); // закрываем по нажатию на крестик

function formSubmitHandler (evt) {
    evt.preventDefault();
    formName.textContent = nameInput.value;
    formSubtitle.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
