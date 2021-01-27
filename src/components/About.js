import React from "react";
import "../styles/App.css";

const About = () => {
  return (
    <div className={"container"}>
      <h1>About Us</h1>
      <img
        src="https://cdn.custom-cursor.com/collections/129/cover-pokemon-preview.png"
        alt="lots of mans"
      />
      <p className={"text"}>
        Are you looking to add some new and rare mans to your collection? We
        have you covered! We have the finest selection of pokemans in all of the
        Koonto Region. Our collectors travel the world looking for new and
        interesting mans, which you could take home today! Take a look at our
        current selection, let us know if you have any requests and we'll get
        right on it!
      </p>
    </div>
  );
};

export default About;
