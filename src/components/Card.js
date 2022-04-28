import React from "react";

const Card = (props)=>{


    return(
        <article className="element">
            <button className="element__delete-button" type="button"></button>
            <img className="element__image" alt=""/>
            <h2 className="element__title"></h2>
            <div className="element__like-container">
                <button className="element__button-heart" type="button" aria-label="Нравится"></button>
                <span className="element__button-heart-count"></span>
            </div>
        </article>
    )




}
export default Card;