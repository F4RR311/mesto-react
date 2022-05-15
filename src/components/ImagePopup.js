import React from "react";

const ImagePopup = (props) => {

    return (
        <div className={`popup popup_image  ${props.card && 'popup_opened'} `} id="popupImage">
            <div className="popup__image-container">
                <button onClick={props.onClose} className="popup__close"
                        type="button" aria-label="Закрыть"> </button>
                <figure className="popup__image-figure">
                    <img className="popup__image" src={props.card ? props.card.link : ''}
                         alt={props.card ? props.card.name : ''}/>
                    <figcaption className="popup__image-name">{props.card ? props.card.name : ''} </figcaption>
                </figure>
            </div>

        </div>
    )
}

export default ImagePopup;