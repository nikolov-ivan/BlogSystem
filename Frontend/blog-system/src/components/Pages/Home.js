import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Button from "./../Button/Button";
import styles from "./Home.module.css";
import Sanitized from "react-sanitized";
import ReactPaginate from 'react-paginate';

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
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);
  }

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
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
    </div>
  );
};

export default Home;
