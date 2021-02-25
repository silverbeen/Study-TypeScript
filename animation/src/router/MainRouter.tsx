import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Rotation, Mouse } from "../components/index";

function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/rotation" component={Rotation} exact />
        <Route path="/mouse" component={Mouse} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default MainRouter;
