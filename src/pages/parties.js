import React from 'react';
import Header from '../components/header';

function PartyAboutPage() {
  return (
    <div className="page-info">
      <Header />

      <main className="container--full">
        <div className="container">
          <header>
            <h1>The Parties/Candidates</h1>
          </header>

          <section className="parties__intro">
            <p>Summary of the four parties qua Reipublicae optima forma.</p>
            <p>Biggest positions for the upcoming elections:</p>
          </section>

          <section className="parties__content">

          <article className="card card__body--large">
              <div className="flex flex--column flex-md--row gap-6">
                <div className="parties__logo col-2">
                  <img src="/vectors/beccus.svg" alt="logo the Beccus" />
                </div>
                <div className="col-6">
                  <h2>Beccus</h2>

                  <p>In order for the Republic to enable its citizens to experience maximum freedom and excel within that freedom, we believe the following choices must be made
                    be made:</p>
                  <ol>
                    <li>Shrinking the state apparatus.</li>
                    <li>Restructuring the defence apparatus towards defending the Republic.</li>
                    <li>Collaboration with other factions calibrated on safeguarding interests of the Republic.</li>
                  </ol>
                </div>
              </div>
            </article>

            <article className="card card__body--large">
              <div className="flex flex--column flex-md--row gap-6">
                <div className="parties__logo col-2">
                  <img src="/vectors/brachi.svg" alt="logo Brachi" />
                </div>
                <div className="col-6">
                  <h2>Brachi</h2>

                  <p>To overcome current and future threats to the current status quo within the Republic, the following activities are necessary:</p>
                  <ol>
                    <li>Consolidating and expanding activities to teach the Aquilitas to the people of the Republic.</li>
                    <li>Expanding the Republic to include new planets.</li>
                    <li>Appropriating industries fundamental to the Republic's existence.</li>
                  </ol>
                </div>
              </div>
            </article>

            <article className="card card__body--large">
              <div className="flex flex--column flex-md--row gap-6">
                <div className="parties__logo col-2">
                  <img src="/vectors/cornu.svg" alt="logo Cornu" />
                </div>
                <div className="col-6">
                  <h2>Cornu</h2>

                  <p>The Republic will have to keep moving forward, constantly reinventing and adapting itself to the universe within which it exists.</p>
                  <ol>
                    <li>The ICC must become larger and more capable.</li>
                    <li>The Republic must encourage innovation and research and development more.</li>
                    <li>The government apparatus must continue to evolve.</li>
                  </ol>
                </div>
              </div>
            </article>

            <article className="card card__body--large">
              <div className="flex flex--column flex-md--row gap-6">
                <div className="parties__logo col-2">
                  <img src="/vectors/nus.svg" alt="logo NUS" />
                </div>
                <div className="col-6">
                  <h2>NUS</h2>

                  <p>The Republic should introduce universal voting rights and move away from the split between Mulum and Civitas.</p>
                  <ol>
                    <li>Harnessing the unused potential of the 1,239,354,285 Mulum.</li>
                    <li>Creating one legal system that applies to every Aquilan.</li>
                    <li>Ending all restrictions on limited artificial intelligent systems.</li>
                  </ol>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PartyAboutPage;
