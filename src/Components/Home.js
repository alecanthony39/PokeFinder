import React from "react";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <h2>Welcome to the Pokemon Finder!</h2>
      <p style={{ paddingTop: "30px" }}>
        Here at Pokemon finder you can find all the Pokemon information you've
        been looking for!
      </p>
      <img
        src="https://www.pngarts.com/files/4/Pokeball-PNG-Image-Transparent.png"
        alt="Pokeball"
        className={styles["home-image"]}
      ></img>
      <p className={styles["home-text"]}>
        We've Compiled all the items, moves, games, and of course Pokemon! To
        make sure all this information is ready for you at the click of a
        button!
      </p>
      <p className={styles["home-text"]}>
        Whether you're getting tournament ready or just browsing to craft the
        perfect team <br />
        We hope you find what you're looking for!
      </p>
    </div>
  );
};

export default Home;
