import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <section className="landing-page">
        <div className="landing-page-shadow">
            <div className="container">
                <div className="landing-page-text text-white">
                    <h1>
                        Nasza firma oferuje najwyższej jakości produkty
                    </h1>
                    <h2>Nie wierz nam na słowo - sprawdź</h2>
                    <a className="btn-offer text-white" href="#offers">oferta</a>
                </div>
            </div>
        </div>
    </section>
  );
}
export default LandingPage;