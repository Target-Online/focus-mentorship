/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// client components
import Login from "client/views/Login";
import Folders from "./client/views/Folders.js";
import SubFolders from "client/views/SubFolders";
import Documents from "client/views/Documents";
import Store from "client/root";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Store>
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/folders" component={Folders} />
        <Route path="/subFolders" component={SubFolders} />
        <Route path="/documents" component={Documents} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Store>,
  document.getElementById("root")
);