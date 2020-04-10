/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Assignment, CloudDownload, AccountCircle  } from "@material-ui/icons";

// core components
import Button from "shared/components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderLinks = ({
  userSession,
  setUserSession,
}) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/ffsa_official"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/fezilefashionskillsacademy/?ref=bookmarks"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/ffsa_official/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link 
            to="/courses"
            color="transparent"
            className={classes.navLink}
          >
            <Apps className={classes.icons} /> Courses
          </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        {/*
        <Button
          color="transparent"
          onClick={
            () => userSession.state.isLoggedIn 
            ? setUserSession({
                ...userSession,
                state: {
                  ...userSession.state,
                  registration: true 
                }
              }) 
            : setUserSession({
                ...userSession,
                state: {
                  ...userSession.state,
                  login: true,
                  registration: true  
                }
              })
          }
          className={classes.navLink}
        >
          <Assignment className={classes.icons} /> Register Online 
        </Button>
        */}
        <Button
            // eslint-disable-next-line max-len
            href="https://firebasestorage.googleapis.com/v0/b/fezile-fashion-skills-academy.appspot.com/o/assets%2FNEW%20-%20FEES%20SCHEDULE%202020_part%201c%5B5703%5D.pdf?alt=media&token=5758b9e1-92e5-4779-ad8e-6611121ecf42"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
              <CloudDownload className={classes.icons} /> Fee schedule
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
            color="transparent"
            className={classes.navLink}
            onClick={() => setUserSession({
                ...userSession,
                state: {
                  ...userSession.state,
                  login: true
                }
            })}
          >
            <AccountCircle className={classes.icons} /> {userSession.state.isLoggedIn ? userSession.user.FirstName : "Sign in"}
        </Button>
      </ListItem>
    </List>
  );
}

/*
HeaderLinks.defaultProps = {
  isUserLoggedIn: false
};

HeaderLinks.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired,
  isUserLoggedIn: PropTypes.bool
};
*/

export default HeaderLinks
