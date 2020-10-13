import React from 'react';
import './About.css';
import AboutEmployee from './AboutEmployee';

const employees = [
{
    name: "Agnieszka",
    desc: "Agnieszka, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae omnis mollitia. Corrupti harum natus eos minus iure, vel quidem iste aperiam quam tenetur a nesciunt fugit in. At, molestias.",
    img: "https://pl.freepik.com/darmowe-zdjecie/portret-szczesliwa-kobieta_2859026.htm"
},
{
    name: "Dorota",
    desc: "Dorota, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae omnis mollitia. Corrupti harum natus eos minus iure, vel quidem iste aperiam quam tenetur a nesciunt fugit in. At, molestias.",
    img: "https://pl.freepik.com/darmowe-zdjecie/portret-amerykanskiej-kobiety_3081541.htm#page=1&query=twarz%20kobiety&position=32"
},
{
    name: "Zosia",
    desc: "Zosia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae omnis mollitia. Corrupti harum natus eos minus iure, vel quidem iste aperiam quam tenetur a nesciunt fugit in. At, molestias.",
    img: "https://pl.freepik.com/darmowe-zdjecie/mlody-azjatycki-dziewczyna-portret-odizolowywajacy_3679509.htm#page=1&query=twarz%20kobiety&position=34"
}
]

function About() {
  return (
    <section className="about" id="staffPage">
        <div className="container">
        <h1>Nasi specjaliści</h1>
        {employees.map(employee => {
            return <AboutEmployee name={employee.name} desc={employee.desc} img={employee.img}></AboutEmployee>
        })}
        </div>
    </section>
  );
}
export default About;