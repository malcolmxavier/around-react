import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddCardPopup(props) {;
    const [newCardName, setNewCardName] = React.useState({})
    const [newCardLink, setNewCardLink] = React.useState({});

    function handleNewCardNameChange(e) {
        setNewCardName(e.target.value);
    }

    function handleNewCardLinkChange(e) {
        setNewCardLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddCardSubmit({
        name: newCardName,
        link: newCardLink
        })
    }

    return(
        <PopupWithForm name='add-card' action='Add Card' title='New Place' button='create' onClose={props.onClose} isOpen={props.isOpen} onSubmit={handleSubmit}>
          <input name='name' id='card-label' className='popup__input popup__input_type_label' type='text' placeholder='Label' required minLength="1" maxLength="30" onChange={handleNewCardNameChange} />
          <span id='card-label-error' className='popup__error'></span>
          <input name='link' id='card-url' className='popup__input popup__input_type_url' type='url' placeholder='Image URL' required onChange={handleNewCardLinkChange} />
          <span id='card-url-error' className='popup__error'></span>
        </PopupWithForm>
    )
}

export default AddCardPopup;