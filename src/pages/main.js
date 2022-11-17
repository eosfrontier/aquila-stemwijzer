import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import {HomePageCards} from '../components/homepage-cards';

function MainPage() {
  return (
    <div className="page-root">
      <Header />

      <main className="container container--full">
        <section className="container flex gap-4 mb-4">
          {HomePageCards()}
        </section>

        <section className="container">
          <h1>Election Guide</h1>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MainPage;
