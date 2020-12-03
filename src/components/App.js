import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import LocationDisplay from "./LocationDisplay";

class App extends Component {
  render() {
    return (
      <div id="main">
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <LocationDisplay data-testid="location-display" />
        </Router>
      </div>
    );
  }
}

export default App;
