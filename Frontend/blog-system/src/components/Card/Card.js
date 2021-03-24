import { React } from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.imageUrl} alt={props.title}/>
      <div className={styles.body}>
        <h2>{props.title}</h2>
        <p>
          {props.content}
        </p>
        <h5>{props.author}</h5>
      </div>
    </div>
  );
};
export default Card;
