import React from 'react';

function PopupWithForm(props) {
    return (
        <div>
            <section className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
            <div className='popup__container popup__container_type_form'>
              <button className='close-button' aria-label={`Close ${props.action} Popup`} onClick={props.onClose}></button>
              <h2 className='popup__title'>{props.title}</h2>
              <form className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit}>
                {props.children}
                <button className={`popup__button ${props.button}-button`} type='submit' aria-label={`${props.action}`} onClick={props.onClose}></button>
              </form>
            </div>
          </section>
        </div>
    );
}

export default PopupWithForm;