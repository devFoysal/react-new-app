import React from "react";
import { Switch, Route } from "react-router-dom";

// Config
import { BASE_URL } from "../config";

// Layout
import Layout from "../hoc/Layout";

// pages
import Home from "../pages/Home";

// 404 Page not found
import PageNotFound from '../pages/PageNotFound'


const Routes = () => {
    return (
      <Layout>
        <Switch>
          <Route path={`${BASE_URL}/`} exact component={Home} />
  
          <Route path="**" exact component={PageNotFound} />
        </Switch>
      </Layout>
    );
  };
  
  export default Routes;
  