import React from "react"
import Navigation from "./Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Message from "./Message";
import Home from "./Home";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App (){
  return (
    <Router>
    <div>
      <Navigation />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/message" component={Message} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
