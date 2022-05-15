import {useEffect, useState} from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/Api.js"
import {CurrentUserContext} from "../contexts/CurrentUserContext"
import EditProfilePopup from "./EditProfilePopup";
import EditaAvatarPopup from "./EditaAvatarPopup";

function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        api.getProfile()
            .then((profileInfo) => {
                setCurrentUser(profileInfo)
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

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

    function handleUpdateUser(data) {
        api.editProfile(data).then((newUser) => {

            setCurrentUser(newUser);
            closeAllPopups();
        })
            .catch((err) => {
                console.error(err);
            });
    }

    function handleUpdateAvatar(avatar) {
        api.addAvatar(avatar).then((newAvatar) => {

            setCurrentUser(newAvatar);
            closeAllPopups();
        })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="wrapper">
                <div className="page">
                    <Header/>

                    <Main onEditAvatar={handleEditAvatarClick}
                          onEditProfile={handleEditProfileClick}
                          onAddPlace={handleEditPlaceClick}
                          onCardClick={handleCardClick}
                    />
                    <Footer/>

                    <PopupWithForm
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        name={'newPlace'}
                        form={'addPlace'}
                        title={'Новое место'}
                        buttonText={'Создать'}>
                        <input className="popup__input" id="popup__placeName-input" name="placeName"
                               placeholder="Название"
                               required minLength="2" maxLength="30"/>
                        <span id="popup__placeName-input-error" className="popup__input-error">
                        </span>
                        <input className="popup__input" id="popup__placeLink-input" name="placeLink"
                               placeholder="Ссылка на картинку" required type="url"/>
                        <span id="popup__placeLink-input-error" className="popup__input-error">
                        </span>
                    </PopupWithForm>

                    <EditaAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />

                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                    <EditProfilePopup
                        onClose={closeAllPopups}
                        isOpen={isEditProfilePopupOpen}
                        onUpdateUser={handleUpdateUser}

                    />


                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
