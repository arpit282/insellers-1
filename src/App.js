import React from "react";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Tech from "./Tech";
import Services from "./Services";
import Contact from "./contact";
import Account from "./account";
import Interview from "./Interview";
import Nav from "./Nav";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/interview" component={Interview} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Sign" component={Account} />
      </Switch>
      <Jumbotron />
      <Footer />
    </>
  );
}

export default App;
