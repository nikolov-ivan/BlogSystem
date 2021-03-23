import { React } from "react";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div>
      <h1> This is Home page!</h1>
      <div className="cards">
        <Card
          title="What I learned from my visit to The Upside Down"
          author="Ivan Nikolov"
        />
        <Card
          title="What I learned from my visit to The Upside Down"
          author="Elena Nikolova"
        />
        <Card
          title="What I learned from my visit to The Upside Down"
          author="Nikola Nikolov"
        />
      </div>
    </div>
  );
};

export default Home;
