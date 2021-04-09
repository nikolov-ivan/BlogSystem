import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import AuthContext from "../../contexts/AuthContext";
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
      <div className="cards">
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            content={item.content}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      <div className="sidebar"></div>
    </div>
  );
};

export default Home;
