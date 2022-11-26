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
            <article className="flex flex--column gap-4">
              {/*  */}
              <div className="card card__body--large">
                <div className="flex gap-4">
                  <div className="col-2">
                    <img src="/vectors/brachi.svg" alt="logo Brachi" />
                  </div>
                  <div className="col-6">
                    <h2>Brachi</h2>
                    <p>(Last updated: 25-04-240NT)</p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card card__body--large">
                <div className="flex gap-4">
                  <div className="col-2">
                    <img src="/vectors/cornu.svg" alt="logo Cornu" />
                  </div>
                  <div className="col-6">
                    <h2>Cornu</h2>
                    <p>(Last updated: 25-04-240NT)</p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card card__body--large">
                <div className="flex gap-4">
                  <div className="col-2">
                    <img src="/vectors/nus.svg" alt="logo NUS" />
                  </div>
                  <div className="col-6">
                    <h2>NUS</h2>
                    <p>(Last updated: 25-04-240NT)</p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card card__body--large">
                <div className="flex gap-4">
                  <div className="col-2">
                    <img src="/vectors/beccus.svg" alt="logo the Beccus" />
                  </div>
                  <div className="col-6">
                    <h2>Beccus</h2>
                    <p>(Last updated: 25-04-240NT)</p>
                  </div>
                </div>
              </div>

              {/*  */}
            </article>

          </section>
        </div>
      </main>
    </div>
  );
}

export default PartyAboutPage;
