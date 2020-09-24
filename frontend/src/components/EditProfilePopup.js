import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [description, setDescription] = React.useState(currentUser.about);

    React.useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
      }, [currentUser])

      function handleNameChange(e) {
        setName(e.target.value)
      }
    
      function handleDescriptionChange(e) {
        setDescription(e.target.value)
      }

      function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateUser({
          name,
          about: description,
        });
      }

      return (
        <PopupWithForm name='edit-profile' action='Edit Profile' title='Edit profile' button='save' onClose={props.onClose} isOpen={props.isOpen} onSubmit={handleSubmit}>
          <input name='userName' id='profile-name' className='popup__input popup__input_type_name' type='text' placeholder='Name' required minLength="2" maxLength="40" onChange={handleNameChange} />
          <span id='profile-name-error' className='popup__error'></span>
          <input name='userOccupation' id='profile-occupation' className='popup__input popup__input_type_occupation' type='text' placeholder='About Me' required minLength="2" maxLength="200" onChange={handleDescriptionChange} />
          <span id='profile-occupation-error' className='popup__error'></span>
        </PopupWithForm>
      )
}

export default EditProfilePopup;

