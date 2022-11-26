import React from 'react';
import Header from '../components/header';


function VoteLocationPage() {
  return (
    <div className="page-info">
      <Header />

      <main className="container--full">
        <article className="container">
          <header className="mt-2 mb-8">
            <h1>Where can I vote?</h1>
          </header>

          <section className="card card__body--large card__body--disclaimer">
            <h2 className="card-header">Disclaimer - location intel</h2>

            <p>
              Your connection appears to originate from a non-public
              GaiaNet-region <strong>(Mn/EOS)</strong>.
            </p>

            <p>This will likely limit/restrict the available results below.</p>

            <p>
              Should the results show an entirely different planet and/or city -
              please visit us on a public terminal, or try again later.
            </p>
          </section>

          <section className="mt-8 where-page-animations">
            <div className="frame-init__fade">
              <h2>Nearby voting stations </h2>

              <div className="frame-init__block" role="presentation">
                <div className="spinner ml-4"></div>
              </div>
            </div>

            <div className="where-results frame-second">
              <p className="mb-4">
                <strong>Displaying 1 result(s)</strong>
              </p>

              <hr />

              <article className="card card__body--large mt-4">
                <div className="flex flex--column gap-4 flex-md--row pt-4 pb-2">
                  <img
                    className="col-0"
                    src="/images/isoldi.jpeg"
                    alt="Image of isometric styled space infantry"
                  />

                  <div className="col-1">
                    <h3>'BASTION'</h3>

                    <p>
                      <i>Tip of the ICC Spear</i>
                    </p>
                    <p className="mt-5">
                      No further declassified info/description available. <br />
                      It is likely you will be briefed by local authorities
                      soon.
                    </p>
                    <p>
                      An extra <i>thank you!</i> from ProDEM - we're proud to
                      have you visiting us.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default VoteLocationPage;
