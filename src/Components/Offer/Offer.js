import React from 'react';
import './Offer.css';
import OfferBox from './OfferBox';

const offers = [
    {
        offerTitle: 'pączek',
        isNew: true
    },
    {
        offerTitle: 'chleb pszenny',
        isNew: false
    },
    {
        offerTitle: 'bagietka',
        isNew: false
    },
    {
        offerTitle: 'rogal',
        isNew: false
    },
    {
        offerTitle: 'croissant',
        isNew: true
    },
    {
        offerTitle: 'kajzerka',
        isNew: false
    },
    {
        offerTitle: 'chałka',
        isNew: false
    },
    {
        offerTitle: 'chleb żytni',
        isNew: false
    },
]

function Offer() {
  return (
    <section className="offers text-white" id="offers">
        <div className="container">
            <h1>Czym zajmuje się nasza firma?</h1>
            <div className="services">
                {offers.map(offer => {
                    return <OfferBox title = {offer.offerTitle} isNew = {offer.isNew}/>
                })}
               
            </div>
        </div>
    </section>
  );
}
export default Offer;