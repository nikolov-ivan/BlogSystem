import { useEffect, useState } from "react";
import * as postsService from "../../services/postsService";
import styles from "./Details.module.css";

const Details = ({ match }) => {
  console.log(match);
  let [post, setPost] = useState({});
  

  useEffect(() => {
    postsService.getById(match.params.postId).then((res) => setPost(res));
  }, [match]);

  return (
    <div>
      <h1 className={styles.details_h1}> {post.title}</h1>
      <img
        className={styles.details_img}
        src={post.imageUrl}
        alt={post.title}
      ></img>
      <p className={styles.details_p}>{post.content}</p>
    </div>
  );
};

export default Details;
