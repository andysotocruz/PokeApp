import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../componentes/NavBar";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const PokeRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="container w-sceen ml-20">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon/:name" component={Pokemon} />
          <Router path="/Sign-in" component={SignIn} />
          <Router path="/Sign-up" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default PokeRouter;
