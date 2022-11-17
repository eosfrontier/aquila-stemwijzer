import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <header className="navbar">
      <section className="navbar__top">
        <div className="container">

          <p><NavLink to="/">Logo here</NavLink></p>

        </div>
      </section>

      <section className="navbar__bottom">
        <div className="container">Bottom half</div>
      </section>
    </header>
  );
}


export default Header
