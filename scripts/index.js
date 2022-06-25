const buttonEditing = document.querySelector('.profile__editing');
const buttonAdd = document.querySelector('.profile__button-add'); // новый
const popupEditing = document.querySelector('.popup');
const popupEditingTwo = document.querySelector('.popup-editing');
const popupCard = document.querySelector('.popup-card'); // новый
const popupCloseButtonEditing = document.querySelector('.popup__close-button');
const popupCloseButtonCard = document.querySelector('.popup-card__close'); // новый
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElementEditing = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_description');
const itemTemplate = document.querySelector('.item__template').content; // скопировали ul в form
const cardsContainer = document.querySelector('.cards'); // ul списка html
const formElementCard = document.querySelector('.popup-card__form') // form новго попапа
// const popupCreate = document.querySelector('.popup-card__create');  // popup кнопка "Создать"
const placeInput = document.querySelector('.popup-card__path_field_place'); // добавить описание
const linkInput = document.querySelector('.popup-card__path_field_path'); // добавить ссылку на фото
const buttonImg = document.querySelector('.cards__image'); // сама картинка, на нее кликаем, чтобы открыть в попапе
const contentImg = document.querySelector('.popup-image__content'); // все внутренности попапа
const popupClosebuttonImg = document.querySelector('.popup-image__close');
const titleImg = document.querySelector('.popup-image__title'); // название фото в попапе
const popupImg = document.querySelector('.popup-image'); // весь попап
const popupName = document.querySelector('.cards__name'); // название на странице
const popupFullImg = document.querySelector('.popup-image__img'); // картинка в попапе

function сreateCard (cardDetails) {
  const containerCards = itemTemplate.querySelector('.cards__card').cloneNode(true);
  const cardsImg = containerCards.querySelector('.cards__image'); 
  const cardsNames = containerCards.querySelector('.cards__name');
  containerCards.querySelector('.cards__name').textContent = placeInput.value;
  containerCards.querySelector('.cards__image').src = linkInput.value;
  cardsImg.src = cardDetails.link; //тут добавлнеие данного массива из 6к
  cardsImg.alt = cardDetails.name;
  cardsNames.textContent = cardDetails.name;

  containerCards.querySelector('.cards__like').addEventListener('click', like); // лайк
  containerCards.querySelector('.cards__delete').addEventListener('click', function() { // удаление
    deleteCard(containerCards);
  });

  cardsImg.addEventListener('click', function() { // передаем в попап с фото значения со страницы
    popupFullImg.src = cardsImg.src;
    popupFullImg.alt = cardsImg.alt;
    titleImg.textContent = containerCards.querySelector('.cards__name').textContent;
    openFullImg();
  });

  return containerCards
};

function renderItem (terr) { // данные на создание карточки в ul до закрытия
  cardsContainer.prepend(terr);
}

function like(evt) {
  evt.target.classList.toggle('cards__like_active');
}

function deleteCard (item) {
  item.remove();
}

function createItem (evt) { // добавляет карточку на страницу и закрывает попап
  evt.preventDefault();
  const newCardName = placeInput.value;
  const newCardLink = linkInput.value;
  const card =  сreateCard({name: newCardName, link: newCardLink});
  console.log(card);
  renderItem(card);
  console.log(renderItem(card));
  formElementCard.reset();
  closeImg();
 }

 function editingFormSubmitHandler (evt) { // вводим данные в профиль, передаем их на страницу и закрыаем попап
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closeEditing();
}

function openPopup(popup) { // ОТКРЫТИЕ, общий попап, сюда вставляем нужный
  popup.classList.add('popup_opened');
}

function closePopup(popup) { // ЗАКРЫТИЕ, общий попап, сюда вставляем нужный
  popup.classList.remove('popup_opened');
}

function openEditing() {   // открытие попапа редактирования профиля
  openPopup(popupEditingTwo);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closeEditing() { // закрытие попапа редактирования профиля
  closePopup(popupEditingTwo);
}

function openImg() { // открытие попапа добавления фото
  openPopup(popupCard);
}

function closeImg() { // закрытие попапа добавления фото
  closePopup(popupCard);
}

function openFullImg() { // открытие попапа увеличенного фото
  openPopup(popupImg);
}

function closeFullImg() { // закрытие попапа увеличенного фото
  closePopup(popupImg);
}

buttonEditing.addEventListener('click', openEditing);
buttonAdd.addEventListener('click', openImg);
popupCloseButtonEditing.addEventListener('click', closeEditing);
popupCloseButtonCard.addEventListener('click', closeImg);
popupClosebuttonImg.addEventListener('click', closeFullImg); // закрываем по нажатию на крестик попапа

formElementEditing.addEventListener('submit', editingFormSubmitHandler);
formElementCard.addEventListener('submit', createItem);
initialCards.forEach( function (cardDetails) {
  const card =  сreateCard(cardDetails);
  renderItem(card);
});
