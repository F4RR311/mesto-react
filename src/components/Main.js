import React from "react";
import Card from "./Card";

const Main = () => {

    return (
        <main>
            <section className="profile">
                <button className="profile__avatar-btn" type="button" title="Обновить аватар">
                    <img className="profile__avatar" src="#"
                         alt="Аватар профиля"/></button>
                <div className="profile__info">
                    <div className="profile__info-edit-wrap">
                        <h1 className="profile__title">Жак кусто</h1>
                        <button className="profile__edit-button" type="button"></button>
                    </div>
                    <p className="profile__description">Исследователь</p>
                </div>
                <button className="profile__add-card" type="button"></button>
            </section>
            <section className="elements">
                <template className="elements-template">
                    <Card/>
                </template>
            </section>
        </main>
    )

}

export default Main;