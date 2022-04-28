import React, {useEffect} from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Card from "./Card";
import {api} from "../utils/Api";
//
// isEditProfilePopupOpen
// isAddPlacePopupOpen
// isEditAvatarPopupOpen


function App() {

    const [userName, setUserName] = React.useState();
    const [profile, setProfile] = React.useState({});
    const [userDescription , setUserDescription ] = React.useState({});
    const [userAvatar, setUserAvatar] = React.useState({});
    const [cards, setCards] = React.useState([]);

    useEffect(()=>{
        Promise.all([api.getProfile(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setProfile(userData);
                setCards(cards);

            })
    },[]);

    return (
        <div className="page">
            <Header/>

            <Main profile={profile}
                  avatar={profile.avatar}
                  name={profile.name}
                  about={profile.about}
                  cards={cards}
                  />
            <Footer/>
            <section className="elements">
                <template className="elements-template">

                </template>
            </section>

            <div className="popup popup_profile">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="close"></button>
                    <form name="profile" className="popup__form" noValidate>
                        <fieldset className="popup__set">
                            <h2 className="popup__title">Редактировать профиль</h2>
                            <label className="popup__form-field">
                                <input className="popup__input"
                                       id="popup__name-input"
                                       name="name"
                                       type="text"
                                       placeholder="Имя"
                                       required minLength="2" maxLength="40"/>
                                <span id="popup__name-input-error" className="popup__input-error"></span>
                            </label>
                            <label className="popup__form-field">
                                <input className="popup__input"
                                       name="job"
                                       id="popup__job-input"
                                       type="text"
                                       placeholder="О себе"
                                       required minLength="2" maxLength="200"/>
                                <span id="popup__job-input-error" className="popup__input-error"></span>
                            </label>
                            <button type="submit" disabled className="popup__button">Сохранить</button>
                        </fieldset>
                    </form>
                </div>
                <div className="popup__overlay"></div>
            </div>
            <div id="newPlace" className="popup popup_place">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="close"></button>
                    <form className="popup__form" name="newPlace" noValidate>
                        <fieldset className="popup__set">
                            <h2 className="popup__title">Новое место</h2>
                            <label className="popup__form-field">
                                <input className="popup__input" id="popup__placeName-input" name="placeName"
                                       placeholder="Название"
                                       required minLength="2" maxLength="30"/>
                                <span id="popup__placeName-input-error" className="popup__input-error"></span>
                            </label>
                            <label className="popup__form-field">
                                <input className="popup__input" id="popup__placeLink-input" name="placeLink"
                                       placeholder="Ссылка на картинку" required type="url"/>
                                <span id="popup__placeLink-input-error" className="popup__input-error"></span>
                            </label>
                            <button type="submit" disabled className="popup__button">Создать</button>
                        </fieldset>
                    </form>
                </div>
                <div className="popup__overlay"></div>
            </div>
            <div className="popup popup_delete-confirm">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="close"></button>
                    <form className="popup__form" noValidate>
                        <fieldset className="popup__set">
                            <h2 className="popup__title">Вы уверены</h2>
                            <button type="submit" className="popup__button">Да</button>
                        </fieldset>
                    </form>
                </div>
                <div className="popup__overlay"></div>
            </div>
            <div className="popup popup_image" id="popupImage">
                <div className="popup__image-container">
                    <button className="popup__close"
                            type="button" aria-label="Закрыть"></button>
                    <figure className="popup__image-fiqure">
                        <img className="popup__image" alt=""/>
                        <figcaption className="popup__image-name"></figcaption>
                    </figure>
                </div>
                <div className="popup__overlay"></div>
            </div>
            <div className="popup popup_avatar">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="close"></button>
                    <form className="popup__form" name="avatarForm" noValidate>
                        <fieldset className="popup__set">
                            <h2 className="popup__title">Обновить аватар</h2>
                            <label className="popup__form-field">
                                <input className="popup__input" id="popup__placeAvatar-input"
                                       name="avatar" placeholder="Ссылка на картинку" required type="url"/>
                                <span id="popup__placeAvatar-input-error" className="popup__input-error"></span>
                            </label>
                            <button type="submit" disabled className="popup__button">Сохранить</button>
                        </fieldset>
                    </form>
                </div>
                <div className="popup__overlay"></div>
            </div>


        </div>
    );
}


export default App;
