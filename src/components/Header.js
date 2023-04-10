import React from 'react';
import headerLogo from "./../images/svg/logo.svg"

function Header() {
  return (
    <header className="header">
      <img 
      src={headerLogo}
      alt="Логотип страници"
      className="header__logo" />
    </header>
  )
}

export default Header