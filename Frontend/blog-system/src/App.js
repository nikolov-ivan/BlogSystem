import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Logout from './components/Pages/Logout';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Logout" component={Logout} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
