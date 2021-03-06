import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Home.module.css";
import ReactPaginate from "react-paginate";
import * as postsService from "../../services/postsService";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const data = await postsService.getAll();
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <Card
        key={pd.id}
        id={pd.id}
        title={pd.title}
        author={pd.author}
        content={pd.content.slice(0, 200) + "..."}
        imageUrl={pd.imageUrl}
        createdOn={pd.createdOn}
      />
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  useEffect(() => {
    getData();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
  };
  return (
    <div className={styles.cards}>
      {data}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Home;
