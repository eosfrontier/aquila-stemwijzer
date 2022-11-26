import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PAGES } from '../constants/pages';

const BottomNavContent = () => {
  const { pathname } = useLocation();

  if (pathname !== '' && pathname !== PAGES.HOME.path) {
    return <NavLink to={PAGES.HOME.path}>Return to homepage</NavLink>
  } else {
    return <span>Approved by the Interplanetair kiescomité der Aquila Republiek</span>
  }

}


function Header() {

  return (
    <header className="navbar">
      <section className="navbar__top">
        <div className="container">
            <NavLink className="navbar__logo" to={PAGES.HOME.path}>ProDEM</NavLink>
        </div>
      </section>

      <section className="navbar__bottom">
        <div className="container">
          {BottomNavContent()}
        </div>
      </section>
    </header>
  );
}


export default Header
