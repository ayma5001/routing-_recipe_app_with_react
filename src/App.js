import React from "react";
import "./App.css";
import Nav from "./nav";
import Shop from "./shop";
import About from "./about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./recipeDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home-page</h1>
  </div>
);
export default App;
