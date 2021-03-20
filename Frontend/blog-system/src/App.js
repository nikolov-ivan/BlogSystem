import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route />
      </Switch>
    </div>
  );
}

export default App;
