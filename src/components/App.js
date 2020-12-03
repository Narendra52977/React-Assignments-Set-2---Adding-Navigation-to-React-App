import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import "../styles/App.css";
// import Home from "./Home";
// import About from "./About";
// import Error from "./Error";
// import LocationDisplay from "./LocationDisplay";

function Home() {
  return <div>You are home</div>;
}

function About() {
  return <div>You are on the about page</div>;
}
function LocationDisplay() {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
}
class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route exact path="/about" component={About} />

          <Route default exact path="/" component={Home} />

          <Route
            path="/"
            component={() => {
              return <div>No Match</div>;
            }}
          />
        </Switch>
        <LocationDisplay />
      </div>
    );
  }
}

export default App;
