import React from "react";
import InfoTooltipSuccess from "../images/svg/InfoTooltipSuccess.svg";
import InfoTooltipError from "../images/svg/InfoTooltipError.svg";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (

    <section className={`popup ${isOpen ? "popup_active" : ""}`} >
      <div className="popup__container">
        <div className="popup__success">

          {isSuccess ?
            (<img className="popup__success-image" src={InfoTooltipSuccess} alt="Success" />) :
            (<img className="popup__success-image" src={InfoTooltipError} alt="Error" />)}

          <span className="popup__success-text">
            {isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
          </span>

        </div>

        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
          onClick={onClose}
        />
      </div>
    </section>
  )
}

export default InfoTooltip;