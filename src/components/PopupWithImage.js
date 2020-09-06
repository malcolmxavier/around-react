import React from 'react';

function PopupWithImage(props) {
    return (
        <div>
            <section className={props.isOpen ? 'popup popup_type_image popup_opened' : 'popup popup_type_image'}>
                <div className='popup__container popup__container_type_image'>
                <figure className='figure'>
                    <button className='close-button' aria-label='Close Image Popup' onClick={props.onClose}></button>
                    <img className='popup__image' alt={props.card.title} src={props.card.image}/>
                    <figcaption className='popup__caption'>{props.card.title}</figcaption>
                </figure>
                </div>
            </section>
        </div>
    );
}

export default PopupWithImage;