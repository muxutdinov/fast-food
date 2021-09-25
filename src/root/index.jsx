import React from "react";
import { Container } from "./style";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { sidebar } from "../utils/sidebar";
import Notfound from "../components/Notfound";
export const Root = () => {
  return (
    <Container className='constainer'>
      <Router>
        <Switch>
          {sidebar.map(({ path, id }) => (
            <Route key={id} path={path} component={Sidebar} />
          ))}
        </Switch>
        <Switch>
          {sidebar.map(({ Component, path, id }) => (
            <Route exact key={id} path={path} component={Component} />
          ))}
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </Container>
  );
};
export default Root;
