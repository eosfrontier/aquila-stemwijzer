import React from 'react';
import Header from '../components/header';


function VoteLocationPage() {
  return (
    <div className="page-root">
      <Header />

      <main className="container container--full">
        <article className="container">
          <header>
            <h1>Where can I vote?</h1>
          </header>

          <section className="flex flex--row gap-4">
            <div>
              <h2>Disclaimer - location intel</h2>

              <p>
                Your connection appears to originate from a non-public
                GaiaNet-region (<strong>(Mn/EOS)</strong>)
              </p>

              <p>
                This will likely limit/restrict the available results below.
              </p>

              <p>
                Should the results show an entirely different planet and/or city
                - please visit us on a public terminal, or try again later.
              </p>
            </div>

            <div></div>
          </section>

          <section>
            <h2>Nearby voting stations </h2>
            <p>1 result(s)</p>

            Bastion   (bastion logo???)


          </section>
        </article>
      </main>
    </div>
  );
}

export default VoteLocationPage;
