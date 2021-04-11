import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Details from "./components/Pages/Details";
import Create from "./components/Pages/Create";
import Sidebar from "./components/Pages/Sidebar";
import Edit from "./components/Pages/Edit";
import "./App.css";
import AuthContext from "./contexts/AuthContext";
import { useState, useEffect } from "react";
import isAuth from "./components/Hoc/isAuth";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

function App() {
  const [user, setUser] = useState(null);
  const authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email,
    token: "",
  };  
  const createNotification = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "info":
        NotificationManager.info("Logged out");
        break;
      case "success":
        NotificationManager.success("Successful Registration");
        break;
      case "warning":
        NotificationManager.warning(
          "Warning message",
          "Close after 3000ms",
          3000
        );
        break;
      case "error":
        NotificationManager.error("Wrong login credentials", "", 5000, () => {
          alert("callback");
        });
        break;
    }
  };
  return (
    <div className="App">
      <AuthContext.Provider
        value={{ userInfo: [user, setUser], authInfo: authInfo }}
      >
        <Header />
        <div className="main">
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Route
                exact
                path="/Logout"
                render={() => {
                  setUser((oldState) => (oldState = ""));
                  createNotification("info");
                  return <Redirect to="/" />;
                }}
              />

              <Route
                exact
                path="/Posts/Details/:postId"
                component={isAuth(Details)}
              />
              <Route exact path="/Create" component={isAuth(Create)} />
              <Route exact path="/Edit/:postId" component={isAuth(Edit)} />
            </Switch>
            <Sidebar />
          </ErrorBoundary>
        </div>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
