import React, { useState } from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleCartAdd = (item, amount) => {
    setCart([...cart, { item: item, amount: amount }]);
  };

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} />
        <Switch>
          <Route path="/fallguys-shop/" exact component={Home} />
          <Route path="/fallguys-shop/about" component={About} />
          <Route exact path="/fallguys-shop/shop">
            <Shop handleCartAdd={handleCartAdd} />
          </Route>
          <Route path="/fallguys-shop/cart">
            <Cart handleCartAdd={handleCartAdd} cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
