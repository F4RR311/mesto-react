import React from "react";

const Card = (props) => {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element">
            <button className="element__delete-button" type="button"></button>
            <img className="element__image" alt={props.name} src={props.link} title="Посмотреть в полном размере"
                 onClick={handleClick}/>
            <h2 className="element__title">{props.name} </h2>
            <div className="element__like-container">
                <button className="element__button-heart" type="button" aria-label="Нравится"></button>
                <span className="element__button-heart-count">{props.likes} </span>
            </div>
        </article>
    )


}
export default Card;