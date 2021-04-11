import React, { useState, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import styles from "./Create.module.css";
import * as postsService from "../../services/postsService";
import AuthContext from "../../contexts/AuthContext";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

const Create = ({ history }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { userInfo } = useContext(AuthContext);
  const [user, setUser] = userInfo;
  let message = "";

  const createNotification = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "info":
        NotificationManager.info("Info message");
        break;
      case "success":
        NotificationManager.success("Successful Login");
        break;
      case "warning":
        NotificationManager.warning("Invalid post", "", 3000);
        break;
      case "error":
        NotificationManager.error("Wrong login credentials", "", 5000, () => {
          alert("callback");
        });
        break;
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const userData = {};
    userData.title = title;
    userData.content = content;
    userData.imageUrl = imageUrl;
    userData.author = user;
    if (title.length < 5 || content.length < 5) {
      message = "warning";
      createNotification(message);
      history.push("/Create");
      return;
    }

    postsService
      .create(userData)
      .then((data) => {
        message = "success";
        history.push("/");
      })
      .catch((e) => {
        message = "error";
        history.push("/Create");
      });
    createNotification(message);
  };
  const handleEditorChange = (content) => {
    setContent(content);
  };
  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <h1>Create new post here</h1>
      <div className={styles.title}>
        <label className={styles.title_label}>
          <h2>Post Title</h2>
          <input
            className={styles.title_input}
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <h2>Picture URL</h2>
          <input
            className={styles.title_input}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.tinyContainer}>
        <Editor
          value={useState(content)}
          initialValue=""
          init={{
            skin: "oxide",
            height: 500,
            menubar: false,
          }}
          onEditorChange={handleEditorChange}
        ></Editor>
      </div>
      <div>
        <input type="submit" value="Create post" className={styles.button} />
      </div>
    </form>
  );
};

export default Create;
