import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from "./components/Pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
