import React from 'react';

function AboutEmployee({name, desc, img}) {
  return (
    <section>
        <div className="about-employee">
            <div style={{backgroundImage: `url(${img})`}} className="about-employee-pic"></div>
            <div className="about-employee-desc">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    </section>
  );
}
export default AboutEmployee;
