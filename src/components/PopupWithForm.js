import React from "react";

function PopupWithForm({ name, title, isOpen, onClose, children, buttonText, onSubmit }) {

  React.useEffect(() => {
    function handleEscClose(e) {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscClose);
      return () => window.removeEventListener("keydown", handleEscClose)
    }

  }, [onClose, isOpen])

  return (
    <section className={`popup ${isOpen ? "popup_active" : ""}`} id={name}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          name={name}
          className="popup__inputs"
          onSubmit={onSubmit}
          noValidate>
          {children}
          <button
            id={name}
            type="submit"
            className="popup__button">
            {buttonText}
          </button>
        </form>

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

export default PopupWithForm;