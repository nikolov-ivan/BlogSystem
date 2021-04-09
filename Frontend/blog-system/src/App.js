import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Logout from "./components/Pages/Logout";
import Details from "./components/Pages/Details";
import "./App.css";
import AuthContext from "./contexts/AuthContext";
import { useEffect, useState, useContext } from "react";
import isAuth from "./components/Hoc/isAuth";

function App() {
  const [user, setUser] = useState();
  const authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email,
    token: "token",
    user,
  }; 

  return (
    <div className="App">
      <AuthContext.Provider value={{userInfo:[user, setUser], authInfo:authInfo}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route
            exact
            path="/Logout"
            render={() => {
              setUser((oldState) => (oldState = ""));
              return <Redirect to="/" />;
            }}
          />
          <Route
            exact
            path="/Posts/Details/:postId"
            component={isAuth(Details)}
          />
        </Switch>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
