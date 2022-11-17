import React from 'react';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../constants/pages';

const _cards = [
  {
    image: 'polls1.png',
    imageAlt: 'rendition of poll booths',
    title: PAGES.WHERE.title,
    bodyContent: 'Find your nearest voting locations here',
    path: PAGES.WHERE.path,
  },
  {
    image: 'office1.png',
    imageAlt: 'cyan-coloured bright lit boardroom',
    title: PAGES.ABOUT_PARTIES.title,
    bodyContent: '(agendapunten)',
    path: PAGES.ABOUT_PARTIES.path,
  },
  {
    image: 'study1.png',
    imageAlt: 'sleek neon study',
    title: PAGES.ADVISOR.title,
    bodyContent: '(yes)',
    path: PAGES.ADVISOR.path,
  },
];

export function HomePageCards() {
  return _cards.map((card, index) => (
    <article className="col cursor-point card" key={index.toString()}>
      <NavLink to={card.path}>
        <div role="presentation" className="card__hero-container">
          <figure
            role="img"
            className="card__hero-image"
            style={{backgroundImage: `url(/images/${card.image})`}}
          ></figure>
        </div>

        <div className="card__body">
          <h2 className="card__header">{card.title}</h2>

          <p>{card.bodyContent}</p>
        </div>
      </NavLink>
    </article>
  ));
}
