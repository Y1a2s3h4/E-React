import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav";
import Cards from "./component/Cards";
import Cart from "./component/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Route path="/" exact component={Cards} />
        <Route path="/cart" component={Cart} />
      </Router>
    </div>
  );
}

export default App;
