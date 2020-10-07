import React from 'react';
import './Offer.css';

function Offer() {
  return (
    <section className="offers text-white" id="offers">
        <div className="container">
            <h1>Czym zajmuje się nasza firma?</h1>
            <div className="services">
                <div className="services-box">
                    <div className="services-box-dot"></div>
                    <div className="services-box-content">
                    <h2>Oferta 1</h2>
                    </div>
                </div>
                <div className="services-box">
                    <div className="services-box-content">
                    <h2>Oferta 2</h2>
                    </div>
                </div>
                <div className="services-box">
                    <div className="services-box-content">
                    <h2>Oferta 3</h2>
                    </div>
                </div>
                <div className="services-box">
                    <div className="services-box-content">
                    <h2>Oferta 4</h2>
                    </div>
                </div>
                <div className="services-box">
                    <div className="services-box-content">
                    <h2>Oferta 5</h2>
                    </div>
                </div>
                <div className="services-box">
                    <div className="services-box-content">
                    <h2>Oferta 6</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Offer;