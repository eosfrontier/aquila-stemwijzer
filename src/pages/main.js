import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import {HomePageCards} from '../components/homepage-cards';

function MainPage() {
  return (
    <div className="page-home">
      <Header />

      <main className="container--full">
        <section className="container flex gap-4 mb-4">
          {HomePageCards()}
        </section>

        <section className="container">
          <h1>240 NT REPUBLIC ELECTIONS</h1>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MainPage;
