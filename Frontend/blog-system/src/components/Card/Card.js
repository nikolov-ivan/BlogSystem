import { React } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import moment from "moment";
import Sanitized from "react-sanitized";

const Card = (props) => {
  const stripedHtmlTitle = props.title.replace(/<[^>]+>/g, '');
  const stripedHtmlContent = props.content.replace(/<[^>]+>/g, '');
  return (
    <div className={styles.card}>
      <Link to={`/Posts/Details/${props.id}`}>
        <img src={props.imageUrl} alt={props.title} />
        <div className={styles.userInfo}>
          <h5>Author: {props.author}</h5>
          <h5>Added on: {moment(props.createdOn).format("LL")}</h5>
        </div>
        <div className={styles.body}>
          <h2><Sanitized html={stripedHtmlTitle} wrapperTag="label" /></h2>
          <p><Sanitized html={stripedHtmlContent} wrapperTag="label" /></p>
        </div>
      </Link>
    </div>
  );
};
export default Card;
