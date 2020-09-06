import React from 'react';
import {api} from '../utils/API.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState("Name Placeholder");
  const [userDescription, setUserDescription] = React.useState("Description Placeholder");
  const [userAvatar, setUserAvatar] = React.useState("(.././images/blackheart.svg)");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then(res => {
      setUserName(res.name);
      setUserDescription(res.job);
      setUserAvatar(res.avatar);
    });

    api.getCardList()
    .then(res => {
      setCards(res.map(card => ({
        key: card._id,
        title: card.name,
        image: card.link,
        likes: card.likes.length
      })));
    })

  }, [])

  console.log(cards);

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar'>
          <img src={userAvatar} alt='Profile avatar' className='avatar avatar_profile'/>
          <div className='avatar__edit-overlay'>
            <button className='edit-button edit-button_avatar' aria-label="Edit Avatar" onClick={props.onEditAvatar}></button>
          </div>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>{userName}</h1>
          <button className='edit-button edit-button_profile' aria-label='Edit Profile' onClick={props.onEditProfile}></button>
          <p className='profile__occupation'>{userDescription}</p>
        </div>
        <button className='add-button' aria-label='Add Card' onClick={props.onAddCard}></button>
      </section>

      <section className='photo-grid'>
        <ul className='photo-grid__list'>
          {cards.map((card) => <Card
            key={card.id}
            title={card.title}
            image={card.image}
            likes={card.likes}
            card={card}
            onCard={props.onCard}
            onDeleteCard={props.onDeleteCard}
            />)
          }
        </ul>
      </section>
    </main>
    );
}

export default Main;