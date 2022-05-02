import React from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleEditPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setSelectedCard(null)

    }

    return (
        <div className="page">
            <Header/>
            <Main onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleEditPlaceClick}
                  onCardClick={handleCardClick}
            />
            <Footer/>
            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                name={'editProfile'}
                form={'profileData'}
                title={'Редактировать профиль'}
                buttonText={'Сохранить'}
                children={(
                    <>
                        <input className="popup__input"
                               id="popup__name-input"
                               name="name"
                               type="text"
                               placeholder="Имя"
                               required minLength="2" maxLength="40"/>
                        <span id="popup__name-input-error" className="popup__input-error">
                        </span>
                        <input className="popup__input"
                               name="job"
                               id="popup__job-input"
                               type="text"
                               placeholder="О себе"
                               required minLength="2" maxLength="200"/>
                        <span id="popup__job-input-error" className="popup__input-error">
                        </span>

                    </>
                )}
            />
            <PopupWithForm
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                name={'newPlace'}
                form={'addPlace'}
                title={'Новое место'}
                buttonText={'Создать'}
                children={(
                    <>
                        <input className="popup__input" id="popup__placeName-input" name="placeName"
                               placeholder="Название"
                               required minLength="2" maxLength="30"/>
                        <span id="popup__placeName-input-error" className="popup__input-error">
                        </span>
                        <input className="popup__input" id="popup__placeLink-input" name="placeLink"
                               placeholder="Ссылка на картинку" required type="url"/>
                        <span id="popup__placeLink-input-error" className="popup__input-error">
                        </span>

                    </>
                )}
            />
            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                name={'addAvatar'}
                form={'avatarForm'}
                title={'Обновить аватар'}
                buttonText={'Сохранить'}
                children={(
                    <>
                        <input className="popup__input" id="popup__placeAvatar-input"
                               name="avatar" placeholder="Ссылка на картинку" required type="url"/>
                        <span id="popup__placeAvatar-input-error" className="popup__input-error"></span>
                    </>
                )}
            />
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </div>
    );
}

export default App;
