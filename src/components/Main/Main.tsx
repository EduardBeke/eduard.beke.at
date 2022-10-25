import React from "react";
import Button from "../Button/Button";
import Styles from "./Main.module.scss";

export default function Header() {
  return (
    <div className={Styles.aboutMeSection}>
      <div className={Styles.aboutMe}>
        <p className={Styles.hello}>Hello,</p>
        <p className={Styles.name}>I am Eduard.</p>
        <p className={Styles.position}>Software Engineer</p>
        <p className={Styles.details}>
          Hello, I am an aspiring Software Engineer!
        </p>
        <Button text="Hire Me" />
      </div>
      <img src="me.jpg" alt="me" />
    </div>
  );
}
