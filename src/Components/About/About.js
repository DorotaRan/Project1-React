import React from 'react';
import './About.css';

function About() {
  return (
    <section class="about" id="staffPage">
        <div class="container">
        <h1>Nasi specjaliści</h1>
        <div class="about-employee">
            <div class="about-employee-pic pic-straight"></div>
            <div class="about-employee-desc">
                <h2>Imię Nazwisko [dział]</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque 
                recusandae omnis mollitia. Corrupti harum natus eos minus iure, 
                vel quidem iste aperiam quam tenetur a nesciunt fugit in. At, molestias.
                </p>
            </div>
        </div>

        <div class="about-employee">
            <div class="about-employee-pic pic-reverse"></div>
            <div class="about-employee-desc">
                <h2>Imię Nazwisko [dział]</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque 
                recusandae omnis mollitia. Corrupti harum natus eos minus iure, 
                vel quidem iste aperiam quam tenetur a nesciunt fugit in. At, molestias.
                </p>
            </div>
        </div>
        </div>
    </section>
  );
}
export default About;