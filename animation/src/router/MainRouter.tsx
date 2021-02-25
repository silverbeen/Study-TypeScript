import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Rotation, Mouse, Dispersion } from "../components/index";

function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/rotation" component={Rotation} exact />
        <Route path="/mouse" component={Mouse} exact />
        <Route path="/dispersion" component={Dispersion} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default MainRouter;
