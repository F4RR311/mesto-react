import './index.css'

function App() {
    return (
        <div className="page">
            <header className="header">
                <img className="header__logo" type="image/svg"
                     alt="Логотип Mesto"/>

            </header>
            <main>
                <section className="profile">
                    <button className="profile__avatar-btn" type="button" title="Обновить аватар">
                        <img className="profile__avatar" src="#"
                             alt="Аватар профиля"/></button>
                    <div className="profile__info">
                        <div className="profile__info-edit-wrap">
                            <h1 className="profile__title"></h1>
                            <button className="profile__edit-button" type="button"></button>
                        </div>
                        <p className="profile__description"></p>
                    </div>
                    <button className="profile__add-card" type="button"></button>
                </section>
                <section className="elements">
                    <template className="elements-template">
                        <article className="element">
                            <button className="element__delete-button" type="button"></button>
                            <img className="element__image" alt=""/>
                            <h2 className="element__title"></h2>
                            <div className="element__like-container">
                                <button className="element__button-heart" type="button" aria-label="Нравится"></button>
                                <span className="element__button-heart-count"></span>
                            </div>
                        </article>
                    </template>
                </section>
            </main>
            <footer className="footer">
                <p className="footer__copyright">&copy; 2022. Леонтьев Валерий</p>
            </footer>
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
