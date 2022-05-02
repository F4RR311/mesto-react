import React from "react";

const ImagePopup = (props) =>{
    return(
        <div className={`popup popup_image ${props.card ? 'popup_opened': ''} `} id="popupImage">
            <div className="popup__image-container">
                <button className="popup__close"
                        type="button" aria-label="Закрыть"> </button>
                <figure className="popup__image-fiqure">
                    <img className="popup__image" alt=""/>
                    <figcaption className="popup__image-name"> </figcaption>
                </figure>
            </div>
            <div className="popup__overlay"> </div>
        </div>
    )
}

export default ImagePopup;