import {useContext, useEffect, useState} from "react";
import Card from "./Card";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext"


const Main = (props) => {
    const currentUser = useContext(CurrentUserContext);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getInitialCards()])
            .then(([cards]) => {
                setCards(cards);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);

    return (

        <main>
            <section className="profile">
                <button onClick={props.onEditAvatar} className="profile__avatar-btn" type="button"
                        title="Обновить аватар">
                    <img className="profile__avatar" src={currentUser.avatar}
                         alt="Аватар профиля"/></button>
                <div className="profile__info">
                    <div className="profile__info-edit-wrap">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button onClick={props.onEditProfile} className="profile__edit-button" type="button">
                        </button>
                    </div>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button onClick={props.onAddPlace} className="profile__add-card" type="button">
                </button>
            </section>
            <section className="elements">
                {cards.map((card, _id) => (
                    <Card
                        key={card._id}
                        card={card}
                        link={card.link}
                        name={card.name}
                        likes={card.likes.length}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </section>
        </main>

    )
}

export default Main;
