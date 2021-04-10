import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Button from "./../Button/Button";
import styles from "./Home.module.css";
import Sanitized from "react-sanitized";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://localhost:44362/api/getall")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className={styles.cards}>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title.replace(/<[^>]+>/g, "")}
          author={item.author}
          content={item.content.replace(/<[^>]+>/g, "").slice(0, 200) + "..."}
          imageUrl={item.imageUrl}
          createdOn={item.createdOn}
        />
      ))}
    </div>
  );
};

export default Home;
