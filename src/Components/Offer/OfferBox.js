import React from 'react';


function OfferBox({title, isNew}) {
  return (
    <div className="services-box">
        <div className={`${isNew ? "services-box-dot" : ""} `}></div>
        <div className="services-box-content">
        <h2>{title}</h2>
        {isNew && <span class="newOffer">(Nowość!)</span>}
        </div>
    </div>
  );
}
export default OfferBox;