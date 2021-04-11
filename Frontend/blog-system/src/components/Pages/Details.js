import { useEffect, useState } from "react";
import * as postsService from "../../services/postsService";
import styles from "./Details.module.css";
import moment from "moment";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
import ReactHtml from "raw-html-react";

const Details = ({ history, match }) => {
  let [post, setPost] = useState({});

  const deletePost = () => {
    postsService.deleteP(match.params.postId);
    history.push("/");
  };
  useEffect(() => {
    postsService
      .getById(match.params.postId)
      .then((res) => setPost(res))
      .catch((e) => {
        return e;
      });
  }, [match]);
  return (
    <div className={styles.detail_container}>
      <h1 className={styles.details_h1}> {post.title}</h1>
      <img
        className={styles.details_img}
        src={post.imageUrl}
        alt={post.title}
      ></img>
      <div className={styles.details_userDetails}>
        <p>Autor: {post.author}</p>
        <p>Added on: {moment(post.createdOn).format("LL")}</p>
      </div>
      <div className={styles.buttons_container}>
        <button value="delete" onClick={deletePost}>
          Delete
        </button>
        <Link to={`/Edit/${match.params.postId}`}>
          <button value="edit">Edit</button>
        </Link>
      </div>
      <p className={styles.details_p}>
        <ReactHtml html={post.content} />
      </p>
    </div>
  );
};

export default Details;
