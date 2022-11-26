import React from 'react';
import Header from '../components/header';

import {HomePageCards} from '../components/homepage-cards';

function MainPage() {
  return (
    <div className="page-home">
      <Header />

      <main className="container--full">
        <section className="container flex flex--column flex-md--row gap-4">
          {HomePageCards()}
        </section>

        <section className="container block__election">
          <h1>General Elections</h1>

          <p>
            The <strong>240NT General Elections</strong> are fast approaching.{' '}
          </p>

          <p>
            These - like any - elections hold tremendous importance, and the
            results will impact every citizen of the Republic.
          </p>

          <p>
            <strong>You</strong> have the Duty and power to make key decisions
            for you, your family, and the Galactic community. This year's
            election goes way beyond just us - species-wide war efforts,
            interfactional cooperation, rapid changes in external cultures - all
            factor in our lives, and how we will factor in theirs.
          </p>
        </section>

        <section className="container--full block__prepare">
          <div className="container">
            <h2>How can I prepare?</h2>

            <ul>
              <li>
                <strong>Get informed</strong>
                <span>
                  - read up on issues (local and galactic-wide) and figure out
                  where you stand.
                </span>
              </li>
              <li>
                <strong>Get out and talk to people</strong>
                <span>
                  - Voice your opinions on public forums - when we engage each
                  other about the issues, we stand to become better-informed.
                </span>
              </li>
              <li>
                <strong>Get ready</strong>
                <span>
                  - find out where You can vote early, and stay up to date on
                  local news.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="block__about container--full">
          <div className="container">
            <h2>About ProDEM (org)</h2>

            <p>
              ProDEM is an independant organisation approved by the
              <i>Interplanetair kiescomité der Aquila Republiek</i>, whose sole purpose is to keep our citizens informed about the democratic process.
            </p>

            <p>
              To keep the status of Full Neutrality, we have no affiliations
              with any of the candidates or parties.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
