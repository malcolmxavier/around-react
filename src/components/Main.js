import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <main className='content'>
        <section className='profile'>
          <div className='profile__avatar'>
            <img src={currentUser.avatar} alt='Profile avatar' className='avatar avatar_profile'/>
            <div className='avatar__edit-overlay'>
              <button className='edit-button edit-button_avatar' aria-label="Edit Avatar" onClick={props.onEditAvatar}></button>
            </div>
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button className='edit-button edit-button_profile' aria-label='Edit Profile' onClick={props.onEditProfile}></button>
            <p className='profile__occupation'>{currentUser.about}</p>
          </div>
          <button className='add-button' aria-label='Add Card' onClick={props.onAddCard}></button>
        </section>

        <section className='photo-grid'>
          <ul className='photo-grid__list'>
            {props.children}
          </ul>
        </section>
      </main>
    </CurrentUserContext.Provider>
    );
}

export default Main;