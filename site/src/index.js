import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
    </Router>
  </Store>,
  document.getElementById("root")
);
