import React from 'react';
import Header from '../components/header';

// import {HomePageCards} from '../components/homepage-cards';

function PartyAboutPage() {
  return (
    <div className="page-info">
      <Header />

      <main className="container--full">
        <div className="container">
          <header>
            <h1>About the parties</h1>
          </header>

          <section className="flex flex--row gap-4">
            <article className="col col-10">
              <div className="row">Hmm, in een row.</div>

              <div className="row">Hmm, OOK in een row.</div>
            </article>

            <nav className="col col-2">
              <ul className="flex flex--column gap-2">
                <li>Brachi</li>
                <li>NUS</li>
                <li>Cornu</li>
                <li>Beccus</li>
              </ul>
            </nav>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PartyAboutPage;
