import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    function handleCardClick() {
        props.onCard(props.image, props.title);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    return(
        <li className='photo-grid__item' key={props.id}>
            <div className='photo-grid__image' style={{backgroundImage:`url(${props.image})`}} onClick={handleCardClick}></div>
            <button className={isOwn ? 'trash-button' : 'trash-button_hidden'} aria-label='Delete Card' onClick={props.onDeleteCard}></button>
            <div className='photo-grid__description'>
                <h3 className='photo-grid__label'>{props.title}</h3>
                <div className='photo-grid__likes'>
                    <button className={isLiked ? 'like-button like-button_clicked' : 'like-button'} aria-label='Like Card' onClick={handleLikeClick}></button>
                    <p className='photo-grid__likes-count'>{props.likesCount}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;