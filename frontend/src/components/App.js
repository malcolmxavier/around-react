import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Card from './Card.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddCardPopup from './AddCardPopup.js';
import PopupWithImage from './PopupWithImage.js';
import {api} from '../utils/API.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import '../index.css';

function App() {
  const [currentUser, setCurrentUser] = React.useState({avatar: '', name: '', about: ''});
  const [cards, setCards] = React.useState([]);
  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [imageCaption, setImageCaption] = React.useState("");
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.removeCardLike(card._id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => console.log(err));
    } else {
      api.addCardLike(card._id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => console.log(err));
    }
  }

  function handleCardDelete(card){
    api.removeCard(card._id)
    .then((res) => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
    .catch(err => console.log(err))
  }

  React.useEffect(() => {
    api.getCardList()
    .then(res => {
      setCards(res);
    })
    .catch(err => console.log(err))
  }, [setCards, cards])

  React.useEffect(() => {
    api.getUserInfo()
    .then(res => {
      setCurrentUser(res);
    })
    .catch(err => console.log(err));
    }, [setCurrentUser]
  )

  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
    .then(setCurrentUser({
      avatar,
      name: currentUser.name,
      about: currentUser.about
    }))
    .then(closeAllPopups())
    .catch(err => console.log(err));
  }

  function handleUpdateUser({name, about}) {
    api.setUserInfo(name, about)
    .then(setCurrentUser({
      avatar: currentUser.avatar,
      name,
      about
    }))
    .then(closeAllPopups())
    .catch(err => console.log(err));
  }

  function handleAddCardSubmit({name, link}){
    api.addCard({name, link})
    .then((newCard) => {
      setCards([...cards, newCard])}
    )
    .then(closeAllPopups())
    .catch(err => console.log(err));
  }

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleCardClick(link, caption){
    setIsImagePopupOpen(true);
    setImage(link);
    setImageCaption(caption);
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardClick}    
        >
          {cards.map((card) => {
          return (
            <Card
            card={card}
            key={card._id}
            id={card._id}
            image={card.link}
            title={card.name}
            likesCount={card.likes.length}
            onCardLike={handleCardLike}
            onDeleteCard={handleDeleteCardClick}
            onCard={handleCardClick}
            />
          )
        })}
        </Main>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddCardPopup isOpen={isAddCardPopupOpen} onClose={closeAllPopups} onAddCardSubmit={handleAddCardSubmit} />
        <PopupWithImage image={image} title={imageCaption} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
        <PopupWithForm name="delete-card" action='Delete Card' title='Are you sure?' button='yes' onClose={closeAllPopups} isOpen={isDeleteCardPopupOpen} onSubmit={handleCardDelete} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
    
  );
}

export default App;

