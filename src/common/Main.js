import React from "react";
import { Switch, Route } from "react-router";
import FormSubmit from "../Module/Form/FormSubmit";
import Home from "../Module/Home/Home";

export default function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={FormSubmit} />
    </Switch>
  );
}
