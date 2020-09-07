import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import '../index.css';

function App() {
  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setSelectedCard(false);
    setIsDeleteCardPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
        onCard={handleCardClick}
        onDeleteCard={handleDeleteCardClick}
        selectedCard={selectedCard}
      ></Main>
      <PopupWithForm name='edit-avatar' action='Edit Avatar' title='Change profile picture' button='save' onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen}>
        <input name='avatar' id='avatar-url' className='popup__input popup__input_type_url' type='url' placeholder='Image URL' required />
        <span id='avatar-url-error' className='popup__error'></span>
      </PopupWithForm>
      <PopupWithForm name='edit-profile' action='Edit Profile' title='Edit profile' button='save' onClose={closeAllPopups} isOpen={isEditProfilePopupOpen}>
        <input name='userName' id='profile-name' className='popup__input popup__input_type_name' type='text' placeholder='Name' required minLength="2" maxLength="40" />
        <span id='profile-name-error' className='popup__error'></span>
        <input name='userOccupation' id='profile-occupation' className='popup__input popup__input_type_occupation' type='text' placeholder='About Me' required minLength="2" maxLength="200" />
        <span id='profile-occupation-error' className='popup__error'></span>
      </PopupWithForm>
      <PopupWithForm name='add-card' action='Add Card' title='New Place' button='create' onClose={closeAllPopups} isOpen={isAddCardPopupOpen}>
        <input name='name' id='card-label' className='popup__input popup__input_type_label' type='text' placeholder='Label' required minLength="1" maxLength="30" />
        <span id='card-label-error' className='popup__error'></span>
        <input name='link' id='card-url' className='popup__input popup__input_type_url' type='url' placeholder='Image URL' required />
        <span id='card-url-error' className='popup__error'></span>
      </PopupWithForm>
      <PopupWithImage image='' title='Image Caption' card={selectedCard} onClose={closeAllPopups} isOpen={selectedCard}/>
      <PopupWithForm name="delete-card" action='Delete Card' title='Are you sure?' button='yes' onClose={closeAllPopups} isOpen={isDeleteCardPopupOpen}/>
      <Footer />
    </div>
  );
}

export default App;

