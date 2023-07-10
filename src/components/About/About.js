import React from "react";
import "./About.scss";
import Avatar from "../../images/avatar.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img className="about__avatar" src={Avatar} alt="Avatar" />
        <div className="about__info">
          <h1 className="about__title">Acerca del autor</h1>
          <p className="about__text">
            Me llamo <span className="about__name">Robyn Cuadra</span>, soy una desarrolladora web
            Full Stack (MERN), me dedico a diseñar y crear sitios y aplicaciones web.
          </p>
          <p className="about__text">
            Tengo conocimientos en HTML, CSS, Javascript y React. Ademas de Node.js, Express, MongoDB, Git, Github.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
