import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function EditAvatarPopup(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const [avatar, setAvatar] = React.useState(currentUser.avatar)
    const avatarRef = React.useRef(avatar)

    function handleAvatarChange(e) {
        setAvatar(avatarRef.current.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        props.onUpdateAvatar(avatar)
    }

    return (
        <PopupWithForm name='edit-avatar' action='Edit Avatar' title='Change profile picture' button='save' onClose={props.closeAllPopups} isOpen={props.isOpen} onSubmit={handleSubmit}>
          <input name='avatar' id='avatar-url' className='popup__input popup__input_type_url' type='url' placeholder='Image URL' required ref={avatarRef} onChange={handleAvatarChange} />
          <span id='avatar-url-error' className='popup__error'></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;