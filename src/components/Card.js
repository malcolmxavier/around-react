import React from 'react';

function Card(props) {
    function handleCardClick() {
        props.onCard(props.card);
    }

    return(
        <li className='photo-grid__item' key={props.card.id}>
            <div className='photo-grid__image' style={{backgroundImage:`url(${props.image})`}} onClick={handleCardClick}></div>
            <button className='trash-button' aria-label='Delete Card' onClick={props.onDeleteCard}></button>
            <div className='photo-grid__description'>
                <h3 className='photo-grid__label'>{props.title}</h3>
                <div className='photo-grid__likes'>
                    <button className='like-button' aria-label='Like Card'></button>
                    <p className='photo-grid__likes-count'>{props.likes}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;