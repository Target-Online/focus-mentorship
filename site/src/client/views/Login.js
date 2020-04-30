/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from "react";
//import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import CircularProgress from "@material-ui/core/CircularProgress";

// @material-ui/icons
import Email from "@material-ui/icons/Email";

//import { Spinner } from "react-bootstrap";

// core components
import Footer from "shared/components/Footer/Footer.js";
import GridContainer from "shared/components/Grid/GridContainer.js";
import GridItem from "shared/components/Grid/GridItem.js";
import Button from "shared/components/CustomButtons/Button.js";
import Card from "shared/components/Card/Card.js";
import CardBody from "shared/components/Card/CardBody.js";
import CardFooter from "shared/components/Card/CardFooter.js";
import CustomInput from "shared/components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg.jpg";
import { login } from "../api/index.js";
import { CurrentUserContext } from "client/root/index.js";

const useStyles = makeStyles(styles);

const Login = props => {
  const [inProgress, setInProgress] = useState(false);
  const [currentUser] = useContext(CurrentUserContext);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  });
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  useEffect(() => {
    if (currentUser) props.history.push("/folders");
  });

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <p className={classes.divider}>Login</p>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        required: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      value={userDetails.email}
                      onChangeValue={value =>
                        setUserDetails({
                          ...userDetails,
                          email: value
                        })
                      }
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                      value={userDetails.password}
                      onChangeValue={value =>
                        setUserDetails({
                          ...userDetails,
                          password: value
                        })
                      }
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    {inProgress ? (
                      <CircularProgress />
                    ) : (
                      <Button
                        simple
                        color="primary"
                        size="lg"
                        onClick={() => {
                          setInProgress(true);
                          login(userDetails, props, setInProgress);
                        }}
                      >
                        Login
                      </Button>
                    )}
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
};

export default Login;
