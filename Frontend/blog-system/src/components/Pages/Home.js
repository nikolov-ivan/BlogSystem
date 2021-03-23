import { React } from "react";
import Card from "../Card/Card";



const Home = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("https://localhost:44362/api/getall")
      .then(res => res.json())
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
      )
  }, [])
  return (
    <div>
      <h1> This is Home page!</h1>
      <div className="cards">

      {items.map(item => (
          <li key={item.id}>
            {item.title} {item.content}
          </li>
        ))}
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
