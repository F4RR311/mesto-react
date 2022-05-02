import React, {useEffect} from "react";
import Card from "./Card";
import {api} from "../utils/Api";


const Main = (props) => {

    const [userProfile, setProfile] = React.useState({});
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        Promise.all([api.getProfile(), api.getInitialCards()])
            .then(([profileInfo, cards]) => {
                setProfile(profileInfo);
                setCards(cards);

            })
            .catch((err) => {
                console.error(err);
            })
    }, []);



    return (
        <main>
            <section className="profile">
                <button className="profile__avatar-btn" type="button" title="Обновить аватар">
                    <img className="profile__avatar" src={userProfile.avatar}

                         alt="Аватар профиля"/></button>
                <div className="profile__info">
                    <div className="profile__info-edit-wrap">
                        <h1 className="profile__title">{userProfile.name}</h1>
                        <button className="profile__edit-button" type="button"> </button>
                    </div>
                    <p className="profile__description">{userProfile.about}</p>
                </div>
                <button className="profile__add-card" type="button"> </button>
            </section>
            <section className="elements">

                    {cards.map((card, id) => (
                   <Card
                        key={id}
                        card={card}
                        link={card.link}
                        name={card.name}
                        likes={card.likes.length}

                    />

                        ))}


            </section>
        </main>
    )

}

export default Main;

//
// {isLoaded ? items.map((obj) => (<PizzaBlock
//         onClickAddPizza={handleAddPizzaToCart}
//         key={obj.id}
//         addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
//         {...obj}/>))
//     : Array(12).fill(0)
//         .map((_, index) => <LoadingBlock key={index}/>)}