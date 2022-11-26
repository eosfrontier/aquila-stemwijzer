import React from 'react';
import Header from '../components/header';

function PartyAboutPage() {
  return (
    <div className="page-info">
      <Header />

      <main className="container--full">
        <div className="container">
          <header>
            <h1>The Parties/Candidate</h1>
          </header>



          <section className="parties__content">
            <article className="flex flex--column gap-4 col col-10">
              <div className="card card__body--large">
                <h2>Brachi</h2>
                <p>(Last updated: 25-04-240NT)</p>
              </div>

              <div className="card card__body--large">
                <h2>Cornu</h2>
                <p>(Last updated: 25-04-240NT)</p>
              </div>

              <div className="card card__body--large">
                <h2>NUS</h2>
                <p>(Last updated: 25-04-240NT)</p>
              </div>

              <div className="card card__body--large">
                <h2>Beccus</h2>
                <p>(Last updated: 25-04-240NT)</p>
              </div>
            </article>

            <nav className="col col-2 col-md-3 col-lg-2">
              <ul className="parties__sidenav">
                <li>
                  <img src="/vectors/brachi.svg" alt="logo Brachi" />
                </li>
                <li>
                  <img src="/vectors/cornu.svg" alt="logo Cornu" />
                </li>
                <li>
                  <img src="/vectors/nus.svg" alt="logo Nus" />
                </li>
                <li>
                  <img src="/vectors/beccus.svg" alt="logo Beccus" />
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PartyAboutPage;
