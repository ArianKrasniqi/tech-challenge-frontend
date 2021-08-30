import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./config";

const Routes = () => (
  <Switch>
    {routes.map((route, i) => {
      return <Route key={i} {...route} render={route.component} />;
    })}
  </Switch>
);

export default Routes;
