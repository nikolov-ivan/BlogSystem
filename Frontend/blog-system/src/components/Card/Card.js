import { React } from "react";
import image from '../Card/54-400x300.jpg';
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={image} />
      <div className={styles.body}>
        <h2>What I learned from my visit to The Upside Down</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <h5>{props.author}</h5>
      </div>
    </div>
  );
};
export default Card;
