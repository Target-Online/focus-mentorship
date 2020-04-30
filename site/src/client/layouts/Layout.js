import React from "react";
// creates a beautiful scrollbar
//import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const useStyles = makeStyles(styles);

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  // styles
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.container}>{children}</div>
      </div>
    </div>
  );
}
