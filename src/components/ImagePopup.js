import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_img_enlarge ${card.link ? 'popup_active' : ''}`} id="popupBigImg">
      <div className="popup__enlarge-container">
        <img className="popup__big-img" src={card.link} alt={card.name} />
        <p className="popup__img-desc">{card.name}</p>
        <button type="button" className="popup__close" aria-label="Закрыть попап" onClick={onClose}></button>
      </div>
    </section>
  )
};

export default ImagePopup;