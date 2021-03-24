import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

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
    <div>
      <h1> This is Home page!</h1>
      <div className="cards">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            author={item.author}
            content={item.content}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
