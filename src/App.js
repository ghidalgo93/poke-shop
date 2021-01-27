import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);
  const handleCardAdd = (item) => {
    console.log(item);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop">
            <Shop handleCardAdd={handleCardAdd} />
          </Route>
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
